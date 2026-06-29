// =============================================================================
// SITE DATA — Strike Freight & Logistics
// =============================================================================
// This is the single source of truth for business content: contact details,
// routes, rates, copy for sections, FAQ, testimonials, etc.
//
// EDIT THIS FILE to update the live site — no component changes needed for
// content updates. Anything tagged "[CONFIRM ...]" is a placeholder the
// client must verify or supply (see README.md for the full checklist).
// =============================================================================

// -----------------------------------------------------------------------------
// Core business info
// -----------------------------------------------------------------------------

export const businessInfo = {
  name: "Strike Freight & Logistics",
  shortName: "Strike Freight",
  legalName: "Strike Freight & Logistics", // [CONFIRM] registered company name, if different
  tagline: "Cargo in 7–10 Days. Courier in 2–5 Days. We Ship Every Friday.",
  metaDescription:
    "Strike Freight & Logistics ships cargo, courier and shop-and-ship parcels between Nigeria and the USA, UK, Canada, Europe and Germany. Real Ogba office, weekly Friday shipping. Book on WhatsApp or get a quote.",

  // [CONFIRM] One flyer shows 09051178525, another shows 09051175825 — confirm
  // the correct live WhatsApp number with the client before launch.
  whatsappNumberRaw: "09051178525",
  whatsappNumberIntl: "2349051178525",

  phoneNumberRaw: "09028319799",
  phoneNumberIntl: "+2349028319799",

  // [CONFIRM] Flyers show both "frieght"/"freight" spelling and both gmail/yahoo
  // domains — confirm the exact live inbox before launch.
  email: "strikefrieghtlogistics@gmail.com",

  address: {
    suite: "Suite H101",
    building: "Ogba Central Mall (Ogba Multipurpose Shopping Complex)",
    street: "Abiodun Jagun Street, Ogba",
    city: "Lagos",
    country: "Nigeria",
    full: "Suite H101, Ogba Central Mall / Ogba Multipurpose Shopping Complex, Abiodun Jagun Street, Ogba, Lagos, Nigeria",
    // Used to embed a Google Map without needing an API key.
    mapQuery: "Ogba Central Mall, Abiodun Jagun Street, Ogba, Lagos, Nigeria",
  },

  socials: {
    instagram: "https://instagram.com/strikefreightlogistics", // [CONFIRM] exact handle URL
    tiktok: "https://www.tiktok.com/@strikefreightlogistics", // [CONFIRM] exact handle URL
    facebook: "https://facebook.com/strikefreightlogistics", // [CONFIRM] exact handle URL
  },

  // [CONFIRM] live production domain — used in metadata, sitemap & JSON-LD.
  siteUrl: "https://www.strikefreightlogistics.com",

  hours: {
    weekdays: "Mon – Sat, 9:00am – 6:00pm", // [CONFIRM] real opening hours
    note: "Closed Sundays and public holidays.", // [CONFIRM]
  },
};

// -----------------------------------------------------------------------------
// WhatsApp helpers — single source of truth for every wa.me link on the site
// -----------------------------------------------------------------------------

/** Builds a wa.me deep link pre-filled with `message`. */
export function buildWhatsAppLink(message: string, numberIntl: string = businessInfo.whatsappNumberIntl): string {
  const cleaned = numberIntl.replace(/[^\d]/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: "Hi Strike Freight, I'd like to know more about your shipping services.",
  bookNow: "Hi Strike Freight, I'd like to book a shipment.",
  getQuote: "Hi Strike Freight, I'd like a quote for shipping. Here are my details:",
  notSure: "Hi Strike Freight, I'm not sure which service fits what I need. Can you help?",
  trackPrefix: "Hi Strike Freight, please can you give me an update on my shipment?",
  usAddress: "Hi Strike Freight, please can I get my free US/UK/Canada shopping address?",
  officeLocation: "Hi Strike Freight, please can you confirm your office drop-off location and opening hours?",
};

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

export const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Track", href: "/track" },
  { label: "What We Ship", href: "/what-we-ship" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// -----------------------------------------------------------------------------
// Trust bar (Home page, just under the hero)
// -----------------------------------------------------------------------------

export const trustBarItems = [
  { icon: "shield", label: "Fully Insured" },
  { icon: "doorstep", label: "Doorstep Delivery" },
  { icon: "calendar", label: "Ships Every Friday" },
  { icon: "mapPin", label: "Real Ogba Office" },
  { icon: "whatsapp", label: "Fast WhatsApp Support" },
] as const;

// -----------------------------------------------------------------------------
// Timelines & shipping schedule
// -----------------------------------------------------------------------------

export const timelines = {
  cargoDays: "7–10 days",
  courierDays: "2–5 working days",
  shippingDay: "Friday",
  cutoffNote: "Drop off, pay or place your order by Thursday to make this week's Friday shipment.",
  // Used by the homepage countdown — day-of-week (0 = Sunday) and 24h hour
  // of the cutoff. [CONFIRM] exact cutoff time with the client.
  cutoffDayOfWeek: 4, // Thursday
  cutoffHour: 18, // 6:00pm
};

// -----------------------------------------------------------------------------
// Routes we serve
// -----------------------------------------------------------------------------
// `confirmed: false` means the rate is an illustrative placeholder — the
// calculator and route cards both render a "[CONFIRM]" flag whenever this
// is false, so nothing reads as a final, guaranteed price.

export type RateCurrency = "USD" | "GBP" | "EUR";

export interface RouteRate {
  amount: number;
  currency: RateCurrency;
  confirmed: boolean;
}

export interface ShippingRoute {
  id: string;
  name: string;
  flag: string;
  blurb: string;
  cargoRate: RouteRate;
  courierRate: RouteRate;
  direction: ("import" | "export")[];
}

export const routes: ShippingRoute[] = [
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    blurb: "Shopping from the States or sending cargo there? We handle both, from a Lagos pickup to a US doorstep.",
    cargoRate: { amount: 8, currency: "USD", confirmed: false },
    courierRate: { amount: 12, currency: "USD", confirmed: false },
    direction: ["import", "export"],
  },
  {
    id: "uk",
    name: "UK",
    flag: "🇬🇧",
    blurb: "Need a UK address to shop with, or sending cargo and courier across? We do both, door to door.",
    cargoRate: { amount: 6, currency: "GBP", confirmed: false },
    courierRate: { amount: 10, currency: "GBP", confirmed: false },
    direction: ["import", "export"],
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    blurb: "We move cargo and courier between Lagos and Canada, handled properly on both ends.",
    cargoRate: { amount: 9, currency: "USD", confirmed: false },
    courierRate: { amount: 13, currency: "USD", confirmed: false },
    direction: ["import", "export"],
  },
  {
    id: "europe",
    name: "Europe / Germany",
    flag: "🇪🇺",
    blurb: "Germany and the rest of the EU, covered: cargo, courier and shop-and-ship in one place.",
    cargoRate: { amount: 7, currency: "EUR", confirmed: false },
    courierRate: { amount: 11, currency: "EUR", confirmed: false },
    direction: ["import", "export"],
  },
  {
    id: "worldwide",
    name: "Worldwide",
    flag: "🌍",
    blurb: "Don't see your country listed? Message us your route on WhatsApp and we'll sort you out.",
    cargoRate: { amount: 8, currency: "USD", confirmed: false },
    courierRate: { amount: 12, currency: "USD", confirmed: false },
    direction: ["import", "export"],
  },
];

export const currencySymbols: Record<RateCurrency, string> = {
  USD: "$",
  GBP: "£",
  EUR: "€",
};

// -----------------------------------------------------------------------------
// Pricing calculator configuration
// -----------------------------------------------------------------------------

export const calculatorConfig = {
  // [CONFIRM] minimum billable weight per shipment, in kg.
  minimumBillableWeightKg: 1,
  // [CONFIRM] flat handling fee added to every estimate, in Naira. Set to 0 to disable.
  handlingFeeNGN: 0,
  // Standard air-freight volumetric divisor (cm³ ÷ divisor = volumetric kg). [CONFIRM]
  volumetricDivisor: 5000,
  volumetricExplainer:
    "Got something big but light, like a box of clothes or a carton? We charge whichever is more: what it weighs on the scale, or its volumetric weight (a number based on how much space it takes up). Every freight company does it this way. It just keeps things fair when space matters as much as weight.",
  disclaimer: "This is a rough guide, not a final price. We'll confirm the exact cost on WhatsApp once we see what you're sending.",
};

// -----------------------------------------------------------------------------
// Services
// -----------------------------------------------------------------------------

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  details: string[];
  timeline: string;
  icon: "plane" | "ship" | "courier" | "shopping";
}

export const services: ServiceItem[] = [
  {
    id: "air-freight",
    title: "Air Freight",
    summary: "Need it there fast? Air is the quickest way to move cargo between Nigeria and the world.",
    details: [
      "Best for documents and any cargo that just can't wait.",
      "Delivered in 7–10 days. We pack and handle every item with care from pickup to drop-off.",
      "Covers all our routes: USA, UK, Canada, Europe/Germany and worldwide.",
    ],
    timeline: "7–10 days",
    icon: "plane",
  },
  {
    id: "sea-freight",
    title: "Sea Freight",
    summary: "The budget-friendly option when you're shipping something bulky or heavy and can wait a bit longer.",
    details: [
      "Makes sense for bigger shipments where cost per kg matters more than speed.",
      "Good for bulk personal items, machines and commercial quantities.",
      "Schedules and rates vary by route. Message us on WhatsApp for the current sailing dates.",
    ],
    timeline: "Schedule confirmed on WhatsApp",
    icon: "ship",
  },
  {
    id: "courier",
    title: "Courier",
    summary: "Smaller parcel, can't wait? Courier gets it door-to-door the fastest.",
    details: [
      "Built for documents, small packages and anything urgent.",
      "Delivered in 2–5 working days, tracked from pickup to your door.",
      "Perfect for one-off sends that don't need to wait for a cargo batch.",
    ],
    timeline: "2–5 working days",
    icon: "courier",
  },
  {
    id: "worldwide-shopping",
    title: "Worldwide Shopping (Shop & Ship)",
    summary: "Shop any international store you like, and we'll receive, consolidate and ship it home to you.",
    details: [
      "Get a free shopping address in the US, UK or Canada and shop wherever you want.",
      "Don't have an international card? Send us the link or store name and we'll buy it for you.",
      "We check, photograph and group your items together so they go out on the next Friday shipment.",
    ],
    timeline: "Ships every Friday",
    icon: "shopping",
  },
];

// -----------------------------------------------------------------------------
// How It Works — Import (Shop & Ship) and Export (Cargo & Courier) flows
// -----------------------------------------------------------------------------

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export const importFlowSteps: FlowStep[] = [
  {
    step: 1,
    title: "Get your free US/UK/Canada address",
    description: "We hand you a free shipping address abroad, or skip that entirely and just send us the link. We'll shop for you.",
  },
  {
    step: 2,
    title: "Shop your favourite stores",
    description: "Shop online like you normally would, fashion, gadgets, whatever you need, and have it shipped to your new address.",
  },
  {
    step: 3,
    title: "We receive, verify & consolidate",
    description: "Once your items land at our warehouse, we check them over, snap photos, and group everything into one shipment.",
  },
  {
    step: 4,
    title: "We ship every Friday",
    description: "Your parcel goes out with that week's Friday shipment and is tracked all the way to your door in Nigeria.",
  },
];

export const exportFlowSteps: FlowStep[] = [
  {
    step: 1,
    title: "Get a quote on WhatsApp",
    description: "Tell us what you're sending, where it's headed, and roughly what it weighs. We'll get back to you with a price fast.",
  },
  {
    step: 2,
    title: "Drop off or request pickup",
    description: "Bring it down to our Ogba office, or let us know and we'll arrange a pickup near you in Lagos.",
  },
  {
    step: 3,
    title: "We pack, weigh & ship",
    description: "We pack it the right way, weigh it, lock in your final price, and book it on cargo (7–10 days) or courier (2–5 days).",
  },
  {
    step: 4,
    title: "Track & receive worldwide",
    description: "From there, we keep you posted on WhatsApp until it lands safely, wherever in the world it's headed.",
  },
];

// -----------------------------------------------------------------------------
// What We Ship — category grid
// -----------------------------------------------------------------------------

export interface ShippingCategory {
  id: string;
  label: string;
  icon: "food" | "document" | "clothing" | "machine" | "shoe" | "bag" | "jewelry" | "gadget";
}

export const shippingCategories: ShippingCategory[] = [
  { id: "food", label: "Food Items", icon: "food" },
  { id: "documents", label: "Documents", icon: "document" },
  { id: "clothing", label: "Clothing", icon: "clothing" },
  { id: "machines", label: "Machines & Equipment", icon: "machine" },
  { id: "shoes", label: "Shoes", icon: "shoe" },
  { id: "bags", label: "Bags", icon: "bag" },
  { id: "jewelry", label: "Jewelry", icon: "jewelry" },
  { id: "gadgets", label: "Gadgets & Electronics", icon: "gadget" },
];

// -----------------------------------------------------------------------------
// Prohibited / restricted items — destination-specific, subject to change
// -----------------------------------------------------------------------------

export const prohibitedItemsNote =
  "Customs rules differ by destination country and change from time to time. The lists below are a general guide, so always confirm your specific item with us on WhatsApp before shipping.";

export const universallyProhibitedItems = [
  "Firearms, ammunition and weapons of any kind",
  "Illegal drugs and narcotics",
  "Flammable, explosive or hazardous chemicals",
  "Counterfeit goods and pirated media",
  "Live animals and plants",
  "Cash, cheques and negotiable instruments",
];

export const prohibitedItemsByDestination: Record<string, string[]> = {
  usa: [
    "Certain food items with meat or dairy content", // [CONFIRM] destination-specific detail
    "Prescription medication without proper documentation",
    "Lithium batteries shipped loose (must be in equipment)",
  ],
  uk: [
    "Fresh produce and certain meat/dairy products", // [CONFIRM]
    "Aerosols and pressurised containers",
    "Replica or imitation weapons",
  ],
  canada: [
    "Certain food and agricultural products", // [CONFIRM]
    "Used mattresses and upholstered items",
  ],
  europe: [
    "Items restricted under EU customs and agricultural rules", // [CONFIRM]
    "Certain electronics without CE certification",
  ],
};

// -----------------------------------------------------------------------------
// Why trust Strike — reassurance points
// -----------------------------------------------------------------------------

export const trustReasons = [
  {
    title: "Real, visitable office",
    description: "We're not just a page on your phone. Come find us at Suite H101, Ogba Central Mall, Abiodun Jagun Street, Ogba, Lagos.",
  },
  {
    title: "Scheduled weekly shipping",
    description: "Every shipment goes out on the same day each week: Friday. You'll always know where things stand without having to chase us for an update.",
  },
  {
    title: "Transparent, all-in pricing",
    description: "You get your price upfront and agree to it before anything moves. No surprise charges once your goods are already gone.",
  },
  {
    title: "Naira-friendly payment",
    description: "Pay straight from your Naira account, by transfer or Paystack. No need to hunt down dollars or pounds yourself.",
  },
  {
    title: "Fast WhatsApp replies",
    description: "A real person picks this up, not a bot stuck on a loop. Message us and you'll hear back quickly.",
  },
  {
    title: "Fully insured handling",
    description: "From the moment we receive your item to the moment it's delivered, it's covered.",
  },
];

// Pay-on-delivery / prepayment policy — kept editable since this is a common
// customer question and a frequent source of scam confusion in this market.
export const paymentPolicy = {
  intl:
    "International shipments (cargo, courier and worldwide shopping) are paid for before they ship. That's standard practice across the freight industry, and it's what lets us guarantee your spot on the next Friday shipment.",
  local: "Pay-on-delivery only works for certain local Lagos pickup or drop-off arrangements agreed beforehand. It doesn't apply to the international shipping cost.",
  methods: ["Bank transfer", "Paystack (card/bank)"], // [CONFIRM] exact accepted payment rails
};

// -----------------------------------------------------------------------------
// Testimonials / delivery feed — replace with real reviews & embeds
// -----------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  photoSlot: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "[CONFIRM: customer name]",
    location: "[CONFIRM: customer city]",
    quote: "[CONFIRM: replace with a real customer review/quote]",
    rating: 5,
    photoSlot: "testimonial-1",
  },
  {
    id: "t2",
    name: "[CONFIRM: customer name]",
    location: "[CONFIRM: customer city]",
    quote: "[CONFIRM: replace with a real customer review/quote]",
    rating: 5,
    photoSlot: "testimonial-2",
  },
  {
    id: "t3",
    name: "[CONFIRM: customer name]",
    location: "[CONFIRM: customer city]",
    quote: "[CONFIRM: replace with a real customer review/quote]",
    rating: 5,
    photoSlot: "testimonial-3",
  },
];

export interface SocialEmbed {
  id: string;
  platform: "instagram" | "tiktok";
  caption: string;
  url: string;
}

export const socialEmbeds: SocialEmbed[] = [
  { id: "s1", platform: "instagram", caption: "[CONFIRM: paste real Instagram reel URL]", url: "" },
  { id: "s2", platform: "tiktok", caption: "[CONFIRM: paste real TikTok video URL]", url: "" },
  { id: "s3", platform: "instagram", caption: "[CONFIRM: paste real Instagram reel URL]", url: "" },
];

// -----------------------------------------------------------------------------
// Stats band — placeholders only. Do not fabricate numbers.
// -----------------------------------------------------------------------------

export const statsBandEnabled = true;

export const stats = [
  { label: "Shipments completed", value: "[CONFIRM]" },
  { label: "Happy customers", value: "[CONFIRM]" },
  { label: "Years in operation", value: "[CONFIRM]" },
];

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How long does shipping take?",
    answer:
      "Cargo by air or sea takes 7–10 days. Courier takes 2–5 working days. We ship every Friday, so when your item actually leaves depends on when you drop it off or confirm your order. Get it to us by Thursday to make that week's run.",
  },
  {
    question: "What is volumetric weight, and why does it matter?",
    answer:
      "Got something big but light? We charge whichever is more: the actual weight on the scale, or the volumetric weight, which is based on how much space the item takes up. Every freight company works this way. It just keeps pricing fair when bulk matters as much as weight. Try our calculator for a quick estimate, or ask us directly on WhatsApp.",
  },
  {
    question: "Will I have to pay customs duties?",
    answer:
      "It depends. Customs rules and duties are set by each destination country, they vary by item type and value, and they can change without warning. If we expect your shipment to attract duties, we'll flag it before it ships, but the final word always comes from customs on arrival.",
  },
  {
    question: "How do I pay, and can I pay in Naira?",
    answer:
      "Yes, Naira works fine: bank transfer or Paystack. International shipments are paid for before we ship, which is what lets us guarantee your spot on the next Friday run. Pay-on-delivery only covers certain local Lagos pickups, not the international shipping cost.",
  },
  {
    question: "Are there things you can't ship?",
    answer:
      "A few, yes. Firearms, illegal drugs, hazardous chemicals, counterfeit goods, live animals and cash are off the table, full stop. Some other items are restricted depending on the destination, and those rules shift over time, so check our What We Ship page, or just ask us on WhatsApp if you're not sure about something.",
  },
  {
    question: "What happens if my package is delayed or lost?",
    answer:
      "Your shipment is insured from the moment we receive it. If a delay comes up, we'll reach out on WhatsApp with the reason and a new expected date before you even have to ask. On the rare occasion something is lost or damaged, contact us right away and we'll open a claim and sort it out with you directly.",
  },
  {
    question: "Can you shop for me if I don't have an international card?",
    answer: "That's exactly what our worldwide shopping service is built for. Send us the link (or just tell us the store and item), pay us in Naira, and we'll buy it, receive it, and ship it to you.",
  },
  {
    question: "How do I track my shipment?",
    answer: "Head to the Track My Shipment page and enter your name or waybill reference, or just message us on WhatsApp anytime. We reply fast either way.",
  },
];

// -----------------------------------------------------------------------------
// Payment trust badges
// -----------------------------------------------------------------------------

export const paymentBadges = ["Paystack", "Bank Transfer", "Naira Accepted"];
