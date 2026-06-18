import { BUSINESS } from "@/lib/constants";

export function LocationMap() {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.location.mapsQuery)}&hl=en&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <iframe
        title={`Map showing ${BUSINESS.name} in Billings, MT`}
        src={embedSrc}
        className="h-72 w-full border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
