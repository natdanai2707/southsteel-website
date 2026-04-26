import type { CSSProperties } from "react";

export const SS = {
  paper: "#f5f2ec",
  paperAlt: "#ece6d8",
  ink: "#0e0d0b",
  muted: "#6b655c",
  subtle: "#3a372f",
  rule: "rgba(14,13,11,0.14)",
  ruleDark: "rgba(14,13,11,0.28)",
  accent: "oklch(0.52 0.16 255)",
  line: "#06c755",
  body: "'IBM Plex Sans Thai', sans-serif",
  mono: "'JetBrains Mono', monospace",
  display: "'Noto Serif Thai', serif",
} as const;

export const ssEyebrow: CSSProperties = {
  fontFamily: SS.body,
  fontSize: 13,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: SS.muted,
  fontWeight: 500,
};

export const ssBody: CSSProperties = {
  fontFamily: SS.body,
  fontSize: 17,
  lineHeight: 1.7,
  color: SS.subtle,
  fontWeight: 400,
};

export const ssDisplay: CSSProperties = {
  fontFamily: SS.display,
  fontWeight: 500,
  letterSpacing: "-0.01em",
  lineHeight: 1.05,
  color: SS.ink,
};
