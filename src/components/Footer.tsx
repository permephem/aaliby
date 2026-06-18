import { BUSINESS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface">
      <div className="w-full px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{BUSINESS.name}</p>
            <p className="mt-2 text-sm text-muted">{BUSINESS.tagline}</p>
            <p className="mt-3 text-sm text-muted">{BUSINESS.serviceArea}</p>
            <p className="mt-3 text-sm text-muted">
              <a
                href={BUSINESS.usDotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                USDOT #{BUSINESS.usDot}
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className="transition-colors hover:text-accent"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.emailHref}
                  className="transition-colors hover:text-accent"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {BUSINESS.location.formatted}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Hours
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{BUSINESS.hours.towing}</li>
              <li>{BUSINESS.hours.repair}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            Find us on Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
