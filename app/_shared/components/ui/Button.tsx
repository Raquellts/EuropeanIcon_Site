import { forwardRef } from "react";
import Link from "next/link";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: never;
    external?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof ButtonBaseProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `border border-gold bg-gold/10 text-gold hover:bg-gradient-gold hover:text-background hover:scale-105`,
  secondary:
    "border border-border bg-surface/70 backdrop-blur text-secondary hover:bg-surface-hover hover:text-primary",
  ghost: "text-secondary hover:text-primary hover:bg-surface-hover",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-lg",
  lg: "px-8 py-3 text-base rounded-lg",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      icon,
      children,
      className = "",
      ...rest
    } = props;

    const classes = [
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200",
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if ("href" in rest && rest.href) {
      const { href, external, ...anchorRest } = rest as ButtonAsLink;
      if (external) {
        return (
          <a
            ref={ref as any}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            {...(anchorRest as ComponentPropsWithoutRef<"a">)}
          >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as any}
          href={href}
          className={classes}
          {...(anchorRest as Omit<
            ComponentPropsWithoutRef<typeof Link>,
            "href"
          >)}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </Link>
      );
    }

    const { href: _h, external: _e, ...buttonRest } = rest as any;
    return (
      <button
        ref={ref as any}
        className={classes}
        {...(buttonRest as ComponentPropsWithoutRef<"button">)}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
