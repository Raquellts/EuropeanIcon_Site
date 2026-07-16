"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="absolute inset-0 overflow-y-auto overscroll-behavior:contain">
        <div className="flex min-h-full items-start justify-center p-4 py-20">
          <div className="relative w-full max-w-2xl flex flex-col max-h-[85dvh] rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40 animate-in zoom-in-95 duration-300">
            <div className="shrink-0 flex items-center justify-between rounded-t-2xl border-b border-border bg-surface px-6 py-4">
              <h2 className="text-lg font-bold header-text">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-secondary hover:text-primary hover:bg-surface-hover transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6" style={{ overscrollBehavior: 'contain' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
