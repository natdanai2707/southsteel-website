import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { IconPhone, IconLine } from "@/components/Icons";
import {
  BRANCHES,
  COMPANY_TH,
  LINE_URL,
  LINE_ID,
  FACEBOOK_URL,
  EMAIL,
  PHONE_LASER,
  PHONE_BENDING,
  PHONE_COMPLAINT,
  OPENING_HOURS_TH,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "ติดต่อเรา ร้านเหล็กหาดใหญ่ โทร 074-356-643",
  description:
    "ติดต่อเหล็กใต้ ร้านเหล็กหาดใหญ่ 2 สาขา สอบถามราคาเหล็ก งานตัดเลเซอร์ ตัด–พับ ทางโทรศัพท์ Line @southsteel หรือกรอกฟอร์ม ตอบกลับภายใน 24 ชั่วโมง",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "ติดต่อเรา | เหล็กใต้ ร้านเหล็กหาดใหญ่",
    description: "สอบถามราคาเหล็กและงานตัดเลเซอร์ ทางโทร Line @southsteel หรือฟอร์ม ตอบภายใน 24 ชม.",
    url: "/contact",
  },
};

const hotlines = [
  { label: "สายตรงแผนก Laser CNC", phone: PHONE_LASER },
  { label: "สายตรงแผนกตัด–พับ", phone: PHONE_BENDING },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="ติดต่อเหล็กใต้ ร้านเหล็กหาดใหญ่"
        desc={`ทีมงานพร้อมให้คำปรึกษาและเสนอราคาฟรี ${OPENING_HOURS_TH} ตอบกลับทุกช่องทางภายใน 24 ชั่วโมง`}
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ติดต่อเรา" }]}
      />

      {/* Form + channels */}
      <section className="section--tight section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
            <div>
              <span className="eyebrow">ส่งข้อความหาเรา</span>
              <h2 style={{ fontSize: 26, marginBottom: 8 }}>ขอใบเสนอราคา / สอบถาม</h2>
              <p style={{ color: "var(--gray)", marginBottom: 24 }}>
                กรอกรายละเอียดด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
              </p>
              <ContactForm formLocation="contact_page" />
            </div>

            <div>
              <span className="eyebrow">ช่องทางด่วน</span>
              <h2 style={{ fontSize: 26, marginBottom: 24 }}>คุยกับเราโดยตรง</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--lg">
                  <IconLine size={18} />
                  Line: {LINE_ID}
                </a>
                {hotlines.map((h) => (
                  <a key={h.phone.tel} href={`tel:${h.phone.tel}`} className="btn btn--outline-dark btn--lg">
                    <IconPhone size={18} />
                    {h.label}: <span className="num">{h.phone.display}</span>
                  </a>
                ))}
              </div>

              <div
                className="card"
                style={{ padding: 24, marginBottom: 32, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}
              >
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" aria-label={`เพิ่มเพื่อน Line ${LINE_ID}`}>
                  <Image
                    src="/images/line-qr-green.png"
                    alt={`Line QR Code สแกนเพิ่มเพื่อน ${LINE_ID}`}
                    width={132}
                    height={132}
                    style={{ display: "block", border: "1px solid var(--rule)" }}
                  />
                </a>
                <div>
                  <h3 style={{ fontSize: 18, marginBottom: 6 }}>สแกนเพิ่มเพื่อนใน Line</h3>
                  <p style={{ fontSize: 14, color: "var(--gray)", margin: 0 }}>
                    เปิดกล้องหรือแอป Line สแกน QR นี้ แล้วส่งรายการที่ต้องการมาได้เลย
                    ทีมงานตอบภายใน 24 ชั่วโมง
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 18, marginBottom: 12 }}>ช่องทางอื่น ๆ</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, fontSize: 15, lineHeight: 2.2 }}>
                  <li>
                    Facebook:{" "}
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                      facebook.com/southsteelth
                    </a>
                  </li>
                  <li>
                    อีเมล:{" "}
                    <a href={`mailto:${EMAIL}`} style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                      {EMAIL}
                    </a>
                  </li>
                  <li>เวลาทำการ: {OPENING_HOURS_TH} (อาทิตย์หยุด)</li>
                  <li>
                    ร้องเรียนการให้บริการ:{" "}
                    <a href={`tel:${PHONE_COMPLAINT.tel}`} className="num" style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                      {PHONE_COMPLAINT.display}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">สาขาของเรา</span>
            <h2>แวะมาดูสินค้าได้ที่ 2 สาขาในหาดใหญ่</h2>
          </div>
          <div className="grid-2">
            {BRANCHES.map((b) => (
              <div key={b.id} className="card" style={{ overflow: "hidden" }}>
                <div className="map-embed">
                  <iframe
                    src={`https://maps.google.com/maps?q=${b.geo.lat},${b.geo.lng}&z=16&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`แผนที่ ${b.name} ${COMPANY_TH} หาดใหญ่ สงขลา`}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <span className="eyebrow" style={{ marginBottom: 4 }}>
                    {b.badge}
                  </span>
                  <h3 style={{ fontSize: 24 }}>{b.name}</h3>
                  <p style={{ color: "var(--gray)", fontSize: 15, margin: "8px 0 16px" }}>{b.addr}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                    {b.phones.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        className="btn btn--outline-dark"
                        style={{ padding: "8px 16px", fontSize: 14 }}
                      >
                        <IconPhone size={14} />
                        <span className="num">{p.num}</span>
                      </a>
                    ))}
                  </div>
                  <a href={b.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-more map-link">
                    เปิดใน Google Maps →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
