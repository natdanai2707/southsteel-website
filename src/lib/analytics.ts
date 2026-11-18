// Helper กลางสำหรับยิง event เข้า dataLayer (GTM) และ Facebook Pixel
// ใช้ได้เฉพาะฝั่ง client เท่านั้น

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    __gaDirect?: boolean;
  }
}

export function pushEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  // โหมด GA4 ตรง (ไม่มี GTM): ต้องยิงผ่าน gtag() ถึงจะเข้า GA4
  // page_view ไม่ต้องยิงเอง — Enhanced measurement ของ GA4 จับการเปลี่ยนหน้าให้แล้ว
  if (window.__gaDirect && typeof window.gtag === "function" && event !== "page_view") {
    window.gtag("event", event, params);
  }
}

export const CONSENT_KEY = "ss_cookie_consent";

// อัปเดต Consent Mode หลังผู้ใช้กดยอมรับ/ปฏิเสธในแถบคุกกี้
export function setConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  } catch {}
  const v = granted ? "granted" : "denied";
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: v,
      ad_storage: v,
      ad_user_data: v,
      ad_personalization: v,
    });
  }
}

export function fbTrack(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}
