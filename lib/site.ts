export const site = {
  name: "Gold Hill Luxe Tour and Travel",
  shortName: "Gold Hill Luxe",
  description:
    "Gold Hill Luxe Tour and Travel offers curated luxury Kashmir holiday packages — Srinagar, Gulmarg, Sonmarg, Pahalgam and Doodhpathri tours with houseboats, shikara rides, private cabs and hand-picked hotels.",
  url: "https://goldhillluxetourandtravel.in",
  phone: "+919541491305",
  phoneDisplay: "+91 95414 91305",
  email: "goldhillluxetourandtravel@gmail.com",
  address: {
    street: "Main Market, Srinagar to Gulmarg Road, near UG Restaurant, Kunzer",
    locality: "Srinagar",
    region: "Jammu and Kashmir",
    postalCode: "193404",
    country: "IN",
  },
  geo: { lat: 34.0837, lng: 74.5333 },
  social: {
    instagram: "https://www.instagram.com/goldhillluxetourandtravel",
    facebook: "https://www.facebook.com/goldhillluxetourandtravel",
    whatsapp: "https://wa.me/919541491305",
  },
  openingHours: "Mo-Su 08:00-21:00",
} as const;

export const nav = [
  { href: "#packages", label: "Packages" },
  { href: "#destinations", label: "Destinations" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

// Festive / Google Ads landing offer — edit dates & numbers here
export const offer = {
  badge: "Diwali & Winter Special",
  headline: "Flat 25% Off on Kashmir Tour Packages",
  sub: "Free Srinagar airport pick-up · Zero hidden charges · Book with just 20% advance",
  validTill: "Offer valid on bookings till 30 November 2026",
  code: "DIWALI25",
};

// Package names are written to match Google Ads search keywords (ad-group themes)
export const packages = [
  {
    slug: "kashmir-tour-package",
    title: "Kashmir Tour Package — Srinagar, Gulmarg & Pahalgam",
    nights: "5 Nights / 6 Days",
    price: "₹12,999",
    priceNote: "per person (2 pax)",
    image:
      "/images/dal-lake.avif",
    highlights: [
      "Houseboat stay on Dal Lake + hotels",
      "Gulmarg Gondola & Pahalgam valleys",
      "Private cab, driver-guide, daily breakfast & dinner",
    ],
    popular: true,
  },
  {
    slug: "kashmir-honeymoon-package-couple",
    title: "Kashmir Honeymoon Package for Couple",
    nights: "6 Nights / 7 Days",
    price: "₹7,999",
    priceNote: "per couple",
    image:
      "/images/houseboat.avif",
    highlights: [
      "Premium houseboat + candle-light dinner",
      "Sunset shikara ride & flower-decked room",
      "Srinagar, Gulmarg, Pahalgam & Sonmarg",
    ],
    popular: false,
  },
  {
    slug: "kashmir-family-tour-package",
    title: "Kashmir Family Tour Package",
    nights: "5 Nights / 6 Days",
    price: "₹13,499",
    priceNote: "per person (4 pax)",
    image:
      "/images/gulmarg.avif",
    highlights: [
      "Family rooms in 3★/4★ hotels",
      "Easy-paced sightseeing with private SUV",
      "Gondola, gardens & Pahalgam day trip",
    ],
    popular: false,
  },
  {
    slug: "gulmarg-snow-ski-tour-package",
    title: "Gulmarg Snow & Ski Tour Package",
    nights: "3 Nights / 4 Days",
    price: "₹11,499",
    priceNote: "per person (2 pax)",
    image:
      "/images/gulmarg-2.avif",
    highlights: [
      "Slope-side Gulmarg hotel + Gondola Phase 1 & 2",
      "Beginner ski lesson with instructor",
      "Warm gear, sledge rides & snow points",
    ],
    popular: false,
  },
  {
    slug: "srinagar-tour-package",
    title: "Srinagar Tour Package — Dal Lake & Mughal Gardens",
    nights: "3 Nights / 4 Days",
    price: "₹8,999",
    priceNote: "per person (2 pax)",
    image:
      "/images/srinagar-garden-2.avif",
    highlights: [
      "Houseboat + hotel stay",
      "Shikara ride, Mughal gardens & old city",
      "Day trip to Gulmarg or Doodhpathri",
    ],
    popular: false,
  },
  {
    slug: "kashmir-group-tour-package",
    title: "Kashmir Group Tour Package",
    nights: "6 Nights / 7 Days",
    price: "₹11,999",
    priceNote: "per person (6+ pax)",
    image:
      "/images/yusmarg.avif",
    highlights: [
      "Best group rates on hotels & tempo traveller",
      "All Kashmir highlights in one trip",
      "Dedicated tour coordinator on ground",
    ],
    popular: false,
  },
];

export const destinations = [
  {
    name: "Srinagar",
    blurb: "Dal Lake, Mughal gardens, floating markets and heritage houseboats.",
    image:
      "/images/srinagar-garden.avif",
  },
  {
    name: "Gulmarg",
    blurb: "Asia's highest gondola, meadows of flowers and winter ski slopes.",
    image:
      "/images/gulmarg.avif",
  },
  {
    name: "Sonmarg",
    blurb: "The Meadow of Gold — Thajiwas glacier, alpine rivers and pony trails.",
    image:
      "/images/trek-ridge.avif",
  },
  {
    name: "Pahalgam",
    blurb: "Lidder valley, Betaab & Aru — pine forests and riverside camps.",
    image:
      "/images/pahalgam.avif",
  },
  {
    name: "Doodhpathri",
    blurb: "Untouched 'valley of milk' meadows just hours from Srinagar.",
    image:
      "/images/doodhpathri.avif",
  },
  {
    name: "Yusmarg",
    blurb: "Quiet pastures, the Doodh Ganga stream and gentle hiking trails.",
    image:
      "/images/yusmarg.avif",
  },
];

export const features = [
  {
    title: "Local Kashmiri experts",
    body: "Our team lives on the Srinagar–Gulmarg road. Real ground knowledge, not a call-centre.",
  },
  {
    title: "Hand-picked stays",
    body: "Verified houseboats and hotels inspected by us — no surprises on arrival.",
  },
  {
    title: "Transparent pricing",
    body: "Clear inclusions, no hidden 'entry' charges, GST invoice on every booking.",
  },
  {
    title: "24×7 on-trip support",
    body: "A dedicated coordinator on WhatsApp for your whole journey.",
  },
  {
    title: "Private, flexible itineraries",
    body: "Every plan is customised — pace, budget and interests are yours to set.",
  },
  {
    title: "Safe & licensed transport",
    body: "Well-maintained cabs and background-checked driver-guides.",
  },
];

export const testimonials = [
  {
    name: "Ananya & Rohit",
    from: "Pune",
    text: "Our honeymoon was flawless — the houseboat, the shikara sunset, the Gulmarg day. Every transfer was on time and the coordinator checked in daily.",
  },
  {
    name: "Deepak Menon",
    from: "Bengaluru",
    text: "Travelled with elderly parents. Gold Hill Luxe planned an easy pace, comfortable car and great hotels. Pricing was exactly as quoted.",
  },
  {
    name: "Sara Fernandes",
    from: "Goa",
    text: "Booked the Gulmarg ski weekend on short notice. Gear, lessons and lift tickets all sorted. Will come back for the full Kashmir tour.",
  },
];

export const faqs = [
  {
    q: "What is the best time to visit Kashmir?",
    a: "March–May for tulips and blossoms, June–August for pleasant weather and green meadows, September–October for autumn chinars, and December–February for snow in Gulmarg. We tailor the itinerary to your travel month.",
  },
  {
    q: "Are your Kashmir tour packages customisable?",
    a: "Yes. Every package is private and fully customisable — hotel category, number of days, destinations, and add-ons like houseboat nights, candle-light dinners or trekking.",
  },
  {
    q: "What is included in the package price?",
    a: "Typically accommodation with breakfast and dinner, all transfers and sightseeing by private vehicle, driver-cum-guide, and applicable taxes. Union cab charges at Gulmarg, Sonmarg and Pahalgam and monument entry fees are shared upfront.",
  },
  {
    q: "How do I book and what is the payment process?",
    a: "Call or WhatsApp us at +91 95414 91305. We share a written itinerary and quote; a booking advance confirms your dates and the balance is paid before or on arrival. You receive a GST invoice.",
  },
  {
    q: "Do you arrange airport pick-up in Srinagar?",
    a: "Yes, Srinagar airport pick-up and drop are included in most packages and can be added to any custom plan.",
  },
];

/* ---------------- SEO ---------------- */

// Full keyword set used in <meta keywords> / on-page copy (from keyword research)
export const seoKeywords = [
  "kashmir tour packages",
  "kashmir trip",
  "kashmir holidays",
  "kashmir package",
  "kashmir trip package",
  "kashmir tour",
  "srinagar tour packages",
  "jammu kashmir tour package",
  "cheapest tour packages for kashmir",
  "kashmir travel packages",
  "kashmir holiday packages",
  "srinagar package",
  "jammu and kashmir tour packages",
  "kashmir tour packages for family",
  "kashmir trip plan",
  "kashmir itinerary",
  "kashmir tour packages for couple",
  "jammu kashmir package",
  "gulmarg tour packages",
  "kashmir packages for couple",
  "kashmir tour plan",
  "kashmir trip budget",
  "best kashmir tour packages",
  "kashmir trip itinerary",
  "kashmir trip cost",
  "kashmir itinerary 5 days",
  "kashmir tours and travels",
  "jammu kashmir trip",
  "kashmir package from srinagar",
  "kashmir tour itinerary",
  "kashmir travel",
  "kashmir itinerary 7 days",
  "best tour packages for kashmir",
  "best travel agency for kashmir tour",
  "kashmir tour package from srinagar",
  "srinagar trip plan",
  "jammu and kashmir package",
  "kashmir group tour packages",
  "cheapest srinagar tour packages",
  "j&k tourism packages",
  "vaishno devi and kashmir tour package",
  "kashmir tour packages for couple price",
  "kashmir itinerary 6 days",
  "kashmir luxury tour packages",
  "srinagar gulmarg pahalgam tour package",
];

// Short chips shown in the hero (highest-volume terms)
export const heroKeywords = [
  "Kashmir Tour Packages",
  "Srinagar Tour Packages",
  "Kashmir Honeymoon Packages",
  "Gulmarg Tour Packages",
  "Kashmir Group Tours",
];

// "Top searched" links shown under the SEO block (like a footer keyword strip)
export const topSearched = [
  "kashmir trip package from delhi",
  "best kashmir tour packages",
  "srinagar tour packages",
  "kashmir tours and travels",
  "kashmir luxury tour packages",
  "kashmir tour packages for family",
  "kashmir tour packages for couple",
  "cheapest tour packages for kashmir",
  "kashmir itinerary 5 days",
  "gulmarg tour packages",
];

export const originCities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
];
