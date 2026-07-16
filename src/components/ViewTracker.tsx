"use client";

import { useEffect } from "react";
import { pushEvent } from "@/lib/analytics";

// ยิง dataLayer event เมื่อผู้ใช้เปิดหน้า เช่น product_view / blog_view
export default function ViewTracker({
  event,
  params,
}: {
  event: string;
  params: Record<string, string>;
}) {
  useEffect(() => {
    pushEvent(event, params);
    // ยิงครั้งเดียวต่อการเข้าหน้า
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
