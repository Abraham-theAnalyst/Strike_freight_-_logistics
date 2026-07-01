import { businessInfo, services, faqs } from "@/lib/site-data";

// ---------------------------------------------------------------------------
// LocalBusiness (PostalService subtype) — rendered on Home + Contact pages.
// Geo coords are approximate for Ogba Central Mall, Abiodun Jagun St, Lagos.
// [CONFIRM] Verify exact lat/lng via Google Maps before launch.
// ---------------------------------------------------------------------------
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": `${businessInfo.siteUrl}/#business`,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    description: businessInfo.metaDescription,
    url: businessInfo.siteUrl,
    telephone: businessInfo.phoneNumberIntl,
    email: businessInfo.email,
    logo: `${businessInfo.siteUrl}/logo.png`,
    image: `${businessInfo.siteUrl}/images/hero-freight.jpg`,
    priceRange: "₦₦",
    currenciesAccepted: "NGN",
    paymentAccepted: "Bank Transfer, Paystack",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.address.suite}, ${businessInfo.address.building}, ${businessInfo.address.street}`,
      addressLocality: businessInfo.address.city,
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.5838,
      longitude: 3.3505,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    identifier: {
      "@type": "PropertyValue",
      name: "CAC Registration Number",
      value: businessInfo.registrationNumber,
    },
    foundingDate: businessInfo.foundedYear.toString(),
    sameAs: [
      businessInfo.socials.instagram,
      businessInfo.socials.facebook,
      businessInfo.socials.tiktok,
    ],
  };
}

// ---------------------------------------------------------------------------
// Organization — rendered on Home + About pages.
// ---------------------------------------------------------------------------
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${businessInfo.siteUrl}/#organization`,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    url: businessInfo.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${businessInfo.siteUrl}/logo.png`,
      contentUrl: `${businessInfo.siteUrl}/logo.png`,
    },
    foundingDate: businessInfo.foundedYear.toString(),
    identifier: businessInfo.registrationNumber,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phoneNumberIntl,
      email: businessInfo.email,
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
    sameAs: [
      businessInfo.socials.instagram,
      businessInfo.socials.facebook,
      businessInfo.socials.tiktok,
    ],
  };
}

// ---------------------------------------------------------------------------
// Service entries — one per service offering, rendered on Home + Services pages.
// ---------------------------------------------------------------------------
export function getServicesSchema() {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${businessInfo.siteUrl}/services#${service.id}`,
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${businessInfo.siteUrl}/#business`,
      name: businessInfo.name,
    },
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Germany" },
    ],
    url: `${businessInfo.siteUrl}/services#${service.id}`,
  }));
}

// ---------------------------------------------------------------------------
// FAQPage — built from the site's FAQ data; wins rich results in Google.
// Rendered on the Home page where the Accordion is displayed.
// ---------------------------------------------------------------------------
export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// BreadcrumbList — add to every inner page for sitelinks breadcrumb in SERPs.
// Usage: getBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }])
// ---------------------------------------------------------------------------
export function getBreadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${businessInfo.siteUrl}${crumb.path}`,
    })),
  };
}
