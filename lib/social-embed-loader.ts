// Lazy-loaders for TikTok's and Instagram's official embed scripts. Each
// only runs once a card actually scrolls into view (see SocialEmbedCard),
// so the delivery feed never costs anything on first paint.

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let instagramScriptPromise: Promise<void> | null = null;

export function loadInstagramEmbedScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  if (window.instgrm?.Embeds) {
    window.instgrm.Embeds.process();
    return Promise.resolve();
  }

  if (instagramScriptPromise) {
    return instagramScriptPromise.then(() => window.instgrm?.Embeds.process());
  }

  instagramScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      window.instgrm?.Embeds.process();
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load Instagram embed script"));
    document.body.appendChild(script);
  });

  return instagramScriptPromise;
}

// TikTok's embed.js has no public "reprocess" API like Instagram's. The
// documented workaround (used widely for dynamically-inserted TikTok embeds)
// is to remove and re-append the script tag: it re-scans the DOM for
// `.tiktok-embed` blockquotes on every load. Blockquotes already converted
// to iframes no longer match that selector, so re-running this is safe and
// idempotent for cards that loaded earlier.
export function loadTikTokEmbedScript(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-tiktok-embed="true"]');
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.setAttribute("data-tiktok-embed", "true");
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load TikTok embed script"));
    document.body.appendChild(script);
  });
}
