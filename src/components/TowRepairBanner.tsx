import { BUSINESS } from "@/lib/constants";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function TowRepairBanner() {
  return (
    <section className="border-y border-accent/20 bg-gradient-to-r from-accent/10 via-background to-accent/5 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Tow In, Repair Out
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Towing First — Repairs When You Need Them
            </h2>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">
              {BUSINESS.hours.towing} across {BUSINESS.serviceArea}. If your
              vehicle needs work after we tow it in, we can handle repairs at our
              shop on {BUSINESS.location.streetAddress} —{" "}
              {BUSINESS.hours.repairSchedule}. Chris and Kimberly — same team
              from the first call on.
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
