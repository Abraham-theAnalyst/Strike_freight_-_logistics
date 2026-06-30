"use client";

import { useEffect, useRef, useState } from "react";
import type { SocialEmbed } from "@/lib/site-data";
import { loadInstagramEmbedScript, loadTikTokEmbedScript } from "@/lib/social-embed-loader";

/**
 * Renders a real TikTok or Instagram embed using each platform's official
 * blockquote method. The embed script only loads once this card scrolls
 * into view (IntersectionObserver), so the three videos add zero weight to
 * first paint. Falls back to a plain link out to the video if the script
 * fails to load (ad blocker, offline, platform outage).
 */
export default function SocialEmbedCard({ embed }: { embed: SocialEmbed }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const loader = embed.platform === "tiktok" ? loadTikTokEmbedScript : loadInstagramEmbedScript;
    loader().catch(() => setFailed(true));
  }, [isVisible, embed.platform]);

  const platformLabel = embed.platform === "instagram" ? "Instagram" : "TikTok";

  if (failed) {
    return (
      <div
        ref={containerRef}
        className="flex aspect-[9/16] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-brand-line bg-brand-cloud p-4 text-center"
      >
        <p className="text-xs font-medium text-slate-500">{embed.caption}</p>
        {/* Fallback link: the platform's embed script failed to load, so we
            link out to the real video instead of leaving a broken frame. */}
        <a href={embed.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-navy underline">
          Watch on {platformLabel}
        </a>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="aspect-[9/16] overflow-hidden rounded-xl bg-brand-cloud">
      {!isVisible && <div className="h-full w-full animate-pulse" aria-hidden="true" />}

      {isVisible && embed.platform === "tiktok" && embed.tiktokVideoId && (
        <blockquote
          className="tiktok-embed"
          cite={embed.url}
          data-video-id={embed.tiktokVideoId}
          style={{ maxWidth: "100%", minWidth: "100%" }}
        >
          <section>
            <a target="_blank" rel="noopener noreferrer" href={embed.url}>
              {embed.caption}
            </a>
          </section>
        </blockquote>
      )}

      {isVisible && embed.platform === "instagram" && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={embed.url}
          data-instgrm-version="14"
          style={{ width: "100%", margin: 0 }}
        >
          <a href={embed.url} target="_blank" rel="noopener noreferrer">
            {embed.caption}
          </a>
        </blockquote>
      )}
    </div>
  );
}
