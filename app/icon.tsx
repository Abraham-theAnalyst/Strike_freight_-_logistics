import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          borderRadius: 7,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 900,
            fontFamily: "Arial Black, Impact, sans-serif",
            lineHeight: 1,
            letterSpacing: "-1px",
          }}
        >
          F
        </div>
      </div>
    ),
    { ...size }
  );
}
