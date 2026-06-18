import { BUSINESS, GALLERY_ITEMS, SITE_URL } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    description:
      "Family-owned 24/7 emergency towing in Billings, Montana. Repairs available on towed vehicles — serving Yellowstone County since 2018.",
    url: SITE_URL,
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    image: `${SITE_URL}${GALLERY_ITEMS[1].src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.location.streetAddress,
      addressLocality: BUSINESS.location.addressLocality,
      addressRegion: BUSINESS.location.addressRegion,
      postalCode: BUSINESS.location.postalCode,
      addressCountry: BUSINESS.location.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.location.latitude,
      longitude: BUSINESS.location.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Billings",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Yellowstone County",
        },
      },
      {
        "@type": "AdministrativeArea",
        name: "Yellowstone County",
        containedInPlace: {
          "@type": "State",
          name: "Montana",
        },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "24/7 emergency towing",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
        description: "Auto repair shop hours",
      },
    ],
    sameAs: [BUSINESS.facebook, BUSINESS.location.mapsUrl, BUSINESS.usDotUrl],
    identifier: {
      "@type": "PropertyValue",
      name: "USDOT",
      value: BUSINESS.usDot,
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
