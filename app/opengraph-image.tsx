import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dzikri Ramadhan - Website Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Handle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22c55e" }} />
          <span style={{ color: "#6b7280", fontSize: "18px", fontWeight: 700, letterSpacing: "0.2em" }}>
            @ziksite
          </span>
        </div>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "28px" }}>
          <span style={{ fontSize: "100px", fontWeight: 900, color: "#ffffff", lineHeight: 0.9, letterSpacing: "-4px" }}>
            DZIKRI
          </span>
          <span style={{ fontSize: "100px", fontWeight: 900, color: "#ffffff", lineHeight: 0.9, letterSpacing: "-4px" }}>
            RAMADHAN
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: "80px", height: "4px", background: "#ffffff", marginBottom: "28px" }} />

        {/* Role */}
        <span style={{ fontSize: "22px", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.1em" }}>
          Website Developer · System Builder · AI Automation
        </span>

        {/* Domain */}
        <div style={{ display: "flex", marginTop: "auto" }}>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#4b5563", letterSpacing: "0.05em" }}>
            dzikri.ziksite.my.id
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
