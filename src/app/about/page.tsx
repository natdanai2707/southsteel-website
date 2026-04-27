import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | เหล็กใต้",
  description: "จากร้านเล็กๆ ในสุราษฎร์ธานีปี 1944 สู่ศูนย์จำหน่ายเหล็กครบวงจรที่หาดใหญ่ วันนี้เรากำลังส่งต่อความไว้วางใจสู่รุ่นที่สาม",
};

const timeline = [
  { yr: "1944", be: "B.E. 2487", title: "ก่อตั้งร้าน \"กวงหลี\"", loc: "สุราษฎร์ธานี", desc: "รุ่นที่หนึ่งก่อตั้งร้านขายเหล็กเล็กๆ ในนาม \"กวงหลี\" จำหน่ายเหล็กก่อสร้างและอุปกรณ์งานช่างให้ช่างท้องถิ่น" },
  { yr: "1967", be: "B.E. 2510", title: "ขยายสู่รุ่นที่สอง", loc: "สุราษฎร์ธานี", desc: "รุ่นที่สองเข้ามาบริหาร ขยายกลุ่มสินค้าให้ครอบคลุมเหล็กรูปพรรณและเหล็กโครงสร้าง" },
  { yr: "1988", be: "B.E. 2531", title: "ก่อตั้ง \"บริษัท เหล็กใต้ จำกัด\"", loc: "หาดใหญ่ · สงขลา", desc: "ขยายกิจการมายังหาดใหญ่ในนามบริษัท เปิดสาขาสามสิบเมตรเป็นสำนักงานใหญ่ รองรับตลาดภาคใต้ทั้งหมด" },
  { yr: "2004", be: "B.E. 2547", title: "ศูนย์ตัด–พับเหล็ก", loc: "หาดใหญ่", desc: "ติดตั้งเครื่องตัด–พับเหล็ก CNC เริ่มให้บริการแปรรูปเหล็กตามแบบลูกค้า" },
  { yr: "2011", be: "B.E. 2554", title: "เปิดสาขาคลองหวะ", loc: "คอหงส์ · หาดใหญ่", desc: "เปิดสาขาที่สอง ถนนกาญจนวนิช เพื่อรองรับลูกค้าในเขตคอหงส์และใกล้เคียง" },
  { yr: "2019", be: "B.E. 2562", title: "ศูนย์ Laser CNC", loc: "หาดใหญ่", desc: "ลงทุนเครื่องตัดเลเซอร์ไฟเบอร์ ±0.1mm เพิ่มขีดความสามารถงานแปรรูปเหล็กแผ่น" },
  { yr: "2026", be: "B.E. 2569", title: "รุ่นที่สาม · ปัจจุบัน", loc: "หาดใหญ่", desc: "ส่งต่อกิจการสู่รุ่นที่สาม พร้อมปรับปรุงบริการดิจิทัล เปิดรับสั่งทำผ่าน Line และเว็บไซต์" },
];

const values = [
  { no: "I.", th: "เหล็กคุณภาพ", en: "Quality First", desc: "เหล็กทุกชิ้นผ่านมาตรฐาน มอก. คัดจากโรงงานที่เราทำงานด้วยมานาน ไม่มีของลอกเลียนแบบในสต็อก" },
  { no: "II.", th: "ราคาที่โปร่งใส", en: "Fair Pricing", desc: "ราคาส่งตรงจากโรงงาน เปิดเผยราคาตามจริง ไม่มีค่าใช้จ่ายแอบแฝง ตอบใบเสนอราคาภายใน 24 ชั่วโมง" },
  { no: "III.", th: "บริการที่ไว้ใจได้", en: "Dependable Service", desc: "ทีมช่างชำนาญการกว่า 20 ปี รถบรรทุกประจำพร้อมส่ง และบริการหลังการขายที่ติดต่อได้จริง" },
];

const stats = [
  ["38+", "ปี", "Years in business"],
  ["3", "รุ่น", "Generations"],
  ["2", "สาขา", "Branches"],
  ["500+", "SKU", "Products in stock"],
];

export default function AboutPage() {
  return (
    <main style={{ background: SS.paper, color: SS.ink, fontFamily: SS.body }}>
      <PageHeader
        kicker="§ 04 — เกี่ยวกับเรา / About"
        titleTh={`38 ปี<br/>กับ<em style="font-style:italic;color:${SS.accent}">เหล็ก.</em>`}
        titleEn="38 years with steel"
        desc="จากร้านเล็กๆ ในสุราษฎร์ธานีปี 1944 สู่ศูนย์จำหน่ายเหล็กครบวงจรที่หาดใหญ่ วันนี้เรากำลังส่งต่อความไว้วางใจสู่รุ่นที่สาม"
      />

      {/* Opening quote */}
      <section style={{ padding: "96px 56px", borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80 }}>
          <div>
            <div style={{ ...ssEyebrow, marginBottom: 24 }}>§ 01 — จุดเริ่มต้น</div>
            <p style={{ ...ssDisplay, fontSize: 40, lineHeight: 1.15, margin: 0, color: SS.ink }}>
              "ความไว้วางใจของลูกค้าคือสิ่งที่ครอบครัวเราสร้างมาตลอดสามรุ่น มันหนักกว่าเหล็กทุกแท่งที่เราขาย"
            </p>
            <div style={{ ...ssEyebrow, color: SS.muted, marginTop: 32 }}>— ครอบครัวผู้ก่อตั้ง · FOUNDING FAMILY</div>
          </div>
          <div>
            <div style={{ position: "relative", height: 480 }}>
              <Image
                src="/images/store-interior.jpg"
                alt="ร้านกวงหลี · สุราษฎร์ธานี"
                fill
                style={{ objectFit: "cover", filter: "saturate(0.9) contrast(1.02)" }}
                sizes="50vw"
              />
            </div>
            <div style={{ ...ssEyebrow, color: SS.muted, marginTop: 12 }}>Fig. 02 — ร้านกวงหลี · สุราษฎร์ธานี ปี 1972</div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "120px 56px", background: SS.paperAlt, borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ ...ssEyebrow, marginBottom: 16 }}>§ 02 — ประวัติ / Timeline</div>
        <h2 style={{ ...ssDisplay, fontSize: 72, margin: "16px 0 64px", maxWidth: 900 }}>
          เส้นทางจาก<em style={{ fontStyle: "italic", color: SS.accent }}>รุ่นสู่รุ่น</em>
        </h2>
        <div style={{ borderTop: `1px solid ${SS.ink}` }}>
          {timeline.map((m, i) => (
            <div key={m.yr} style={{ display: "grid", gridTemplateColumns: "200px 80px 1fr 1fr", gap: 40, padding: "32px 0", borderBottom: `1px solid ${SS.rule}`, alignItems: "baseline" }}>
              <div>
                <div style={{ ...ssDisplay, fontSize: 44, fontWeight: 500 }}>{m.yr}</div>
                <div style={{ ...ssEyebrow, color: SS.muted, marginTop: 4 }}>{m.be}</div>
              </div>
              <div style={{ ...ssEyebrow, color: SS.accent }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div style={{ ...ssDisplay, fontSize: 22, fontWeight: 500 }}>{m.title}</div>
                <div style={{ ...ssBody, fontSize: 13, color: SS.muted, fontStyle: "italic", marginTop: 4 }}>{m.loc}</div>
              </div>
              <div style={{ ...ssBody, fontSize: 14, maxWidth: 420 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "120px 56px", borderBottom: `1px solid ${SS.rule}` }}>
        <div style={{ ...ssEyebrow, marginBottom: 16 }}>§ 03 — คุณค่าของเรา / Values</div>
        <h2 style={{ ...ssDisplay, fontSize: 72, margin: "16px 0 64px", maxWidth: 900 }}>
          สิ่งที่เรา<em style={{ fontStyle: "italic", color: SS.accent }}>เชื่อ.</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {values.map((v) => (
            <div key={v.no}>
              <div style={{ ...ssDisplay, fontSize: 64, color: SS.accent, fontStyle: "italic", lineHeight: 1 }}>{v.no}</div>
              <div style={{ ...ssDisplay, fontSize: 32, marginTop: 20 }}>{v.th}</div>
              <div style={{ ...ssEyebrow, color: SS.muted, marginTop: 8 }}>{v.en}</div>
              <p style={{ ...ssBody, fontSize: 15, marginTop: 20 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "96px 56px", background: SS.ink, color: SS.paper }}>
        <div style={{ ...ssEyebrow, color: "#8a8067", marginBottom: 32 }}>ตัวเลขที่เราภูมิใจ</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {stats.map(([n, th, en]) => (
            <div key={en} style={{ borderTop: `1px solid rgba(245,242,236,0.2)`, paddingTop: 24 }}>
              <div style={{ ...ssDisplay, color: SS.paper, fontSize: 72, fontWeight: 500, letterSpacing: "-0.03em" }}>{n}</div>
              <div style={{ ...ssBody, color: SS.paper, fontSize: 18, marginTop: 8 }}>{th}</div>
              <div style={{ ...ssEyebrow, color: "#8a8067", marginTop: 4 }}>{en}</div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
