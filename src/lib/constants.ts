export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.aalibyautorepairandtowing.com";

export const BUSINESS = {
  name: "Aaliby Auto Repair and Towing, LLC",
  tagline: "Locally Owned and Operated",
  foundingYear: 2018,
  phone: "406-534-4928",
  phoneHref: "tel:+14065344928",
  phoneSchema: "+1-406-534-4928",
  email: "Aalibyautorepairandtowing@gmail.com",
  emailHref: "mailto:Aalibyautorepairandtowing@gmail.com",
  facebook: "https://www.facebook.com/446697599239298",
  facebookLabel: "Aaliby Auto Repair and Towing, LLC",
  googleRating: 4.8,
  googleReviewCount: 51,
  googleReviewUrl:
    "https://www.google.com/maps/place/Aaliby+Auto+Repair+and+Towing,+LLC/@45.8345117,-108.4702279,17z/data=!3m1!4b1!4m6!3m5!1s0x53487b43451f5cf1:0x31cd2aee525816d5!8m2!3d45.8345117!4d-108.4702279!16s%2Fg%2F11fm59jhdr",
  usDot: "3293820",
  usDotUrl:
    "https://safer.fmcsa.dot.gov/query.asp?query_param=USDOT&query_string=3293820&query_type=queryCarrierSnapshot&searchtype=ANY",
  location: {
    streetAddress: "1943 Main St, Unit 1",
    addressLocality: "Billings",
    addressRegion: "MT",
    postalCode: "59105",
    addressCountry: "US",
    formatted: "1943 Main St, Unit 1, Billings, MT 59105",
    mapsQuery: "1943 Main St Unit 1, Billings, MT 59105",
    mapsUrl:
      "https://maps.google.com/?q=1943+Main+St+Unit+1,+Billings,+MT+59105",
    latitude: 45.761356,
    longitude: -108.577335,
  },
  serviceArea: "Billings and Yellowstone County, Montana",
  hours: {
    towing: "24/7/365 emergency towing",
    repair: "Repairs on towed vehicles: Mon–Fri, 8 AM – 5 PM",
    repairSchedule: "Mon–Fri, 8 AM – 5 PM",
  },
  heroImage: "/gallery/eb27c8b1898949bd9dd3be7e66b84e83.jpg",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Aaliby", href: "#why-aaliby" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

export const WHY_AALIBY = [
  {
    title: "Family-Owned",
    description:
      "Chris and Kimberly MacDonald run the business — when you call, you talk to the people who do the work.",
    icon: "family",
  },
  {
    title: "Honest, Fair Pricing",
    description:
      "Straightforward rates with no surprises. We treat every customer the way we'd want to be treated.",
    icon: "pricing",
  },
  {
    title: "Billings Locals",
    description: `Serving ${BUSINESS.serviceArea} since ${BUSINESS.foundingYear}. We're your neighbors on Main Street.`,
    icon: "local",
  },
  {
    title: "One Team, Start to Finish",
    description:
      "We tow first — and if your vehicle needs work after we bring it in, the same team can handle repairs Mon–Fri in our shop.",
    icon: "team",
  },
] as const;

export const SERVICES = [
  {
    title: "Emergency Towing",
    description:
      "Emergency towing around the clock, every day of the week. Safe, reliable transport for your vehicle whenever you need it in Billings and Yellowstone County.",
    icon: "tow",
    badge: "24/7/365",
  },
  {
    title: "Auto Repair",
    description:
      "When we tow your vehicle in and it needs work, we can handle repairs in our shop. Same trusted team from the roadside to the fix.",
    icon: "repair",
    hours: "Mon–Fri, 8 AM – 5 PM · tow-in only",
  },
  {
    title: "Roadside Assistance",
    description:
      "Flat tires, dead batteries, lockouts — we're here to help when breakdowns happen.",
    icon: "roadside",
    badge: "When you need us most",
  },
  {
    title: "Vehicle Delivery",
    description:
      "Safe delivery of your vehicle is guaranteed. Your car is in trusted hands from pickup to drop-off.",
    icon: "delivery",
    badge: "Guaranteed",
  },
] as const;

export const SPECIALTY_SERVICES = [
  "Accident & recovery towing",
  "Flatbed transport",
  "Motorcycle towing",
  "Winter & off-road recovery",
] as const;

export const OUR_PROMISE = [
  {
    title: "Upfront Pricing",
    description:
      "We'll explain costs when you call — distance, vehicle type, and situation. Straightforward rates, no surprises.",
  },
  {
    title: "Owners on the Phone",
    description:
      "When you call, you talk to Chris or Kimberly — the same family that owns and operates the business.",
  },
  {
    title: "Compassion First",
    description:
      "We know breakdowns and accidents are stressful. We treat you with the care we'd want for our own family.",
  },
  {
    title: "Your Belongings, Respected",
    description:
      "Need personal items from your vehicle? We'll work with you to get them.",
  },
] as const;

export const GOOGLE_REVIEWS = [
  {
    quote:
      "Phenomenal service! I cannot recommend Aaliby Towing enough.",
    author: "Nathan Filz",
  },
  {
    quote:
      "They were honest and efficient. Their pricing was quite reasonable, and their helpfulness tops. They could have easily taken advantage of us — but they didn't.",
    author: "Dan Stohel",
  },
  {
    quote:
      "This family owned husband and wife operation is the absolute best! They are both so compassionate and friendly — they know how to turn a bad day around.",
    author: "Ahlexxa Purvis",
  },
  {
    quote:
      "Chris came out after hours to pull me out in the snow. He was extremely helpful and quick and not over priced.",
    author: "Dawn Carter",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Are you available 24/7 for emergency towing?",
    answer: `Yes. We provide ${BUSINESS.hours.towing} throughout ${BUSINESS.serviceArea}. Call ${BUSINESS.phone} anytime you need a tow.`,
  },
  {
    question: "Do you also repair vehicles?",
    answer: `Yes — after we tow your vehicle in. We offer repair work ${BUSINESS.hours.repairSchedule} at our shop on ${BUSINESS.location.streetAddress}. We don't take walk-in repair jobs; towing is how vehicles come to us.`,
  },
  {
    question: "Who will I talk to when I call?",
    answer:
      "You'll reach Chris or Kimberly directly — the same family that owns and operates Aaliby. No call center, no runaround.",
  },
  {
    question: "What areas do you serve?",
    answer: `We serve ${BUSINESS.serviceArea}, including all of Billings and surrounding communities.`,
  },
  {
    question: "Can you tow motorcycles or handle winter breakdowns?",
    answer:
      "Yes. We regularly tow motorcycles, handle accident recovery, and operate in Montana winter conditions — snow, ice, and off-road situations included.",
  },
  {
    question: "How much will towing cost?",
    answer: `Call ${BUSINESS.phone} and we'll give you a clear quote based on your situation — distance, vehicle type, and what you need. We believe in honest, upfront pricing with no runaround.`,
  },
  {
    question: "Can I get my personal items from my vehicle?",
    answer:
      "Yes. We'll work with you to retrieve personal belongings from your vehicle. Your items are never used as leverage — we'll help you get what you need.",
  },
  {
    question: "How do I get a quote?",
    answer: `Call ${BUSINESS.phone} for the fastest quote. For non-emergencies, you can also email us at ${BUSINESS.email}.`,
  },
] as const;

export const GALLERY_ITEMS = [
  {
    src: "/gallery/bbf44bd1ff994b1e81d810e796e6d504.jpg",
    alt: "Aaliby flatbed tow truck transporting a custom pickup in Billings, MT",
  },
  {
    src: "/gallery/eb27c8b1898949bd9dd3be7e66b84e83.jpg",
    alt: "Aaliby Auto Repair and Towing flatbed truck with 24 hour towing in Billings",
  },
  {
    src: "/gallery/a2ff3bc227d44eb6b067381731cfe67e.jpg",
    alt: "Accident recovery and cleanup by Aaliby towing in Billings, Montana",
  },
  {
    src: "/gallery/2d4fdbe5086f4c4f817e77fee078772e.jpg",
    alt: "Securing a damaged vehicle on the Aaliby flatbed",
  },
  {
    src: "/gallery/1d4002dce296432e96f1917966860f26.jpg",
    alt: "Winter towing a classic car through the snow in Billings, MT",
  },
  {
    src: "/gallery/abd3462fe09445a09a540769b7ab7788.jpg",
    alt: "Towing a damaged silver car on Aaliby flatbed",
  },
  {
    src: "/gallery/1bef593102384dc6aa0e529f4c51adfe.jpg",
    alt: "Loading a wrecked vehicle onto the Aaliby tow truck",
  },
  {
    src: "/gallery/a9a98e87bc25481aadfaac152994bf2a.jpg",
    alt: "Motorcycle towing in snowy conditions in Yellowstone County",
  },
  {
    src: "/gallery/b9085b9dbb644adf8acb84cd6ab42adb.jpg",
    alt: "Rollover truck recovery in the snow near Billings, Montana",
  },
] as const;
