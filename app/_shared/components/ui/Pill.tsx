import type { ReactNode } from "react";

type PillVariant = "gold" | "muted" | "outline" | "tagline";

interface PillProps {
  variant?: PillVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  type?: string;
  onClick?: () => void;
}

const variantStyles: Record<PillVariant, string> = {
  gold: "border border-gold bg-surface px-4 py-1.5 text-xs text-gold",
  muted:
    "border border-border bg-surface/70 backdrop-blur-sm px-4 py-1.5 text-xs text-muted",
  outline: "border border-border bg-surface px-4 py-1.5 text-xs text-secondary",
  tagline:
    "border border-text bg-background px-3 py-1 text-xs font-medium text-text transition-colors  group-hover:text-gold group-hover:border-gold",
};

export default function Pill({
  variant = "gold",
  icon,
  children,
  className = "",
  type = "button",
  ...buttonRest
}: PillProps) {
  return type === "button" ? (
    <button
      {...buttonRest}
      type="button"
      className={`inline-flex items-center gap-2 rounded-full ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  ) : (
    <span
      className={`inline-flex items-center gap-2 rounded-full ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
