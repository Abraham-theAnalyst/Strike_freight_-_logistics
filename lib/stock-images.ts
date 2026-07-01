// Curated, royalty-free stock photography (Pexels) used as supporting visuals.
// None of these are real photos of Strike Freight & Logistics. Real company
// photos (logo, office, team) are handled separately via <PhotoPlaceholder>
// or direct <Image> tags in components/home/WhyTrust.tsx and app/about/page.tsx.
//
// To swap any image: replace the `src`/`credit` pair. `credit` is the Pexels
// photo page kept for attribution reference — it is not rendered on-site.

export interface StockImage {
  src: string;
  alt: string;
  credit: string;
}

export const stockImages = {
  airFreight: {
    src: "https://images.pexels.com/photos/11935282/pexels-photo-11935282.jpeg",
    alt: "Cargo aircraft loaded for international air freight shipment from Lagos, Nigeria",
    credit: "https://www.pexels.com/photo/11935282/",
  },
  seaFreight: {
    src: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg",
    alt: "Large container ship carrying sea freight cargo between Nigeria and the UK or Europe",
    credit: "https://www.pexels.com/photo/262353/",
  },
  courier: {
    src: "https://images.pexels.com/photos/6407553/pexels-photo-6407553.jpeg",
    alt: "Courier delivery van loaded with parcels for fast international shipping from Nigeria",
    credit: "https://www.pexels.com/photo/6407553/",
  },
  warehouseHandling: {
    src: "https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg",
    alt: "Freight logistics team handling export cargo at a Lagos warehouse before international shipment",
    credit: "https://www.pexels.com/photo/4487383/",
  },
  boxesStack: {
    src: "https://images.pexels.com/photos/5025503/pexels-photo-5025503.jpeg",
    alt: "Cardboard boxes packed and labelled for international shipping from Lagos, Nigeria",
    credit: "https://www.pexels.com/photo/5025503/",
  },
  earthFromSpace: {
    src: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg",
    alt: "Globe showing worldwide international shipping routes from Nigeria to the UK, USA, Canada and Europe",
    credit: "https://www.pexels.com/photo/87651/",
  },
} as const;

export type StockImageKey = keyof typeof stockImages;

/** Maps each services.id (lib/site-data.ts) to its supporting visual. */
export const serviceStockImages: Record<string, StockImageKey> = {
  "air-freight": "airFreight",
  "sea-freight": "seaFreight",
  courier: "courier",
};

/** Maps each routes.id (lib/site-data.ts) to its supporting visual. */
export const routeStockImages: Record<string, StockImageKey> = {
  usa: "airFreight",
  uk: "seaFreight",
  canada: "courier",
  europe: "warehouseHandling",
  worldwide: "earthFromSpace",
};
