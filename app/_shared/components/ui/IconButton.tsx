import { forwardRef } from "react";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

interface IconButtonProps extends Omit<
  ComponentPropsWithoutRef<"button">,
  "children"
> {
  icon: ReactNode;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost";
}

const sizeStyles = {
  sm: "p-1.5",
  md: "p-2.5",
  lg: "p-3",
};

const variantStyles = {
  default:
    "bg-background/80 border border-border text-secondary hover:text-primary hover:bg-surface",
  ghost: "text-secondary hover:text-primary hover:bg-surface-hover",
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { icon, label, size = "md", variant = "default", className = "", ...rest },
    ref,
  ) => {
    const classes = [
      "inline-flex items-center justify-center rounded-full transition-all duration-200",
      sizeStyles[size],
      variantStyles[variant],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} aria-label={label} {...rest}>
        {icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";

export { IconButton };
export type { IconButtonProps };
