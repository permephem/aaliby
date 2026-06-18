import { OUR_PROMISE } from "@/lib/constants";

export function OurPromise() {
  return (
    <section id="our-promise" className="py-24">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Promise
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            How We Treat Every Call
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A breakdown or accident is stressful enough. When you call Aaliby,
            this is what you can expect — every time.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OUR_PROMISE.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-accent/20 bg-surface p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
