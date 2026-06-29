import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows next/image to optimize the curated royalty-free stock photos
    // referenced in lib/stock-images.ts. Real company photos (logo, office,
    // team) stay local under /public/images and need no remote pattern.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
