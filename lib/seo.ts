import type { Metadata } from "next";

// Default OG image for all pages.
// [CONFIRM] Replace with a proper branded 1200×630 image before launch —
// drop the file at /public/images/og-image.jpg and update this path.
// Until then, the hero freight photo serves as the placeholder.
const DEFAULT_OG_IMAGE = "/images/hero-freight.jpg";

/**
 * Builds per-page title / description / canonical / Open Graph / Twitter metadata.
 * All paths are resolved against `metadataBase` (set in the root layout to SITE_URL)
 * so every canonical and og:url comes out as a full absolute URL automatically.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title,
      description,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
