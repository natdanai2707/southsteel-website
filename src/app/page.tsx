import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Placeholder from "@/components/Placeholder";
import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

const categories = [
  { th: "เหล็กโครงสร้างรีดร้อน", en: "Hot-Rolled Structural", sub: "H-Beam · I-Beam · Angle · Channel", no: "01", span: 7, h: 380, src: "/images/wide-flange.jpg" },
  { th: "เหล็กก่อสร้าง", en: "Rebar & Round Bar", sub: "ข้ออ้อย · เส้นกลม · มอก. 20–2559", no: "02", span: 5, h: 380, src: "/images/rebar.jpg" },
  { th: "เหล็กรีดเย็น", en: "Cold-Rolled", sub: "กล่อง · ตัวซี · แป๊บแบน", no: "03", span: 5, h: 340, src: "/images/square-pipe.jpg" },
  { th: "เหล็กแผ่น & สแตนเลส", en: "Plate & Stainless", sub: "แผ่นดำ · ลาย · 304/201", no: "04", span: 4, h: 340, src: "/images/steel-plate.jpg" },
  { th: "Laser CNC", en: "Laser Cutting", sub: "ฉลุลาย · แม่นยำ ±0.1mm", no: "05", span: 3, h: 340, src: "/images/laser-cutting.jpg" },
];

const services = [
  { no: "01", th: "ตัดเลเซอร์ CNC", en: "Laser Cutting", desc: "เครื่องเลเซอร์ไฟเบอร์ความแม่นยำ ±0.1mm รองรับเหล็กดำ สแตนเลส กัลวาไนซ์ หนาสูงสุด 25mm" },
  { no: "02", th: "ตัด–พับเหล็ก", en: "Press Brake", desc: "พับเหล็กตามแบบด้วยเครื่อง CNC รับทำฝาข้างรถบรรทุก รางน้ำ และงานพับพิเศษทุกประเภท" },
  { no: "03", th: "ม้วนเหล็ก", en: "Plate Rolling", desc: "ม้วนเหล็กทุกขนาด รับม้วนวงกลม วงรี ตามแบบที่ลูกค้ากำหนด" },
  { no: "04", th: "จัดส่งถึงไซต์งาน", en: "Delivery", desc: "รถบรรทุกประจำพร้อมส่งในหาดใหญ่และทั่วประเทศ ส่งฟรีในพื้นที่หาดใหญ่" },
];

const timeline = [
  ["1944", "B.E. 2487", "ก่อตั้ง \"กวงหลี\"", "สุราษฎร์ธานี"],
  ["1988", "B.E. 2531", "ตั้ง \"เหล็กใต้\"", "สาขาหาดใหญ่"],
  ["2011", "B.E. 2554", "เปิดสาขาคลองหวะ", "ขยายกิจการ"],
  ["2019", "B.E. 2562", "เปิดศูนย์ Laser CNC", "งานตัด–พับ"],
  ["2026", "B.E. 2569", "รุ่นที่สาม", "สานต่อกิจการ"],
];

const branches = [
  {
    badge: "สำนักงานใหญ่ / HQ",
    name: "สาขาสามสิบเมตร",
    addr: "45 ถ.ราษฎร์ยินดี ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110",
    phones: ["086-488-4450", "095-086-1777", "074-356-643~6"],
    img: "/images/branch-30m.jpg",
  },
  {
    badge: "สาขา / Branch",
    name: "สาขาคลองหวะ",
    addr: "272 ถ.กาญจนวนิช ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110",
    phones: ["086-488-2285", "074-819-777"],
    img: "/images/branch-klongwa.jpg",
  },
];

export default function HomePage() {
  return (
    <main style={{ background: SS.paper, color: SS.ink, fontFamily: SS.body }}>

      {/* HERO */}
      <section style={{ padding: "80px 56px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <h1 style={{ ...ssDisplay, margin: 0, fontSize: "90px", letterSpacing: "-1.08px", lineHeight: "1.15" }}>
              เหล็กถูก<br />เหล็กดี<br />เหล็กมีคุณภาพ<br />
              <em style={{ fontStyle: "italic", color: SS.accent }}>ต้องที่ เหล็กใต้</em>
            </h1>
          </div>
          <div style={{ paddingBottom: 24 }}>
            <p style={{ ...ssBody, fontSize: 19, lineHeight: 1.7, maxWidth: 440, margin: 0 }}>
              ร้านเหล็กเก่าแก่คู่เมืองหาดใหญ่ ศูนย์รวมเหล็กทุกชนิด<br />
              จำหน่ายปลีก-ส่ง บริการ ตัด-พับ พร้อมจัดส่งทั่วประเทศ
            </p>
            <p style={{ ...ssBody, fontSize: 14, lineHeight: 1.7, color: SS.muted, marginTop: 16, maxWidth: 440, fontStyle: "italic" }}>
              Hat Yai's long-established steel center.<br />
              A comprehensive hub for all types of steel.<br />
              Retail and wholesale available.<br />
              We offer cutting and folding services, with nationwide delivery.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
              <a
                href="https://line.me/ti/p/@southsteel"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 22px", background: SS.ink, color: SS.paper, borderRadius: 2, fontSize: 14, fontWeight: 500, textDecoration: "none" }}
              >
                แชทผ่าน Line →
              </a>
              <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 22px", background: "transparent", color: SS.ink, border: `1px solid ${SS.ink}`, borderRadius: 2, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                ดูสินค้าทั้งหมด
              </Link>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div style={{ marginTop: 56, position: "relative" }}>
          <div style={{ position: "relative", width: "100%", height: 520 }}>
            <Image
              src="/images/hero-store.jpg"
              alt="คลังเหล็ก · สาขาคลองหวะ"
              fill
              priority
              style={{ objectFit: "cover", filter: "contrast(1.05) saturate(0.9)" }}
              sizes="100vw"
            />
          </div>
          <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
            <div style={{ ...ssEyebrow, color: SS.paper, opacity: 0.9 }}>Fig. 01 — สาขาคลองหวะ · หาดใหญ่</div>
            <div style={{ ...ssEyebrow, color: SS.paper, opacity: 0.9 }}>13°N · 100°E</div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ marginTop: 24, padding: "20px 0", borderTop: `1px solid ${SS.rule}`, borderBottom: `1px solid ${SS.rule}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {[
            ["81", "ปีของประสบการณ์", "Years in business"],
            ["2", "สาขาในหาดใหญ่", "Branches"],
            ["มอก.", "มาตรฐานอุตสาหกรรม", "TISI Certified"],
            ["ทั่วประเทศ", "บริการจัดส่งทั่วประเทศ", "Nationwide delivery"],
          ].map(([n, th, en]) => (
            <div key={en}>
              <div style={{ ...ssDisplay, fontSize: 40, letterSpacing: "-0.03em", fontWeight: 500 }}>{n}</div>
              <div style={{ ...ssEyebrow, marginTop: 8 }}>{en}</div>
              <div style={{ ...ssBody, fontSize: 14, color: SS.muted, marginTop: 2 }}>{th}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section style={{ padding: "120px 56px", borderTop: `1px solid ${SS.rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 64, marginBottom: 64 }}>
          <div>
            <div style={{ ...ssEyebrow, marginBottom: 16 }}>§ 01 — สินค้า</div>
            <div style={{ ...ssBody, fontSize: 13, color: SS.muted, fontStyle: "italic" }}>Our catalogue</div>
          </div>
          <div>
            <h2 style={{ ...ssDisplay, fontSize: 64, margin: 0, maxWidth: 900 }}>
              เหล็กรูปพรรณ<br />ครบทุก<em style={{ fontStyle: "italic", color: SS.accent }}>ประเภท</em>
            </h2>
            <p style={{ ...ssBody, fontSize: 18, maxWidth: 620, marginTop: 24 }}>
              เหล็กก่อสร้างมาตรฐาน มอก. เหล็กโครงสร้างรีดร้อน เหล็กแผ่นทุกความหนา สแตนเลส และงานฉลุพิเศษ — ครบในที่เดียว
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24 }}>
          {categories.map((p) => (
            <Link key={p.no} href="/products" style={{ gridColumn: `span ${p.span}`, textDecoration: "none", color: SS.ink, display: "block" }}>
              <Placeholder label={p.en} id={p.no} height={p.h} src={p.src} />
              <div style={{ paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "start", gap: 20 }}>
                <div>
                  <div style={{ ...ssDisplay, fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em" }}>{p.th}</div>
                  <div style={{ ...ssBody, fontSize: 14, color: SS.muted, marginTop: 6 }}>{p.sub}</div>
                </div>
                <span style={{ ...ssEyebrow, color: SS.accent, whiteSpace: "nowrap", marginTop: 6 }}>ดู →</span>
              </div>
              <div style={{ ...ssBody, fontSize: 12, color: SS.muted, marginTop: 8, fontStyle: "italic" }}>{p.en}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES DARK */}
      <section style={{ padding: "120px 56px", background: SS.ink, color: SS.paper }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ ...ssEyebrow, color: "#8a8067", marginBottom: 32 }}>§ 02 — บริการ / Services</div>
            <h2 style={{ ...ssDisplay, color: SS.paper, fontSize: 72, margin: 0 }}>
              ตัด.<br />พับ.<br /><em style={{ fontStyle: "italic", color: SS.accent }}>ม้วน.</em>
            </h2>
            <p style={{ ...ssBody, color: "#c9c2b2", fontSize: 18, maxWidth: 480, marginTop: 32 }}>
              บริการ Laser CNC ความแม่นยำสูง พร้อมทีมช่างชำนาญการสำหรับงานตัด–พับ–ม้วนเหล็กทุกขนาด
            </p>
          </div>
          <div>
            {services.map((s, i) => (
              <div key={s.no} style={{ display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 20, alignItems: "baseline", padding: "32px 0", borderTop: i === 0 ? `1px solid rgba(245,242,236,0.2)` : "none", borderBottom: `1px solid rgba(245,242,236,0.2)` }}>
                <div style={{ ...ssEyebrow, color: SS.accent }}>{s.no}</div>
                <div>
                  <div style={{ ...ssDisplay, color: SS.paper, fontSize: 28 }}>{s.th}</div>
                  <div style={{ ...ssBody, color: "#a8a091", fontSize: 14, marginTop: 8, maxWidth: 380, fontStyle: "italic" }}>{s.en} — {s.desc}</div>
                </div>
                <span style={{ ...ssEyebrow, color: SS.paper }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section style={{ padding: "120px 56px", borderTop: `1px solid ${SS.rule}` }}>
        <div style={{ ...ssEyebrow, marginBottom: 16 }}>§ 03 — ประวัติ / Heritage</div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "start", marginTop: 32 }}>
          <div>
            <h2 style={{ ...ssDisplay, fontSize: 88, margin: 0 }}>
              จาก<em style={{ fontStyle: "italic", color: SS.accent }}>รุ่น</em><br />สู่<em style={{ fontStyle: "italic", color: SS.accent }}>รุ่น.</em>
            </h2>
            <p style={{ ...ssBody, fontSize: 19, maxWidth: 540, marginTop: 40 }}>
              เริ่มต้นในนาม <strong style={{ fontWeight: 600 }}>"กวงหลี"</strong> ที่สุราษฎร์ธานี ปี 1944 ขยายสู่หาดใหญ่ ปี 2531 ในชื่อ <strong style={{ fontWeight: 600 }}>บริษัท เหล็กใต้ จำกัด</strong> — วันนี้เราส่งต่อความไว้วางใจสู่รุ่นที่สาม
            </p>
            <Link href="/about" style={{ ...ssEyebrow, color: SS.accent, marginTop: 32, display: "inline-block", textDecoration: "none", borderBottom: `1px solid ${SS.accent}`, paddingBottom: 4 }}>
              อ่านประวัติเพิ่มเติม →
            </Link>
          </div>
          <div style={{ borderLeft: `1px solid ${SS.rule}`, paddingLeft: 32 }}>
            {timeline.map(([yr, be, title, sub], i) => (
              <div key={yr} style={{ position: "relative", paddingBottom: 28 }}>
                <div style={{ position: "absolute", left: -37, top: 8, width: 10, height: 10, borderRadius: "50%", background: i === 4 ? SS.accent : SS.ink }}></div>
                <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                  <div style={{ ...ssDisplay, fontSize: 24, fontWeight: 500 }}>{yr}</div>
                  <div style={{ ...ssEyebrow, color: SS.muted }}>{be}</div>
                </div>
                <div style={{ ...ssBody, fontSize: 16, marginTop: 4 }}>{title}</div>
                <div style={{ ...ssBody, fontSize: 13, color: SS.muted, fontStyle: "italic" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section style={{ padding: "120px 56px", background: SS.paperAlt, borderTop: `1px solid ${SS.rule}` }}>
        <div style={{ ...ssEyebrow, marginBottom: 16 }}>§ 04 — สาขา / Branches</div>
        <h2 style={{ ...ssDisplay, fontSize: 56, margin: "16px 0 56px" }}>สองสาขา ในหาดใหญ่</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          {branches.map((b) => (
            <div key={b.name} style={{ background: SS.paper, border: `1px solid ${SS.rule}` }}>
              <div style={{ position: "relative", width: "100%", height: 240 }}>
                <Image src={b.img} alt={b.name} fill style={{ objectFit: "cover", filter: "saturate(0.9) contrast(1.02)" }} sizes="50vw" />
              </div>
              <div style={{ padding: 40 }}>
                <div style={{ ...ssEyebrow, color: SS.accent, marginBottom: 16 }}>{b.badge}</div>
                <div style={{ ...ssDisplay, fontSize: 36, marginBottom: 24 }}>{b.name}</div>
                <div style={{ ...ssBody, fontSize: 15, marginBottom: 20 }}>{b.addr}</div>
                <div style={{ borderTop: `1px solid ${SS.rule}`, paddingTop: 20 }}>
                  {b.phones.map((p) => (
                    <div key={p} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px dotted ${SS.rule}`, ...ssBody, fontSize: 15 }}>
                      <span style={{ color: SS.muted, fontFamily: SS.mono, fontSize: 13 }}>TEL</span>
                      <a href={`tel:${p.replace(/[-~]/g, "")}`} style={{ color: SS.ink, textDecoration: "none" }}>{p}</a>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(b.addr)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...ssEyebrow, color: SS.accent, marginTop: 24, display: "inline-block", textDecoration: "none" }}
                >
                  เปิดใน Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}
