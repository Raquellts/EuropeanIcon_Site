"use client";

import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  required,
  placeholder = "Selecione...",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

  const selectedLabel = value || "";
  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownPos({
      top: rect.bottom + window.scrollY + 4,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, []);

  useLayoutEffect(() => {
    if (isOpen) {
      updatePosition();
    }
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) return;
    setSearch("");

    const handleClickOutside = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleScroll = () => {
      updatePosition();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen, updatePosition]);

  const handleSelect = (opt: string) => {
    onChange?.(opt);
    setIsOpen(false);
  };

  const dropdown = isOpen ? (
    <div
      ref={dropdownRef}
      className="fixed z-[9999]"
      style={{ top: dropdownPos.top, left: dropdownPos.left, width: dropdownPos.width }}
    >
      <div className="bg-surface border border-border rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
        <div className="p-2 border-b border-border">
          <input
            ref={searchRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar..."
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-gold/50 transition-colors"
            autoFocus
          />
        </div>
        <ul className="max-h-60 overflow-y-auto py-1">
          {filtered.length === 0 && (
            <li className="px-4 py-2.5 text-sm text-muted">Nenhum resultado</li>
          )}
          {filtered.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => handleSelect(opt)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between gap-2 ${
                  opt === value
                    ? "text-gold bg-gold/10"
                    : "text-secondary hover:bg-surface-hover hover:text-primary"
                }`}
              >
                <span className="truncate">{opt}</span>
                {opt === value && <Check size={14} className="text-gold shrink-0" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;

  return (
    <div className="flex-1">
      <label className="block text-sm font-medium text-secondary mb-2">
        {label}
      </label>
      <input type="hidden" value={value || ""} required={required} />
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full rounded-lg border bg-background px-4 py-3 text-sm text-left transition-colors flex items-center justify-between gap-2 ${
          isOpen
            ? "border-gold/50 ring-1 ring-gold/20"
            : "border-border hover:border-gold/30"
        } ${selectedLabel ? "text-primary" : "text-muted"}`}
      >
        <span className="truncate">{selectedLabel || placeholder}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {createPortal(dropdown, document.body)}
    </div>
  );
}
