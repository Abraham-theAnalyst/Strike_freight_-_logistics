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

// The site currently lives on Vercel's default domain. When a custom domain
// (e.g. www.strikefreightlogistics.com) is connected, change ONLY this
// constant — canonical links, Open Graph/Twitter tags, the sitemap,
// robots.txt, and the JSON-LD URL are all generated from it.
export const SITE_URL = "https://strikefreightlogistics.vercel.app";

export const businessInfo = {
  name: "Strike Freight & Logistics",
  shortName: "Strike Freight",
  legalName: "Strike Freight & Logistics",
  registrationNumber: "RC 7652119",
  foundedYear: 2023,
  yearsInOperation: "3+",
  positioning: "Send & receive parcels between Nigeria and the world by Air, Sea or Courier.",
  tagline: "Cargo in 7–10 Days. Courier in 2–5 Days. We Ship Every Friday.",
  metaDescription:
    "Strike Freight & Logistics sends and receives parcels between Nigeria and the UK, USA, Canada and Europe by air, sea or courier. Real Ogba office, weekly Friday shipping. Book on WhatsApp or get a quote.",

  // Primary WhatsApp line — used for every "Book on WhatsApp" button and
  // wa.me link sitewide (header, hero, calculator, forms, footer).
  whatsappNumberRaw: "09051175825",
  whatsappNumberIntl: "2349051175825",

  // Primary office/voice call line — intentionally different from the
  // WhatsApp number above. Shown in the footer and used as the tel: link.
  phoneNumberRaw: "09028319799",
  phoneNumberIntl: "+2349028319799",

  email: "strikefreightlogistics@gmail.com",

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
    instagram: "https://www.instagram.com/strikefreightlogistic",
    tiktok: "https://www.tiktok.com/@strikefreightlogistics",
    facebook: "https://www.facebook.com/share/1CpCMNoBRe/",
  },

  siteUrl: SITE_URL,

  hours: {
    weekdays: "Mon – Sat, 9:00am – 6:00pm", // [CONFIRM] real opening hours
    note: "Closed Sundays and public holidays.", // [CONFIRM]
  },
};

// -----------------------------------------------------------------------------
// Contact numbers — both lines are reachable by phone call AND WhatsApp.
// Used by the Contact page to list each number with both options, distinct
// from businessInfo.whatsappNumberIntl/phoneNumberIntl above, which set the
// single primary number used for sitewide "Book on WhatsApp" buttons and the
// header/footer tel: link.
// -----------------------------------------------------------------------------

export interface ContactNumber {
  raw: string;
  callIntl: string; // for tel: links
  whatsappIntl: string; // for wa.me links (digits only, no +)
}

export const contactNumbers: ContactNumber[] = [
  { raw: "09028319799", callIntl: "+2349028319799", whatsappIntl: "2349028319799" },
  { raw: "09051175825", callIntl: "+2349051175825", whatsappIntl: "2349051175825" },
];

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
  officeLocation: "Hi Strike Freight, please can you confirm your office drop-off location and opening hours?",
};

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

export const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Get a Quote", href: "/pricing" },
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
// No pricing here by design — rates vary by weight, route and exchange rate,
// so every route is quoted on WhatsApp instead of shown as a fixed price.

export type ShippingMode = "Air" | "Sea" | "Courier" | "Pickup";

export interface ShippingRoute {
  id: string;
  name: string;
  flag: string;
  blurb: string;
  modes: ShippingMode[];
  duration: string;
  note?: string;
  whatsappMessage: string;
}

export const routes: ShippingRoute[] = [
  {
    id: "uk",
    name: "UK",
    flag: "🇬🇧",
    blurb: "Sending or receiving between Lagos and the UK, door to door.",
    modes: ["Air", "Sea"],
    duration: "7–10 working days",
    whatsappMessage: "Hi Strike, I'd like a quote for shipping to the UK.",
  },
  {
    id: "usa",
    name: "USA",
    flag: "🇺🇸",
    blurb: "Cargo between Lagos and the States, from pickup to US doorstep.",
    modes: ["Air"],
    duration: "14 working days",
    whatsappMessage: "Hi Strike, I'd like a quote for shipping to the USA.",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    blurb: "Parcels between Lagos and our Pickering, Canada office.",
    modes: ["Pickup"],
    duration: "Varies, ask for a quote",
    note: "Pickup only, at our Pickering, Canada office. Doorstep delivery is available via Canada Post, UPS or FedEx, at the customer's own cost.",
    whatsappMessage: "Hi Strike, I'd like a quote for shipping to Canada.",
  },
  {
    id: "europe",
    name: "Europe / Germany",
    flag: "🇪🇺",
    blurb: "Germany and the rest of the EU, covered by air or sea.",
    modes: ["Air", "Sea"],
    duration: "10–14 working days",
    whatsappMessage: "Hi Strike, I'd like a quote for shipping to Europe.",
  },
  {
    id: "worldwide",
    name: "Worldwide",
    flag: "🌍",
    blurb: "Don't see your country listed? We ship to pretty much anywhere else, too.",
    modes: ["Air", "Sea", "Courier"],
    duration: "Varies by destination, ask for a quote",
    whatsappMessage: "Hi Strike, I'd like a quote for shipping. My destination isn't listed.",
  },
];

// -----------------------------------------------------------------------------
// Services
// -----------------------------------------------------------------------------

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  details: string[];
  timeline: string;
  icon: "plane" | "ship" | "courier";
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
];

// -----------------------------------------------------------------------------
// Courier partners — shown in the Courier service section ("We partner with").
// -----------------------------------------------------------------------------

export interface CourierPartner {
  name: string;
  // Drop a logo file at /public/images/partners/{name}.png|svg and set
  // `logo` to that path to render the real mark. Leave undefined to show a
  // clean text label instead (current default — no logo files supplied yet).
  logo?: string;
}

export const courierPartners: CourierPartner[] = [
  { name: "DHL" },
  { name: "FedEx" },
  { name: "UPS" },
  { name: "Aramex" },
];

// -----------------------------------------------------------------------------
// How It Works — single flow: get a quote, drop off or pickup, we ship, track
// -----------------------------------------------------------------------------

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export const howItWorksSteps: FlowStep[] = [
  {
    step: 1,
    title: "Get a quote on WhatsApp",
    description: "Tell us what you're sending, where it's headed, and roughly what it weighs. We'll get back to you with a price fast.",
  },
  {
    step: 2,
    title: "Drop off at our Ogba office or request pickup",
    description: "Bring it down to our Ogba office, or let us know and we'll arrange a pickup near you in Lagos.",
  },
  {
    step: 3,
    title: "We pack, weigh & ship",
    description: "We pack it the right way, weigh it, lock in your final price, and book it on air, sea or courier.",
  },
  {
    step: 4,
    title: "Track and receive worldwide",
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
    "International shipments (cargo and courier) are paid for before they ship. That's standard practice across the freight industry, and it's what lets us guarantee your spot on the next Friday shipment.",
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
  // Required for TikTok's official blockquote embed (data-video-id). The
  // vt.tiktok.com short links resolve to this canonical video URL/ID via
  // TikTok's redirect — resolved once and hardcoded here so the embed
  // doesn't depend on a redirect resolving at render time.
  tiktokVideoId?: string;
}

export const socialEmbeds: SocialEmbed[] = [
  {
    id: "s1",
    platform: "tiktok",
    caption: "Behind the scenes of how your delivery moves.",
    url: "https://www.tiktok.com/@strikefreightlogistics/video/7635976463312817424",
    tiktokVideoId: "7635976463312817424",
  },
  {
    id: "s2",
    platform: "instagram",
    caption: "A real delivery, straight from us to you.",
    url: "https://www.instagram.com/reel/DYM4C4INcoQ/",
  },
  {
    id: "s3",
    platform: "tiktok",
    caption: "Another shipment, another delivery made.",
    url: "https://www.tiktok.com/@strikefreightlogistics/video/7511775491347467526",
    tiktokVideoId: "7511775491347467526",
  },
];

// -----------------------------------------------------------------------------
// Stats band — placeholders only. Do not fabricate numbers.
// -----------------------------------------------------------------------------

export const statsBandEnabled = true;

export const stats = [
  { label: "Shipments completed", value: "100+" },
  { label: "DHL · FedEx · UPS · Aramex", value: "Trusted Partners" },
  { label: "Years in operation", value: "3+" },
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
    question: "How do I track my shipment?",
    answer: "Head to the Track My Shipment page and enter your name or waybill reference, or just message us on WhatsApp anytime. We reply fast either way.",
  },
];

// -----------------------------------------------------------------------------
// Payment trust badges
// -----------------------------------------------------------------------------

export const paymentBadges = ["Paystack", "Bank Transfer", "Naira Accepted"];
