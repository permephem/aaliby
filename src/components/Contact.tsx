import type { ReactNode } from "react";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { LocationMap } from "@/components/LocationMap";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Get in Touch in Billings
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Need a tow in Billings or Yellowstone County? Call anytime —
              we&apos;re available 24/7. If your vehicle needs work after we
              bring it in, we can help with that too.
            </p>

            <div className="mt-10 space-y-6">
              <ContactItem
                icon={<PhoneIcon />}
                label="Phone"
                href={BUSINESS.phoneHref}
                value={BUSINESS.phone}
              />
              <ContactItem
                icon={<EmailIcon />}
                label="Email"
                href={BUSINESS.emailHref}
                value={BUSINESS.email}
              />
              <ContactItem
                icon={<MapPinIcon />}
                label="Address"
                href={BUSINESS.location.mapsUrl}
                value={BUSINESS.location.formatted}
                external
              />
              <ContactItem
                icon={<ClockIcon />}
                label="Hours"
                value={
                  <>
                    <span className="block">{BUSINESS.hours.towing}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {BUSINESS.hours.repair}
                    </span>
                  </>
                }
              />
              <ContactItem
                icon={<FacebookIcon />}
                label="Facebook"
                href={BUSINESS.facebook}
                value={BUSINESS.facebookLabel}
                external
              />
              <ContactItem
                icon={<UsDotIcon />}
                label="USDOT"
                href={BUSINESS.usDotUrl}
                value={`#${BUSINESS.usDot}`}
                external
              />
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Find Us in Billings
          </h3>
          <LocationMap />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted">{label}</p>
        {href ? (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="mt-1 block text-white transition-colors hover:text-accent"
          >
            {value}
          </a>
        ) : (
          <div className="mt-1 text-white">{value}</div>
        )}
      </div>
    </div>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function UsDotIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 00-.75.75v11.69c0 .897.32 1.763.9 2.437l6.75 7.5a.75.75 0 001.2 0l6.75-7.5a3.375 3.375 0 00.9-2.437V3a.75.75 0 00-.75-.75h-15zM9 6a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z" clipRule="evenodd" />
    </svg>
  );
}
