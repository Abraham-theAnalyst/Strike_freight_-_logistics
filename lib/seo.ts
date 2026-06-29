import type { Metadata } from "next";

/** Builds consistent title/description/canonical/Open Graph metadata for a page. */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { url: path, title, description },
    twitter: { title, description },
  };
}
