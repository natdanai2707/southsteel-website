import Image from "next/image";
import { SS, ssEyebrow } from "@/lib/design";

interface PlaceholderProps {
  label: string;
  height?: number;
  id?: string;
  tint?: "light" | "dark";
  src?: string;
}

export default function Placeholder({ label, height = 340, id, tint = "light", src }: PlaceholderProps) {
  const isDark = tint === "dark";
  const base = isDark ? "#1a1a1a" : "#d9d1bf";
  const stripe = isDark ? "#222" : "#c4bba4";
  const textColor = isDark ? "#555" : "#8a8067";
  const badgeBg = isDark ? "#0a0a0a" : SS.paper;

  return (
    <div style={{ position: "relative", height, overflow: "hidden", background: base }}>
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          style={{
            objectFit: "cover",
            filter: isDark ? "brightness(0.9) saturate(0.85)" : "saturate(0.9) contrast(1.02)",
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <>
          <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" style={{ display: "block" }}>
            <defs>
              <pattern id={`ph-${id}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="6" height="6" fill={base}/>
                <line x1="0" y1="0" x2="0" y2="6" stroke={stripe} strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="400" height="400" fill={`url(#ph-${id})`}/>
          </svg>
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: SS.mono, fontSize: 11, color: textColor, letterSpacing: "0.15em",
          }}>
            [ {label.toUpperCase()} ]
          </div>
        </>
      )}
      {id && !src && (
        <div style={{
          position: "absolute", top: 16, left: 16, ...ssEyebrow,
          color: isDark ? "#f5f2ec" : "#0e0d0b",
          background: badgeBg, padding: "4px 8px", zIndex: 2,
        }}>
          № {id}
        </div>
      )}
    </div>
  );
}
