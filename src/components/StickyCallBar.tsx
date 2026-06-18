"use client";

import { BUSINESS } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent/30 bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30"
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now — {BUSINESS.phone}
      </a>
    </div>
  );
}
