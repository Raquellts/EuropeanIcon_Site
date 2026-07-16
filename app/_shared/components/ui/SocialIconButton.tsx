import type { ReactNode } from 'react';

interface SocialIconButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  size?: 'sm' | 'md';
}

const sizeStyles = {
  sm: 'p-2.5',
  md: 'p-3',
};

export default function SocialIconButton({
  href,
  icon,
  label,
  size = 'md',
}: SocialIconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-xl border border-border bg-surface-hover ${sizeStyles[size]} text-secondary hover:text-gold hover:border-gold/30 transition-all duration-200 inline-flex items-center justify-center`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}
