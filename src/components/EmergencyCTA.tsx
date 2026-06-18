import { BUSINESS } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center rounded-2xl border border-accent/30 bg-surface px-8 py-14 text-center sm:px-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Emergency Service
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Get Emergency Towing Service
            <br className="hidden sm:block" /> When You Need It Most
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            {BUSINESS.hours.towing} throughout {BUSINESS.serviceArea}.
          </p>
          <p className="mt-3 text-sm font-medium text-white">
            Fair pricing. Real people. Call the owners.
          </p>
          <p className="mt-2 text-sm text-accent">
            Rated {BUSINESS.googleRating} on Google
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-accent px-10 py-4 text-lg font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:bg-accent-dark hover:shadow-accent/50"
          >
            <PhoneIcon className="h-6 w-6" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
