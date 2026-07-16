import { LINE_URL, PHONE_CTA } from "@/lib/site";

// แถบ CTA ติดขอบล่างจอ — แสดงเฉพาะมือถือ (ควบคุมด้วย CSS)
// event phone_click / line_click ยิงอัตโนมัติจาก EventTracker ใน Analytics.tsx
export default function FloatingCta() {
  return (
    <div className="floating-cta" role="navigation" aria-label="ติดต่อด่วน">
      <a href={`tel:${PHONE_CTA.tel}`} aria-label={`โทรหาเรา ${PHONE_CTA.display}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z" />
        </svg>
        โทรเลย
      </a>
      <a href={LINE_URL} target="_blank" rel="noopener noreferrer" aria-label="แชทผ่าน Line @southsteel">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.03 3.58 7.4 8.41 8.04.33.07.77.22.89.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1.01.89.55 1.09-.46 5.87-3.45 8.01-5.91C21.66 13.4 22 11.83 22 10.13 22 5.64 17.52 2 12 2z" />
        </svg>
        Line
      </a>
    </div>
  );
}
