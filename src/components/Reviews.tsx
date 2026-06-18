import { BUSINESS, GOOGLE_REVIEWS } from "@/lib/constants";

function StarRating() {
  return (
    <div className="flex items-center gap-1" aria-label={`${BUSINESS.googleRating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-accent"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            What Billings Drivers Say
          </h2>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
            <StarRating />
            <p className="text-muted">
              Rated{" "}
              <span className="font-semibold text-white">
                {BUSINESS.googleRating}
              </span>{" "}
              on Google by Billings drivers
              <span className="mx-2 text-white/20">·</span>
              {BUSINESS.googleReviewCount}+ reviews
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {GOOGLE_REVIEWS.map((review) => (
            <blockquote
              key={review.quote}
              className="rounded-2xl border border-white/10 bg-background p-8"
            >
              <StarRating />
              <p className="mt-4 text-lg leading-relaxed text-white">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">— {review.author}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-accent/40 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
