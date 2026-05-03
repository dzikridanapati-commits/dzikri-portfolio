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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background circle decoration */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            border: "2px solid rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.02)",
            border: "2px solid rgba(255,255,255,0.04)",
          }}
        />

        {/* Handle tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span
            style={{
              color: "#6b7280",
              fontSize: "16px",
              fontWeight: "700",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            @ziksite
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: "900",
            color: "#ffffff",
            lineHeight: "0.9",
            textTransform: "uppercase",
            letterSpacing: "-4px",
            marginBottom: "32px",
          }}
        >
          DZIKRI
          <br />
          RAMADHAN
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#ffffff",
            marginBottom: "28px",
          }}
        />

        {/* Role */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#9ca3af",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Website Developer · System Builder · AI Automation
        </div>

        {/* Domain badge */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "100px",
            padding: "12px 28px",
            border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: "100px",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "0.1em",
          }}
        >
          dzikri.ziksite.my.id
        </div>
      </div>
    ),
    { ...size }
  );
}
