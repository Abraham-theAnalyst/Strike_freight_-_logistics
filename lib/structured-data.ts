import { businessInfo, services } from "@/lib/site-data";

/** LocalBusiness JSON-LD — rendered once, sitewide, from the home page. */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.name,
    image: `${businessInfo.siteUrl}/logo.png`, // [CONFIRM] once real logo/photo is uploaded
    url: businessInfo.siteUrl,
    telephone: businessInfo.phoneNumberIntl,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessInfo.address.suite}, ${businessInfo.address.building}, ${businessInfo.address.street}`,
      addressLocality: businessInfo.address.city,
      addressCountry: businessInfo.address.country,
    },
    sameAs: [businessInfo.socials.instagram, businessInfo.socials.facebook, businessInfo.socials.tiktok],
  };
}

/** Service JSON-LD entries for each freight/courier/shopping offering. */
export function getServicesSchema() {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: businessInfo.name,
    },
    areaServed: ["Nigeria", "United States", "United Kingdom", "Canada", "Germany", "Europe"],
  }));
}
