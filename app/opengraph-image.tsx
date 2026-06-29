import { ImageResponse } from "next/og";
import { businessInfo } from "@/lib/site-data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Programmatically generated default share image — no photography needed.
// Swap for a real branded image later by adding a static /app/opengraph-image.jpg.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e2a9c",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            backgroundColor: "white",
            color: "#1e2a9c",
            fontSize: 56,
            fontWeight: 800,
          }}
        >
          SF
        </div>
        <div style={{ marginTop: 32, fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>{businessInfo.name}</div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#e11d2a", fontWeight: 700 }}>{businessInfo.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
