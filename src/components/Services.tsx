import type { ReactNode } from "react";
import { SERVICES, SPECIALTY_SERVICES } from "@/lib/constants";

const ICONS: Record<string, ReactNode> = {
  tow: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
  ),
  repair: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
  ),
  roadside: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <path d="M12 4.5 20.5 19.5H3.5L12 4.5z" />
    </svg>
  ),
  delivery: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 6.916a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 10.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            24/7 Emergency Towing in Billings
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            We&apos;re a towing company first — available around the clock across
            Yellowstone County with the personal attention only a family business
            can offer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-background p-8 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-background">
                  {ICONS[service.icon]}
                </div>
                {("hours" in service || "badge" in service) && (
                  <p className="text-sm font-medium text-muted">
                    {"hours" in service ? service.hours : service.badge}
                  </p>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-background p-8">
          <h3 className="text-lg font-semibold text-white">
            Specialty Services
          </h3>
          <p className="mt-2 text-sm text-muted">
            Real work we handle across Billings and Yellowstone County.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {SPECIALTY_SERVICES.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 text-white"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
