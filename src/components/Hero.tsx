import Image from "next/image";
import type { ReactNode } from "react";
import { BUSINESS } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

const HERO_STATS = [
  { value: "24/7/365", label: "Emergency Towing", icon: "clock" },
  { value: "100%", label: "Safe Delivery", icon: "shield" },
  { value: "22+", label: "Years Experience", icon: "wrench" },
] as const;

const STAT_ICONS: Record<string, ReactNode> = {
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 6.916a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 10.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  ),
  wrench: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
  ),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <Image
        src={BUSINESS.heroImage}
        alt="Aaliby Auto Repair and Towing flatbed truck in Billings, Montana"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              {BUSINESS.tagline}
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Billings{" "}
              <span className="text-accent">Emergency Towing</span> You Can
              Trust
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Serving Billings and Yellowstone County since {BUSINESS.foundingYear}{" "}
              — backed by 22+ years of towing experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-accent/40"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                View Our Services
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-xl border border-white/10 bg-surface/80 p-6 pt-10 text-center backdrop-blur-sm lg:min-w-[12rem]"
              >
                <div className="absolute right-4 top-4 text-accent">
                  {STAT_ICONS[stat.icon]}
                </div>
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
