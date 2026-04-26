import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

export const metadata: Metadata = {
  title: "บริการ | เหล็กใต้",
  description: "บริการตัดเลเซอร์ พับเหล็ก พับสแตนเลส พับรางน้ำ เชื่อมเลเซอร์ และจัดส่งทั่วภาคใต้ โดยช่างชำนาญการ",
};

const services = [
  {
    id: "laser", no: "01", th: "ตัดเลเซอร์", en: "Fiber Laser Cutting",
    lead: "ตัดเหล็กแผ่นและสแตนเลสด้วยเลเซอร์ไฟเบอร์ความแม่นยำสูง ±0.1 mm รองรับทั้งงานฉลุลาย ชิ้นส่วนเครื่องจักร และตัดตามแบบทุกรูปทรง",
    specs: [["ความแม่นยำ", "±0.1 mm"], ["ความหนาสูงสุด", "25 mm (CS) · 10 mm (SUS)"], ["ขนาดโต๊ะ", "1500 × 3000 mm"], ["รูปแบบไฟล์", "DWG · DXF · PDF · AI"]],
    use: ["ชิ้นส่วนเครื่องจักร", "ฉลุลายตกแต่ง", "ป้าย / โลโก้", "เหล็กแผ่นและสแตนเลส"],
    src: "/images/laser-cutting.jpg",
  },
  {
    id: "bending", no: "02", th: "พับเหล็ก / พับสแตนเลส / พับรางน้ำ", en: "Press Brake / Bending",
    lead: "บริการพับขึ้นรูปเหล็กและสแตนเลสตามแบบ ด้วยเครื่อง CNC Press Brake รับงานฝาข้างรถบรรทุก รางน้ำ ตู้เหล็ก และชิ้นงานพับพิเศษทุกประเภท",
    specs: [["ความแม่นยำมุม", "±0.5°"], ["ความยาวพับ", "สูงสุด 3000 mm"], ["ความหนา", "สูงสุด 12 mm"], ["แรงกด", "160 ตัน"]],
    use: ["ฝาข้างรถบรรทุก", "รางน้ำ รางระบายน้ำ", "ตู้ไฟฟ้า ตู้เหล็ก", "พับสแตนเลสทุกประเภท"],
    src: "/images/bending.jpg",
    src2: "/images/bending2.jpg",
  },
  {
    id: "laser-welding", no: "03", th: "งานเชื่อมเลเซอร์", en: "Laser Welding",
    lead: "เชื่อมโลหะด้วยเลเซอร์สำหรับงานละเอียด รอยเชื่อมสวยงาม แข็งแรง และความร้อนกระทบชิ้นงานน้อย เหมาะกับสแตนเลส เหล็กบาง และงานที่ต้องการความสะอาดสูง",
    specs: [["ประเภทงาน", "สแตนเลส · เหล็กบาง"], ["ความหนาที่รองรับ", "0.5 – 6 mm"], ["รอยเชื่อม", "สะอาด ไม่ต้องเจียร"], ["มาตรฐาน", "ISO 3834"]],
    use: ["งานสแตนเลสตกแต่ง", "ชิ้นส่วนอุตสาหกรรม", "งานที่ต้องการความสะอาด", "เชื่อมชิ้นงานบาง"],
    src: "/images/laser-welding.jpg",
  },
  {
    id: "delivery", no: "04", th: "บริการจัดส่ง", en: "Delivery & Logistics",
    lead: "รถบรรทุกประจำพร้อมส่งถึงหน้าไซต์งานทั่วภาคใต้ ส่งฟรีในพื้นที่หาดใหญ่และใกล้เคียง พร้อมบริการจัดส่งด่วนภายใน 24 ชั่วโมง",
    specs: [["พื้นที่ส่งฟรี", "หาดใหญ่ · ใกล้เคียง"], ["รถบรรทุก", "4 ล้อ · 6 ล้อ · 10 ล้อ"], ["เวลาจัดส่ง", "ภายใน 24 ชม."], ["ครอบคลุม", "สงขลา · ภาคใต้"]],
    use: ["ไซต์ก่อสร้าง", "โรงงาน", "บ้านพักอาศัย", "โครงการขนาดใหญ่"],
    src: "/images/delivery/delivery-01.jpg",
  },
];

const workflow = [
  ["01", "ส่งแบบ", "Submit design", "DWG · DXF · PDF"],
  ["02", "เสนอราคา", "Quote", "ภายใน 24 ชม."],
  ["03", "ผลิต", "Production", "ตามคิวงาน"],
  ["04", "ตรวจสอบ QC", "Quality Check", "ตามมาตรฐาน"],
  ["05", "จัดส่ง", "Delivery", "ถึงหน้าไซต์"],
];

const fileFormats = [
  ["DWG", "AutoCAD", "2D drawing"],
  ["DXF", "Exchange", "Standard"],
  ["PDF", "Portable", "พร้อมขนาด"],
  ["AI / EPS", "Illustrator", "Vector"],
];

export default function ServicesPage() {
  return (
    <main style={{ background: SS.paper, color: SS.ink, fontFamily: SS.body }}>
      <PageHeader
        kicker="§ 03 — บริการ / Services"
        titleTh={`ตัด. พับ.<br/><em style="font-style:italic;color:${SS.accent}">เชื่อม.</em>`}
        titleEn="Cut · Bend · Weld"
        desc="บริการตัดเลเซอร์ พับเหล็ก พับสแตนเลส พับรางน้ำ และงานเชื่อมเลเซอร์ โดยช่างชำนาญการ พร้อมบริการจัดส่งทั่วภาคใต้"
      />

      {/* Workflow */}
      <section style={{ padding: "72px 56px", borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ ...ssEyebrow, marginBottom: 32 }}>Fig. 01 — กระบวนการทำงาน / Workflow</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, borderTop: `1px solid ${SS.ink}`, borderBottom: `1px solid ${SS.ink}` }}>
          {workflow.map(([n, th, en, sub], i) => (
            <div key={n} style={{ padding: "32px 24px", borderLeft: i === 0 ? "none" : `1px solid ${SS.rule}`, position: "relative" }}>
              <div style={{ ...ssEyebrow, color: SS.accent, fontSize: 14 }}>{n}</div>
              <div style={{ ...ssDisplay, fontSize: 24, marginTop: 12 }}>{th}</div>
              <div style={{ ...ssBody, fontSize: 14, color: SS.muted, fontStyle: "italic", marginTop: 4 }}>{en}</div>
              <div style={{ ...ssBody, fontSize: 15, color: SS.subtle, marginTop: 16 }}>{sub}</div>
              {i < 4 && (
                <div style={{ position: "absolute", top: "50%", right: -8, fontSize: 20, color: SS.muted, background: SS.paper, padding: "0 4px" }}>→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((s, i) => (
        <section key={s.id} style={{ padding: "120px 56px", background: i % 2 === 0 ? SS.paper : SS.paperAlt, borderBottom: `1px solid ${SS.rule}` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ ...ssEyebrow, color: SS.accent, marginBottom: 20 }}>SVC / {s.no}</div>
              <h2 style={{ ...ssDisplay, fontSize: 64, margin: 0, lineHeight: 1.05 }}>{s.th}</h2>
              <div style={{ ...ssBody, fontSize: 18, color: SS.muted, fontStyle: "italic", marginTop: 16 }}>{s.en}</div>
              <p style={{ ...ssBody, fontSize: 18, marginTop: 32, maxWidth: 520 }}>{s.lead}</p>
              <div style={{ marginTop: 48 }}>
                <div style={{ ...ssEyebrow, marginBottom: 16 }}>เหมาะสำหรับงาน / Applications</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {s.use.map((u) => (
                    <div key={u} style={{ ...ssBody, fontSize: 15, padding: "12px 0", borderTop: `1px solid ${SS.rule}` }}>
                      <span style={{ color: SS.accent, marginRight: 8 }}>●</span>{u}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 40 }}>
                <a
                  href="https://line.me/ti/p/@southsteel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 22px", background: SS.ink, color: SS.paper, borderRadius: 2, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
                >
                  ส่งแบบเพื่อประเมินราคา →
                </a>
              </div>
            </div>
            <div>
              <Placeholder label={s.en} id={`svc-${s.no}`} height={380} src={s.src} />
              {"src2" in s && s.src2 && (
                <div style={{ marginTop: 16 }}>
                  <Placeholder label={`${s.en} 2`} id={`svc-${s.no}-2`} height={280} src={s.src2} />
                </div>
              )}
              <div style={{ marginTop: 32, background: SS.paper, padding: 32, border: `1px solid ${SS.ink}` }}>
                <div style={{ ...ssEyebrow, marginBottom: 20 }}>SPEC SHEET / สเปคเครื่อง</div>
                {s.specs.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${SS.rule}` }}>
                    <span style={{ ...ssBody, fontSize: 15, color: SS.muted, fontFamily: SS.mono, letterSpacing: "0.05em", textTransform: "uppercase" }}>{k}</span>
                    <span style={{ ...ssBody, fontSize: 16, fontFamily: SS.mono, fontWeight: 500 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* File formats */}
      <section style={{ padding: "96px 56px", background: SS.ink, color: SS.paper }}>
        <div style={{ ...ssEyebrow, color: "#8a8067", marginBottom: 20 }}>รูปแบบไฟล์ที่รองรับ</div>
        <h2 style={{ ...ssDisplay, color: SS.paper, fontSize: 56, margin: "0 0 48px" }}>
          ส่งแบบมาได้<em style={{ fontStyle: "italic", color: SS.accent }}> ทุกรูปแบบ.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: `1px solid rgba(245,242,236,0.2)` }}>
          {fileFormats.map(([ext, name, sub]) => (
            <div key={ext} style={{ padding: "32px 24px", borderBottom: `1px solid rgba(245,242,236,0.2)`, borderRight: `1px solid rgba(245,242,236,0.2)` }}>
              <div style={{ ...ssDisplay, color: SS.paper, fontSize: 36, fontFamily: SS.mono, fontWeight: 500 }}>.{ext.toLowerCase()}</div>
              <div style={{ ...ssEyebrow, color: SS.accent, marginTop: 12 }}>{name}</div>
              <div style={{ ...ssBody, color: "#a8a091", fontSize: 15, marginTop: 4 }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
