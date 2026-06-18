import { BUSINESS } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="w-full px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Family-Owned Billings Service With a Personal Touch
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                Aaliby Auto Repair and Towing, LLC is operated by Chris and
                Kimberly MacDonald in Billings, Montana. Chris brings over 22
                years of experience in the automotive and towing industry,
                while Kimberly has been around the automotive world her entire
                life.
              </p>
              <p>
                We strive to provide the best customer service and pride
                ourselves on doing everything we can to meet our customers&apos;
                needs — getting you back on the road as quickly as possible.
              </p>
              <p className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm text-white">
                <span className="font-semibold text-accent">Service area:</span>{" "}
                {BUSINESS.serviceArea}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-surface p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <WrenchIcon />
              </div>
              <h3 className="text-lg font-semibold text-white">Chris MacDonald</h3>
              <p className="mt-2 text-sm text-muted">
                22+ years in automotive repair and towing
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-surface p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <WheelIcon />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Kimberly MacDonald
              </h3>
              <p className="mt-2 text-sm text-muted">
                Lifelong passion for automotive service and customer care
              </p>
            </div>
            <div className="col-span-full rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8">
              <p className="text-xl font-semibold text-white">
                Safe Delivery of Your Vehicle Is Guaranteed
              </p>
              <p className="mt-2 text-muted">
                Every tow is handled with the care your vehicle deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WrenchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
    </svg>
  );
}

function WheelIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="6.25" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M12 10V5.75M13.9 11.38l4.04-1.31M13.18 13.62l2.5 3.44M10.82 13.62l-2.5 3.44M10.1 11.38l-4.04-1.31" />
    </svg>
  );
}
