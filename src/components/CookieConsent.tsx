"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_KEY, setConsent } from "@/lib/analytics";

// แถบขอความยินยอมใช้คุกกี้ (PDPA) — แสดงครั้งแรกเท่านั้น จำคำตอบไว้ใน localStorage
export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(CONSENT_KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const choose = (granted: boolean) => {
    setConsent(granted);
    setShow(false);
  };

  return (
    <div className="cookie-bar" role="dialog" aria-label="การใช้คุกกี้">
      <p>
        เว็บไซต์นี้ใช้คุกกี้เพื่อวัดสถิติการเข้าชมและปรับปรุงบริการ อ่านรายละเอียดได้ที่{" "}
        <Link href="/privacy">นโยบายความเป็นส่วนตัว</Link>
      </p>
      <div className="cookie-bar__actions">
        <button type="button" className="btn btn--ghost-dark" onClick={() => choose(false)}>
          ปฏิเสธ
        </button>
        <button type="button" className="btn btn--primary" onClick={() => choose(true)}>
          ยอมรับ
        </button>
      </div>
    </div>
  );
}
