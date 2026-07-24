"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { navigation } from "../../../../src/data/navigation";
import { institute } from "../../../../src/data/institute";
import { useAnchorNavigation } from "../../hooks/useAnchorNavigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(
    null,
  );
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigateTo = useAnchorNavigation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      window.history.replaceState(null, "", window.location.pathname);
      const timer = setTimeout(() => {
        navigateTo(hash);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname, navigateTo]);

  // Track scroll for a dynamic, condensed header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus on route change
  useEffect(() => {
    setMegaOpen(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    setMobileSubExpanded(null);
  }, [pathname]);

  // Notify EventSubNav when menus open/close
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("navbar-menu-toggle", {
        detail: { open: megaOpen !== null || mobileOpen },
      }),
    );
  }, [megaOpen, mobileOpen]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMega = (label: string) => {
    clearCloseTimer();
    setMegaOpen(label);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setMegaOpen(null), 140);
  };

  const handleNavClick = (href: string) => {
    setMegaOpen(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    setMobileSubExpanded(null);
    router.push(href);
  };

  const handleAnchorClick = (href: string) => {
    setMegaOpen(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    setMobileSubExpanded(null);

    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener noreferrer");
      return;
    }

    if (href.startsWith("#")) {
      const id = href.slice(1);
      if (pathname === "/") {
        navigateTo(id);
      } else {
        router.push(`/${href}`);
      }
      return;
    }

    const [route, hash] = href.split("#");
    if (hash && pathname === route) {
      navigateTo(hash);
    } else {
      router.push(href);
    }
  };

  const handleLogoClick = () => {
    setMegaOpen(null);
    setMobileOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      router.push("/");
    }
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isExternal = (href: string) => href.startsWith("http");

  const activeItem = navigation.find((n) => n.label === megaOpen);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        onMouseLeave={scheduleClose}
      >
        <div
          className={`absolute inset-0 nav-blur transition-all duration-500 ${
            scrolled || megaOpen
              ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
              : "bg-background/10 backdrop-blur-xl border-b border-border"
          }`}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 shrink-0 bg-transparent border-none cursor-pointer group"
            >
              <Image
                src={institute.logo}
                alt={institute.name}
                width={72}
                height={72}
                className={`transition-all duration-500 ${scrolled ? "w-12 h-12" : "w-14 h-14"} object-contain`}
              />
              <span className="font-serif font-thin hidden sm:flex lg:hidden xl:flex text-primary text-sm flex-col text-start leading-tight">
                European &amp; Icon
                <span className="text-secondary font-sans_serif">
                  Institute
                </span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isOpen = megaOpen === item.label;
                const active = isActive(item.href);
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => openMega(item.label)}
                  >
                    <button
                      onClick={() => {
                        if (megaOpen === item.label) {
                          setMegaOpen(null);
                        } else {
                          openMega(item.label);
                        }
                      }}
                      className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-wide font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
                        isOpen || active
                          ? "text-gold"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : ""}`}
                      />
                      <span
                        className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold transition-all duration-300 ${
                          isOpen || active
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Right side: CTA + mobile hamburger */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavClick("/contato")}
                className="hidden lg:inline-flex items-center gap-1.5 rounded-lg bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Fale Conosco
                <ArrowRight size={14} />
              </button>

              <div className="lg:hidden">
                <button
                  onClick={() => {
                    setMobileOpen(!mobileOpen);
                    setMegaOpen(null);
                  }}
                  className="inline-flex items-center justify-center p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-hover transition-colors border border-border bg-transparent"
                  aria-expanded={mobileOpen}
                  aria-label="Abrir menu"
                >
                  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop mega-menu panel */}
        {activeItem && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-4">
              <div className="section-fade-in overflow-hidden rounded-2xl border border-border bg-background/90 backdrop-blur-xl shadow-2xl shadow-black/40">
                <div className="grid grid-cols-12 gap-0">
                  {/* Featured column */}
                  {activeItem.featured && (
                    <button
                      onClick={() => handleNavClick(activeItem.featured!.href)}
                      className="col-span-4 group relative flex flex-col justify-between p-7 text-left bg-gradient-to-br from-gold-dark/10 via-surface to-surface border-r border-border overflow-hidden"
                    >
                      <div className="sparkle-dots absolute inset-0 opacity-40" />
                      <div className="relative z-10">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                          {activeItem.label}
                        </span>
                        <h3 className="mt-3 font-serif text-2xl text-primary text-balance">
                          {activeItem.featured.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-secondary">
                          {activeItem.featured.description}
                        </p>
                      </div>
                      <span className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold group-hover:gap-3 transition-all">
                        {activeItem.featured.cta}
                        <ArrowRight size={16} />
                      </span>
                    </button>
                  )}

                  {/* Links column */}
                  <div
                    className={`${activeItem.featured ? "col-span-8" : "col-span-12"} p-7`}
                  >
                    {/* Simple anchor list */}
                    {activeItem.anchors && activeItem.anchors.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeItem.anchors.map((anchor) => (
                          <button
                            key={anchor.href}
                            onClick={() => handleAnchorClick(anchor.href)}
                            className="group flex items-start gap-3 rounded-xl p-3 text-left transition-colors hover:bg-surface-hover"
                          >
                            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-gold transition-colors group-hover:border-gold/40">
                              <ChevronRight size={16} />
                            </span>
                            <span className="flex flex-col">
                              <span className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                                {anchor.label}
                                {isExternal(anchor.href) && (
                                  <ExternalLink
                                    size={12}
                                    className="text-muted"
                                  />
                                )}
                              </span>
                              {anchor.description && (
                                <span className="text-xs text-muted">
                                  {anchor.description}
                                </span>
                              )}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Sub-sections (cards) with nested anchors */}
                    {activeItem.children && activeItem.children.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeItem.children.map((child) => (
                          <div
                            key={child.label}
                            className="rounded-xl border border-border bg-surface/60 p-4 transition-colors hover:border-gold/30"
                          >
                            <button
                              onClick={() =>
                                child.href && handleNavClick(child.href)
                              }
                              className="text-left w-full group"
                            >
                              <span className="block text-sm font-bold text-primary group-hover:text-gold transition-colors text-balance">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-1 block text-xs text-muted line-clamp-2">
                                  {child.description}
                                </span>
                              )}
                            </button>
                            {child.anchors && child.anchors.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-1.5 border-t border-border/60 pt-3">
                                {child.anchors.map((anchor) => (
                                  <button
                                    key={anchor.href}
                                    onClick={() =>
                                      handleAnchorClick(anchor.href)
                                    }
                                    className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-secondary transition-colors hover:border-gold/40 hover:text-gold"
                                  >
                                    {anchor.label}
                                    {isExternal(anchor.href) && (
                                      <ExternalLink
                                        size={10}
                                        className="text-muted"
                                      />
                                    )}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`absolute left-0 right-0 bottom-0 bg-background/97 backdrop-blur-xl border-t border-border overflow-y-auto transition-all duration-500 ${scrolled ? "top-16" : "top-20"}`}
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const isExpanded = mobileExpanded === item.label;
                const active = isActive(item.href);
                const hasSubItems =
                  (item.children && item.children.length > 0) ||
                  (item.anchors && item.anchors.length > 0);

                return (
                  <div
                    key={item.label}
                    className="rounded-xl overflow-hidden border border-border"
                  >
                    <div className="flex items-stretch">
                      <button
                        onClick={() => {
                          if (hasSubItems) {
                            setMobileExpanded(isExpanded ? null : item.label);
                          } else {
                            handleNavClick(item.href);
                          }
                        }}
                        className={`flex-1 text-left px-4 py-3.5 text-base font-semibold transition-colors ${
                          active
                            ? "text-gold"
                            : "text-primary hover:bg-surface-hover"
                        }`}
                      >
                        {item.label}
                      </button>
                      {hasSubItems && (
                        <button
                          onClick={() =>
                            setMobileExpanded(isExpanded ? null : item.label)
                          }
                          aria-label={`Expandir ${item.label}`}
                          className={`px-4 flex items-center border-l border-border transition-colors ${
                            isExpanded
                              ? "text-gold bg-surface"
                              : "text-secondary hover:bg-surface-hover"
                          }`}
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {hasSubItems && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded
                            ? "max-h-[1200px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-3 pb-3 pt-1 space-y-1 bg-background/40">
                          {/* Direct anchors */}
                          {item.anchors?.map((anchor) => (
                            <button
                              key={anchor.href}
                              onClick={() => handleAnchorClick(anchor.href)}
                              className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-secondary transition-colors hover:bg-surface-hover hover:text-gold"
                            >
                              <ChevronRight
                                size={14}
                                className="text-muted shrink-0"
                              />
                              {anchor.label}
                              {isExternal(anchor.href) && (
                                <ExternalLink
                                  size={11}
                                  className="text-muted"
                                />
                              )}
                            </button>
                          ))}

                          {/* Ver página link for items with direct anchors */}
                          {item.href &&
                            item.anchors &&
                            item.anchors.length > 0 && (
                              <button
                                onClick={() => handleNavClick(item.href!)}
                                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-xs font-semibold text-gold transition-colors hover:bg-surface-hover"
                              >
                                Ver página
                                <ArrowRight size={12} />
                              </button>
                            )}

                          {/* Children with their own nested anchors */}
                          {item.children?.map((child) => {
                            const subKey = `${item.label}::${child.label}`;
                            const subOpen = mobileSubExpanded === subKey;
                            return (
                              <div
                                key={child.label}
                                className="border-t border-border"
                              >
                                <button
                                  onClick={() =>
                                    setMobileSubExpanded(
                                      subOpen ? null : subKey,
                                    )
                                  }
                                  className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
                                >
                                  <span className="text-sm font-semibold text-primary text-balance pt-1">
                                    {child.label}
                                  </span>
                                  <ChevronDown
                                    size={15}
                                    className={`shrink-0 text-secondary transition-transform duration-300 ${subOpen ? "rotate-180 text-gold" : ""}`}
                                  />
                                </button>
                                <div
                                  className={`overflow-hidden transition-all duration-300 ${
                                    subOpen
                                      ? "max-h-[600px] opacity-100"
                                      : "max-h-0 opacity-0"
                                  }`}
                                >
                                  <div className="px-2 py-2 space-y-0.5 ">
                                    {child.anchors?.map((anchor) => (
                                      <button
                                        key={anchor.href}
                                        onClick={() =>
                                          handleAnchorClick(anchor.href)
                                        }
                                        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-secondary transition-colors hover:bg-surface-hover hover:text-gold"
                                      >
                                        <ChevronRight
                                          size={12}
                                          className="text-muted shrink-0"
                                        />
                                        {anchor.label}
                                        {isExternal(anchor.href) && (
                                          <ExternalLink
                                            size={10}
                                            className="text-muted"
                                          />
                                        )}
                                      </button>
                                    ))}
                                    {child.href && (
                                      <button
                                        onClick={() =>
                                          handleNavClick(child.href!)
                                        }
                                        className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm font-semibold text-gold transition-colors hover:bg-surface-hover"
                                      >
                                        Abrir página
                                        <ArrowRight size={12} />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <button
                onClick={() => handleNavClick("/contato")}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-gold-light"
              >
                Fale Conosco
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
