"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
  className?: string;
  style?: React.CSSProperties;
  paused?: boolean;
  playbackRate?: number;
}

function isYouTubeUrl(url: string): boolean {
  return /youtube\.com|youtu\.be/.test(url);
}

function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function getYouTubeEmbedUrl(url: string): string {
  const id = getYouTubeVideoId(url);
  if (!id) return url;
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
}

export default function VideoBackground({
  videoSrc,
  fallbackImage,
  className = "",
  style,
  paused = false,
  playbackRate = 1,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const isYouTube = isYouTubeUrl(videoSrc);

  const forceYouTubePlay = () => {
    if (!iframeRef.current?.contentWindow) return;
    try {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    } catch {
      // cross-origin postMessage é seguro, ignorar erro
    }
  };

  useEffect(() => {
    if (isYouTube) return;
    setVideoLoaded(true);
    const timer = setInterval(forceYouTubePlay, 1000);
    const timeout = setTimeout(() => clearInterval(timer), 8000);
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [isYouTube]);

  useEffect(() => {
    if (isYouTube) return;

    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    const handleError = () => setVideoLoaded(false);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    video.load();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc, isYouTube]);

  useEffect(() => {
    if (isYouTube) return;
    const video = videoRef.current;
    if (video) video.playbackRate = playbackRate;
  }, [playbackRate, isYouTube]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = ((e: CustomEvent) => setIsNavbarOpen(e.detail.open)) as EventListener;
    window.addEventListener("navbar-menu-toggle", handler);
    return () => window.removeEventListener("navbar-menu-toggle", handler);
  }, []);

  useEffect(() => {
    if (isYouTube) {
      const command = paused || !isVisible || isNavbarOpen ? "pauseVideo" : "playVideo";
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: command, args: "" }),
        "*"
      );
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    if (paused || !isVisible || isNavbarOpen) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [paused, isVisible, isNavbarOpen, isYouTube]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`} style={style}>
      {isYouTube ? (
        <iframe
          ref={iframeRef}
          src={getYouTubeEmbedUrl(videoSrc)}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="Video background"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {!videoLoaded && !fallbackImage && (
        <div className="absolute inset-0 bg-surface animate-pulse" />
      )}

      {fallbackImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}
    </div>
  );
}
