"use client";

import { useState } from "react";
import { pushEvent, fbTrack } from "@/lib/analytics";
import { LINE_URL, PHONE_MAIN } from "@/lib/site";

const JOB_TYPES = [
  "สอบถามราคาเหล็ก",
  "งานตัดเลเซอร์ CNC",
  "งานตัด–พับเหล็ก",
  "งานเชื่อม / งานสั่งทำ",
  "สั่งซื้อจำนวนมาก / โครงการ",
  "อื่น ๆ",
];

type Status = "idle" | "sending" | "success" | "error";

// ฟอร์มติดต่อ — ส่งผ่าน Netlify Forms (ต้องเปิด Form detection ใน Netlify UI)
// เมื่อส่งสำเร็จ ยิง form_submit เข้า dataLayer และ Lead เข้า Facebook Pixel
export default function ContactForm({ formLocation = "contact_page" }: { formLocation?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`ส่งไม่สำเร็จ (${res.status})`);

      pushEvent("form_submit", {
        form_location: formLocation,
        job_type: (data.get("jobType") as string) || "",
      });
      fbTrack("Lead", { content_name: "contact_form", content_category: formLocation });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        ขอบคุณครับ ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="form-grid"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden aria-hidden="true">
        <label>
          ห้ามกรอกช่องนี้: <input name="bot-field" />
        </label>
      </p>

      <div className="form-field">
        <label htmlFor="cf-name">ชื่อ *</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="ชื่อของคุณ" />
      </div>

      <div className="form-field">
        <label htmlFor="cf-phone">เบอร์โทร *</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9\-\s]{9,12}"
          placeholder="08x-xxx-xxxx"
        />
      </div>

      <div className="form-field">
        <label htmlFor="cf-jobtype">ประเภทงาน *</label>
        <select id="cf-jobtype" name="jobType" required defaultValue="">
          <option value="" disabled>
            — เลือกประเภทงาน —
          </option>
          {JOB_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="cf-detail">รายละเอียด</label>
        <textarea
          id="cf-detail"
          name="detail"
          rows={5}
          placeholder="เช่น ต้องการเหล็กกล่อง 2×2 นิ้ว หนา 2.3 มม. จำนวน 50 เส้น ส่งในหาดใหญ่"
        />
      </div>

      {status === "error" && (
        <div className="form-error" role="alert">
          ขออภัย ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ หรือติดต่อทางไลน์{" "}
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            @southsteel
          </a>{" "}
          / โทร <a href={`tel:${PHONE_MAIN.tel}`}>{PHONE_MAIN.display}</a>
        </div>
      )}

      <button type="submit" className="btn btn--primary btn--lg" disabled={status === "sending"}>
        {status === "sending" ? "กำลังส่ง…" : "ส่งข้อความ"}
      </button>
    </form>
  );
}
