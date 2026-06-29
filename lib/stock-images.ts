// Curated, royalty-free stock photography (Pexels) used purely as generic
// supporting visuals — air freight, sea freight, courier, warehouse, etc.
// None of these are real photos of Strike Freight & Logistics. Real company
// photos (logo, office, team) are handled separately as labelled slots via
// <PhotoPlaceholder> with no `src`, e.g. in components/home/WhyTrust.tsx and
// app/about/page.tsx — leave those as placeholders for real photos.
//
// To swap any image below: replace the `src`/`credit` pair. `credit` is the
// Pexels photo page, kept for attribution reference, not rendered on-site.

export interface StockImage {
  src: string;
  alt: string;
  credit: string;
}

export const stockImages = {
  airFreight: {
    src: "https://images.pexels.com/photos/11935282/pexels-photo-11935282.jpeg",
    alt: "Cargo airplane in flight against a clear blue sky",
    credit: "https://www.pexels.com/photo/11935282/",
  },
  seaFreight: {
    src: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg",
    alt: "Large container ship loaded with cargo crossing calm open water",
    credit: "https://www.pexels.com/photo/262353/",
  },
  courier: {
    src: "https://images.pexels.com/photos/6407553/pexels-photo-6407553.jpeg",
    alt: "Open delivery van packed with cardboard boxes ready for dispatch",
    credit: "https://www.pexels.com/photo/6407553/",
  },
  worldwideShopping: {
    src: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    alt: "Laptop surrounded by shopping bags and parcel boxes",
    credit: "https://www.pexels.com/photo/6956903/",
  },
  warehouseHandling: {
    src: "https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg",
    alt: "Warehouse staff carrying a package between storage shelves",
    credit: "https://www.pexels.com/photo/4487383/",
  },
  boxesStack: {
    src: "https://images.pexels.com/photos/5025503/pexels-photo-5025503.jpeg",
    alt: "Stack of cardboard boxes ready for shipping",
    credit: "https://www.pexels.com/photo/5025503/",
  },
  earthFromSpace: {
    src: "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg",
    alt: "View of planet Earth from space showing North America",
    credit: "https://www.pexels.com/photo/87651/",
  },
} as const;

export type StockImageKey = keyof typeof stockImages;

/** Maps each services.id (lib/site-data.ts) to its supporting visual. */
export const serviceStockImages: Record<string, StockImageKey> = {
  "air-freight": "airFreight",
  "sea-freight": "seaFreight",
  courier: "courier",
  "worldwide-shopping": "worldwideShopping",
};

/** Maps each routes.id (lib/site-data.ts) to its supporting visual. */
export const routeStockImages: Record<string, StockImageKey> = {
  usa: "airFreight",
  uk: "seaFreight",
  canada: "courier",
  europe: "warehouseHandling",
  worldwide: "earthFromSpace",
};
