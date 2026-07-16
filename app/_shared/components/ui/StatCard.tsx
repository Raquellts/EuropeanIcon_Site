"use client";

import { useCountUp } from "../../hooks/useCountUp";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCard({ value, suffix = "", label }: StatCardProps) {
  const { ref, count } = useCountUp({ target: value, duration: 2000 });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold header-text font-serif">
        {count}
        {suffix}
      </div>
      <p className="text-sm text-muted mt-2">{label}</p>
    </div>
  );
}
