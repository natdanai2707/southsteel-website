"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pushEvent, fbTrack } from "@/lib/analytics";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const LINE_TAG_ID = process.env.NEXT_PUBLIC_LINE_TAG_ID;

/**
 * สคริปต์ tracking ทั้งหมด — render ใน <head>
 * ทุกตัวเปิดใช้งานผ่าน env var เท่านั้น (ดู .env.example)
 * GA4 ไม่ hardcode gtag.js — ให้ตั้งค่า GA4 Configuration tag ใน GTM
 * โดยอ่านค่า measurement id จาก dataLayer variable "ga_measurement_id"
 */
export default function Analytics() {
  return (
    <>
      {/* dataLayer ต้องถูกสร้างก่อน GTM โหลดเสมอ */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];${
            GA_ID ? `window.dataLayer.push({ga_measurement_id:'${GA_ID}'});` : ""
          }`,
        }}
      />
      {GTM_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      )}
      {FB_PIXEL_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`,
          }}
        />
      )}
      {LINE_TAG_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(g,d,o){g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';var s=d.createElement('script');s.async=1;s.src=o||h+'/n/line_tag/public/release/v1/lt.js';var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);})(window,document);_lt('init',{customerType:'lap',tagId:'${LINE_TAG_ID}'});_lt('send','pv',['${LINE_TAG_ID}']);`,
          }}
        />
      )}
    </>
  );
}

/**
 * ส่วนที่ต้อง render ใน <body>: GTM noscript + ตัวดักจับ event
 */
export function AnalyticsBody() {
  return (
    <>
      {GTM_ID && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      )}
      <EventTracker />
    </>
  );
}

/**
 * - ยิง page_view / Pixel PageView เมื่อเปลี่ยนหน้า (SPA navigation)
 * - ดักคลิกทั้งหน้า: tel: → phone_click · line.me → line_click · .pdf → catalog_download
 */
function EventTracker() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      // PageView แรกยิงจาก base code แล้ว
      isFirst.current = false;
      return;
    }
    pushEvent("page_view", { page_path: pathname });
    fbTrack("PageView");
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        pushEvent("phone_click", {
          phone_number: href.replace("tel:", ""),
          link_text: link.textContent?.trim() || "",
          page_path: window.location.pathname,
        });
        fbTrack("Lead", { content_name: "phone_click" });
      } else if (href.includes("line.me")) {
        pushEvent("line_click", {
          line_url: href,
          page_path: window.location.pathname,
        });
        fbTrack("Lead", { content_name: "line_click" });
      } else if (href.toLowerCase().endsWith(".pdf")) {
        pushEvent("catalog_download", {
          file_name: href.split("/").pop(),
          page_path: window.location.pathname,
        });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
