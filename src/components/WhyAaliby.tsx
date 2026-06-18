import type { ReactNode } from "react";
import { WHY_AALIBY } from "@/lib/constants";

const ICONS: Record<string, ReactNode> = {
  family: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.816-6.6-2.1a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
    </svg>
  ),
  pricing: (
    <span className="text-base font-bold leading-none tracking-tighter" aria-hidden="true">
      $$
    </span>
  ),
  local: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  ),
  team: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 6.916a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 10.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  ),
};

export function WhyAaliby() {
  return (
    <section id="why-aaliby" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Aaliby
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            The Local Choice Billings Drivers Trust
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            We&apos;re not a dispatch chain — we&apos;re a family business built
            on honest work, fair pricing, and getting you back on the road.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WHY_AALIBY.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-background p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  {ICONS[item.icon]}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
