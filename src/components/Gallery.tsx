import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/constants";

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="w-full px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Here&apos;s What We&apos;ve Been Working On
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Every photo is real work in Billings and Yellowstone County — towing,
            recovery, and getting drivers back on the road.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-surface"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
