import type { CSSProperties } from "react";

// Design tokens — ค่าเดียวกับ CSS variables ใน globals.css
export const SS = {
  navy: "#0A1628",
  navySoft: "#101F38",
  ink: "#111827",
  paper: "#FFFFFF",
  paperAlt: "#F5F7FA",
  muted: "#6B7280",
  rule: "#E5E7EB",
  accent: "#F59E0B",
  accentDark: "#B45309",
  line: "#06C755",
  body: "var(--font-sarabun), 'Sarabun', sans-serif",
  num: "var(--font-inter), 'Inter', sans-serif",
} as const;

export const ssEyebrow: CSSProperties = {
  fontFamily: SS.body,
  fontSize: 13,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: SS.accent,
  fontWeight: 700,
};

export const ssBody: CSSProperties = {
  fontFamily: SS.body,
  fontSize: 16,
  lineHeight: 1.7,
  color: SS.ink,
  fontWeight: 400,
};

export const ssDisplay: CSSProperties = {
  fontFamily: SS.body,
  fontWeight: 700,
  letterSpacing: "-0.01em",
  lineHeight: 1.2,
  color: SS.navy,
};
