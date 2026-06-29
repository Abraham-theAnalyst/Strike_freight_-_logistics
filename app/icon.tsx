import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Generated placeholder favicon — replace with the real logo once supplied
// (see README "Where to add the logo").
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e2a9c",
          color: "white",
          fontSize: 16,
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: 6,
        }}
      >
        SF
      </div>
    ),
    { ...size }
  );
}
