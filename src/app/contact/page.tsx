import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

export const metadata: Metadata = {
  title: "ติดต่อเรา | เหล็กใต้",
  description: "ทีมงานพร้อมตอบคำถาม ให้คำปรึกษา และเสนอราคาฟรี ภายใน 24 ชั่วโมง จันทร์–เสาร์",
};

const channels = [
  { no: "01", th: "แชท Line", en: "Line Chat", val: "@southsteel", sub: "ตอบเร็วที่สุด", href: "https://line.me/ti/p/@southsteel", highlight: true },
  { no: "02", th: "โทรศัพท์", en: "Phone", val: "086-488-4450", sub: "จ.–ส. 08–17น.", href: "tel:0864884450", highlight: false },
  { no: "03", th: "Facebook", en: "Messenger", val: "southsteelth", sub: "ข้อความ · โพสต์", href: "https://facebook.com/southsteelth", highlight: false },
  { no: "04", th: "อีเมล", en: "Email", val: "natdanai2707@gmail.com", sub: "ติดต่อทางอีเมล", href: "mailto:natdanai2707@gmail.com", highlight: false },
];

const branches = [
  {
    id: "hq",
    badge: "สำนักงานใหญ่ / HQ",
    name: "สาขาสามสิบเมตร",
    addr: "45 ถ.ราษฎร์ยินดี ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110",
    coord: "7.0084°N · 100.4747°E",
    phones: [{ num: "086-488-4450", label: "หลัก" }, { num: "095-086-1777", label: "สำรอง" }, { num: "074-356-643~6", label: "สำนักงาน" }],
    img: "/images/branch-30m.jpg",
    mapsUrl: "https://maps.google.com/?q=45+ถ.ราษฎร์ยินดี+หาดใหญ่+สงขลา",
  },
  {
    id: "kw",
    badge: "สาขา / Branch",
    name: "สาขาคลองหวะ",
    addr: "272 ถ.กาญจนวนิช ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110",
    coord: "6.9967°N · 100.4938°E",
    phones: [{ num: "086-488-2285", label: "หลัก" }, { num: "074-819-777", label: "สำนักงาน" }],
    img: "/images/branch-klongwa.jpg",
    mapsUrl: "https://maps.google.com/?q=272+ถ.กาญจนวนิช+คอหงส์+หาดใหญ่+สงขลา",
  },
];

const days = [
  ["จ", "Mon", "08–17"],
  ["อ", "Tue", "08–17"],
  ["พ", "Wed", "08–17"],
  ["พฤ", "Thu", "08–17"],
  ["ศ", "Fri", "08–17"],
  ["ส", "Sat", "08–17"],
  ["อา", "Sun", "ปิด"],
];

const jobTypes = ["ซื้อเหล็ก", "ตัดเลเซอร์", "ตัด–พับ", "ม้วน", "จัดส่ง", "อื่นๆ"];

export default function ContactPage() {
  return (
    <main style={{ background: SS.paper, color: SS.ink, fontFamily: SS.body }}>
      <PageHeader
        kicker="§ 05 — ติดต่อเรา / Contact"
        titleTh={`แชทหาเรา<br/>ทาง <em style="font-style:italic;color:${SS.line}">Line.</em>`}
        titleEn="Reach us — fastest via Line"
        desc="ทีมงานพร้อมตอบคำถาม ให้คำปรึกษา และเสนอราคาฟรี ภายใน 24 ชั่วโมง จันทร์–เสาร์ 08.00–17.00 น."
      />

      {/* Channels */}
      <section style={{ padding: "72px 56px", borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ ...ssEyebrow, marginBottom: 32 }}>ช่องทางติดต่อ / Channels</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: `1px solid ${SS.ink}` }}>
          {channels.map((c, i) => (
            <a
              key={c.no}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                padding: 32,
                borderLeft: i === 0 ? "none" : `1px solid ${SS.rule}`,
                borderBottom: `1px solid ${SS.ink}`,
                background: c.highlight ? SS.ink : "transparent",
                color: c.highlight ? SS.paper : SS.ink,
                textDecoration: "none",
                display: "block",
              }}
            >
              <div style={{ ...ssEyebrow, color: c.highlight ? SS.line : SS.accent }}>№ {c.no}</div>
              <div style={{ ...ssDisplay, fontSize: 28, marginTop: 16, color: c.highlight ? SS.paper : SS.ink }}>{c.th}</div>
              <div style={{ ...ssBody, fontSize: 13, color: c.highlight ? "#a8a091" : SS.muted, fontStyle: "italic" }}>{c.en}</div>
              <div style={{ ...ssBody, fontFamily: SS.mono, fontSize: 16, marginTop: 24, color: c.highlight ? SS.line : SS.ink, fontWeight: 500 }}>{c.val}</div>
              <div style={{ ...ssBody, fontSize: 12, color: c.highlight ? "#a8a091" : SS.muted, marginTop: 4 }}>{c.sub}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + side info */}
      <section style={{ padding: "96px 56px", borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80 }}>
          <div>
            <div style={{ ...ssEyebrow, marginBottom: 16 }}>§ 01 — ส่งข้อความ</div>
            <h2 style={{ ...ssDisplay, fontSize: 52, margin: "0 0 24px" }}>
              ส่งแบบ<br />ขอใบเสนอราคา
            </h2>
            <p style={{ ...ssBody, fontSize: 16, maxWidth: 380 }}>
              หากต้องการส่งแบบ DWG / PDF แนบไฟล์ผ่าน Line ได้โดยตรง หรือกรอกฟอร์มและเราจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
            <div style={{ marginTop: 48, borderTop: `1px solid ${SS.rule}`, paddingTop: 24 }}>
              <div style={{ ...ssEyebrow, marginBottom: 12 }}>เอกสารที่ควรเตรียม</div>
              <ul style={{ ...ssBody, fontSize: 14, paddingLeft: 20, margin: 0 }}>
                {["แบบชิ้นงาน (DWG, DXF, PDF, AI)", "จำนวนและความหนาเหล็ก", "วันที่ต้องการรับสินค้า", "สถานที่จัดส่ง"].map((item) => (
                  <li key={item} style={{ padding: "6px 0" }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <form
            action="https://line.me/ti/p/@southsteel"
            style={{ background: SS.paperAlt, padding: 48, border: `1px solid ${SS.ink}` }}
          >
            {[
              { label: "ชื่อ–นามสกุล / Name", placeholder: "กรุณากรอกชื่อ", name: "name", type: "text" },
              { label: "โทรศัพท์ / Phone", placeholder: "08x-xxx-xxxx", name: "phone", type: "tel" },
              { label: "อีเมล / Email", placeholder: "name@example.com", name: "email", type: "email" },
            ].map((f) => (
              <div key={f.label} style={{ marginBottom: 24 }}>
                <div style={{ ...ssEyebrow, marginBottom: 8 }}>{f.label}</div>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  style={{
                    width: "100%", ...ssBody, fontSize: 15, padding: "14px 0",
                    border: "none", borderBottom: `1px solid ${SS.ink}`,
                    background: "transparent", outline: "none", color: SS.ink,
                    fontFamily: SS.body,
                  }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 24 }}>
              <div style={{ ...ssEyebrow, marginBottom: 8 }}>ประเภทงาน / Type</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {jobTypes.map((t, i) => (
                  <span key={t} style={{
                    ...ssEyebrow, padding: "8px 14px",
                    border: `1px solid ${i === 0 ? SS.ink : SS.rule}`,
                    background: i === 0 ? SS.ink : "transparent",
                    color: i === 0 ? SS.paper : SS.subtle,
                    cursor: "pointer",
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={{ ...ssEyebrow, marginBottom: 8 }}>รายละเอียด / Message</div>
              <textarea
                name="message"
                placeholder="รายละเอียดงานที่ต้องการ..."
                rows={4}
                style={{
                  width: "100%", ...ssBody, fontSize: 15, padding: "14px 0",
                  border: "none", borderBottom: `1px solid ${SS.ink}`,
                  background: "transparent", outline: "none", resize: "none",
                  color: SS.ink, fontFamily: SS.body, minHeight: 100,
                }}
              />
            </div>
            <a
              href="https://line.me/ti/p/@southsteel"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block", width: "100%", padding: "18px", background: SS.ink, color: SS.paper,
                border: "none", ...ssEyebrow, fontSize: 13, letterSpacing: "0.22em",
                cursor: "pointer", textDecoration: "none", textAlign: "center",
              }}
            >
              ส่งข้อความ · SUBMIT →
            </a>
          </form>
        </div>
      </section>

      {/* Branch locations */}
      <section style={{ padding: "96px 56px", background: SS.paperAlt, borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ ...ssEyebrow, marginBottom: 16 }}>§ 02 — สาขา / Locations</div>
        <h2 style={{ ...ssDisplay, fontSize: 56, margin: "16px 0 56px" }}>สองสาขา ในหาดใหญ่</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {branches.map((b) => (
            <div key={b.id} style={{ background: SS.paper, border: `1px solid ${SS.rule}` }}>
              <div style={{ position: "relative", height: 280 }}>
                <Image src={b.img} alt={b.name} fill style={{ objectFit: "cover" }} sizes="50vw" />
              </div>
              <div style={{ padding: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
                  <div style={{ ...ssEyebrow, color: SS.accent }}>{b.badge}</div>
                  <div style={{ ...ssEyebrow, fontFamily: SS.mono, color: SS.muted, fontSize: 10 }}>{b.coord}</div>
                </div>
                <div style={{ ...ssDisplay, fontSize: 32 }}>{b.name}</div>
                <div style={{ ...ssBody, fontSize: 15, marginTop: 12 }}>{b.addr}</div>
                <div style={{ marginTop: 24, borderTop: `1px solid ${SS.rule}` }}>
                  {b.phones.map(({ num, label }) => (
                    <div key={num} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px dotted ${SS.rule}` }}>
                      <span style={{ ...ssEyebrow, color: SS.muted }}>{label}</span>
                      <a href={`tel:${num.replace(/[-~]/g, "")}`} style={{ ...ssBody, fontFamily: SS.mono, fontSize: 14, fontWeight: 500, color: SS.ink, textDecoration: "none" }}>{num}</a>
                    </div>
                  ))}
                </div>
                <a
                  href={b.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...ssEyebrow, color: SS.accent, marginTop: 24, display: "inline-block", textDecoration: "none", borderBottom: `1px solid ${SS.accent}`, paddingBottom: 4 }}
                >
                  เปิดใน Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hours */}
      <section style={{ padding: "72px 56px", borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ ...ssEyebrow, marginBottom: 16 }}>เวลาทำการ / Hours</div>
            <h2 style={{ ...ssDisplay, fontSize: 40, margin: 0 }}>
              เปิด<em style={{ fontStyle: "italic", color: SS.accent }}>จันทร์–เสาร์</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0, borderTop: `1px solid ${SS.ink}` }}>
            {days.map(([th, en, hrs], i) => (
              <div key={en} style={{
                padding: "24px 16px",
                borderLeft: i === 0 ? "none" : `1px solid ${SS.rule}`,
                borderBottom: `1px solid ${SS.ink}`,
                background: i === 6 ? SS.paperAlt : "transparent",
                opacity: i === 6 ? 0.5 : 1,
              }}>
                <div style={{ ...ssDisplay, fontSize: 24 }}>{th}</div>
                <div style={{ ...ssEyebrow, color: SS.muted, marginTop: 4 }}>{en}</div>
                <div style={{ ...ssBody, fontSize: 13, fontFamily: SS.mono, marginTop: 12, color: i === 6 ? SS.muted : SS.ink }}>{hrs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
