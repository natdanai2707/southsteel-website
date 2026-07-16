import type { CSSProperties } from "react";

// Design tokens — ค่าเดียวกับ CSS variables ใน globals.css (โทนแบรนด์จากโลโก้จริง)
export const SS = {
  navy: "#01597A", // สีแบรนด์หลัก (teal จากโลโก้)
  navySoft: "#023E55",
  ink: "#1F2937",
  paper: "#FFFFFF",
  paperAlt: "#F2F5F7",
  muted: "#6B7280",
  rule: "#DDE3E8",
  accent: "#C62828", // สี CTA แดงอิฐ
  accentDark: "#A32020",
  line: "#06C755",
  body: "var(--font-sarabun), 'Sarabun', sans-serif",
  display: "var(--font-prompt), 'Prompt', sans-serif",
  num: "var(--font-inter), 'Inter', sans-serif",
} as const;

export const ssEyebrow: CSSProperties = {
  fontFamily: SS.body,
  fontSize: 14,
  color: SS.muted,
  fontWeight: 600,
};

export const ssBody: CSSProperties = {
  fontFamily: SS.body,
  fontSize: 16,
  lineHeight: 1.7,
  color: SS.ink,
  fontWeight: 400,
};

export const ssDisplay: CSSProperties = {
  fontFamily: SS.display,
  fontWeight: 600,
  lineHeight: 1.3,
  color: SS.navy,
};
