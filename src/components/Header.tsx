"use client";

import { useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-lg font-bold text-accent-foreground">
            A
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-tight tracking-wide text-white">
              AALIBY
            </p>
            <p className="text-xs text-muted">Emergency Towing</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={BUSINESS.phoneHref}
          className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-dark md:inline-flex"
        >
          <PhoneIcon className="h-4 w-4" />
          {BUSINESS.phone}
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="inline-flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-surface px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
