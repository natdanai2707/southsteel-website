import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

export const metadata: Metadata = {
  title: "สินค้า | เหล็กใต้",
  description: "เหล็กรูปพรรณ เหล็กก่อสร้าง เหล็กแผ่น และสแตนเลส ราคาส่ง มาตรฐาน มอก. ทุกชิ้น",
};

const productImages: Record<string, string> = {
  // เหล็กรีดร้อน
  "01-1": "/images/wide-flange.jpg",
  "01-2": "/images/i-beam.jpg",
  "01-3": "/images/h-beam.jpg",
  "01-4": "/images/channel-bar.jpg",
  "01-5": "/images/angle-bar.jpg",
  "01-6": "/images/flat-bar.jpg",
  "01-7": "/images/shaft-round.jpg",
  "01-8": "/images/square-bar.jpg",
  // เหล็กรีดเย็น
  "02-1": "/images/round-tube.jpg",
  "02-2": "/images/square-pipe.jpg",
  "02-3": "/images/rect-tube.jpg",
  "02-4": "/images/cold-rolled-angle.jpg",
  "02-5": "/images/cold-rolled-sheet.jpg",
  "02-6": "/images/stainless-round-tube.jpg",
  "02-7": "/images/stainless-square-tube.jpg",
  // เหล็กเส้น
  "03-1": "/images/rebar.jpg",
  "03-2": "/images/round-bar-rb.jpg",
  "03-3": "/images/wire-mesh.jpg",
  // เหล็กแผ่น
  "04-1": "/images/steel-plate.jpg",
  "04-2": "/images/checker-plate.jpg",
  "04-3": "/images/galvanized-sheet.jpg",
  "04-4": "/images/stainless.jpg",
};

const categories = [
  {
    id: "hot-rolled", no: "01",
    th: "เหล็กรีดร้อน", en: "Hot-Rolled Steel",
    blurb: "เหล็กรูปพรรณรีดร้อนมาตรฐาน มอก. สำหรับงานโครงสร้างอาคาร โรงงาน สะพาน และงานวิศวกรรมทั่วไป",
    items: [
      { th: "ไวด์แฟลงก์", en: "Wide Flange / WF", mok: "มอก. 1227-2558" },
      { th: "ไอบีม", en: "I-Beam", mok: "มอก. 1227-2558" },
      { th: "เอชบีม", en: "H-Beam", mok: "มอก. 1227-2558" },
      { th: "รางน้ำ", en: "Channel Bar", mok: "มอก. 1227-2558" },
      { th: "เหล็กฉาก", en: "Angle Bar", mok: "มอก. 1227-2558" },
      { th: "เหล็กแบน", en: "Flat Bar", mok: "" },
      { th: "เหล็กกลม", en: "Round Bar", mok: "" },
      { th: "เหล็กสี่เหลี่ยมตัน", en: "Square Bar", mok: "" },
    ],
  },
  {
    id: "cold-rolled", no: "02",
    th: "เหล็กรีดเย็น", en: "Cold-Rolled Steel",
    blurb: "ท่อและหน้าตัดรีดเย็น รวมถึงสแตนเลส สำหรับงานเฟอร์นิเจอร์ โครงสร้างเบา และงานตกแต่ง",
    items: [
      { th: "ท่อกลม", en: "Round Tube", mok: "มอก. 107-2533" },
      { th: "ท่อเหลี่ยม", en: "Square Tube", mok: "มอก. 107-2533" },
      { th: "ท่อสี่เหลี่ยมผืนผ้า", en: "Rectangular Tube", mok: "มอก. 107-2533" },
      { th: "เหล็กตัวซี", en: "Lip Channel / C-Purlin", mok: "มอก. 1228-2561" },
      { th: "แผ่นรีดเย็น", en: "Cold Rolled Sheet", mok: "" },
      { th: "ท่อสแตนเลสกลม", en: "Stainless Round Tube", mok: "" },
      { th: "กล่องสแตนเลส", en: "Stainless Square/Rect Tube", mok: "" },
    ],
  },
  {
    id: "rebar", no: "03",
    th: "เหล็กเส้น", en: "Rebar & Wire Mesh",
    blurb: "เหล็กเส้นมาตรฐาน มอก. สำหรับงานก่อสร้างคอนกรีตเสริมเหล็ก ทั้งงานบ้านพักอาศัยและโครงการขนาดใหญ่",
    items: [
      { th: "เหล็กข้ออ้อย", en: "Deformed Bar / DB", mok: "มอก. 24-2559" },
      { th: "เหล็กเส้นกลม", en: "Round Bar / RB", mok: "มอก. 20-2559" },
      { th: "ไวร์เมช", en: "Wire Mesh", mok: "" },
    ],
  },
  {
    id: "plate", no: "04",
    th: "เหล็กแผ่น", en: "Steel Plate & Sheet",
    blurb: "เหล็กแผ่นทุกประเภท ตั้งแต่แผ่นดำ แผ่นลาย แผ่นซิงค์ ถึงสแตนเลส พร้อมบริการตัดตามขนาด",
    items: [
      { th: "เหล็กแผ่นดำ", en: "Hot Rolled Plate", mok: "มอก. 1479-2558" },
      { th: "เหล็กแผ่นลาย", en: "Checkered Plate", mok: "" },
      { th: "เหล็กแผ่นซิงค์", en: "Galvanized Sheet", mok: "มอก. 277-2553" },
      { th: "แผ่นสแตนเลส", en: "Stainless Steel Sheet", mok: "" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main style={{ background: SS.paper, color: SS.ink, fontFamily: SS.body }}>
      <PageHeader
        kicker=""
        titleTh={`สินค้าของเรา<br/><em style="font-style:italic;color:${SS.accent}">ครบทุกประเภท.</em>`}
        titleEn=""
        desc={"เหล็กรูปพรรณ เหล็กเส้นก่อสร้าง มาตรฐาน มอก. เหล็กแผ่น สแตนเลส อลูมิเนียม\n\nอุปกรณ์งานเหล็ก แก๊ส สี ลวดเชื่อม ใบตัด ใบเจียร์ ฯลฯ"}
      />

      {/* Category nav strip */}
      <section style={{ padding: "32px 56px", borderBottom: `1px solid ${SS.rule}`, display: "flex", gap: 0 }}>
        {categories.map((c, i) => (
          <div key={c.id} style={{ flex: 1, padding: "0 24px", borderLeft: i === 0 ? "none" : `1px solid ${SS.rule}` }}>
            <div style={{ ...ssEyebrow, color: SS.accent }}>№ {c.no}</div>
            <div style={{ ...ssDisplay, fontSize: 20, fontWeight: 500, marginTop: 8 }}>{c.th}</div>
            <div style={{ ...ssBody, fontSize: 14, color: SS.muted, fontStyle: "italic", marginTop: 2 }}>{c.en}</div>
          </div>
        ))}
      </section>

      {/* Category sections */}
      {categories.map((c, i) => (
        <section key={c.id} style={{ padding: "96px 56px", borderBottom: `1px solid ${SS.rule}`, background: i % 2 === 1 ? SS.paperAlt : SS.paper }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 100 }}>
              <h2 style={{ ...ssDisplay, fontSize: 64, margin: 0, lineHeight: 1 }}>{c.th}</h2>
              <div style={{ ...ssBody, fontSize: 16, color: SS.muted, fontStyle: "italic", marginTop: 12 }}>{c.en}</div>
              <p style={{ ...ssBody, fontSize: 17, marginTop: 32, maxWidth: 460 }}>{c.blurb}</p>
              <a
                href="https://line.me/ti/p/@southsteel"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...ssEyebrow, color: SS.accent, marginTop: 32, display: "inline-block", textDecoration: "none", borderBottom: `1px solid ${SS.accent}`, paddingBottom: 4 }}
              >
                ขอใบเสนอราคา →
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              {c.items.map((it, idx) => {
                const imgId = `${c.no}-${idx + 1}`;
                return (
                  <div key={it.th} style={{ borderTop: `1px solid ${SS.ink}`, paddingTop: 20 }}>
                    <div style={{ position: "relative" }}>
                      <Placeholder
                        label={it.th.split(" / ")[1] || it.th}
                        id={imgId}
                        height={220}
                        src={productImages[imgId]}
                      />
                      {it.mok && (
                        <div style={{
                          position: "absolute", bottom: 8, right: 8,
                          background: "rgba(0,0,0,0.55)", color: "white",
                          fontFamily: SS.mono, fontSize: 10, letterSpacing: "0.05em",
                          padding: "3px 7px", borderRadius: 2,
                        }}>
                          {it.mok}
                        </div>
                      )}
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <div style={{ ...ssDisplay, fontSize: 20, fontWeight: 500 }}>{it.th}</div>
                      <div style={{ ...ssBody, fontFamily: SS.mono, fontSize: 14, color: SS.muted, marginTop: 8, letterSpacing: "0.02em" }}>{it.en}</div>
                    </div>
                    <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", borderTop: `1px dotted ${SS.rule}`, paddingTop: 12 }}>
                      <span style={{ ...ssEyebrow, color: SS.muted }}>In stock</span>
                      <span style={{ ...ssEyebrow, color: SS.accent }}>สอบถาม →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Quote band */}
      <section style={{ padding: "96px 56px", background: SS.ink, color: SS.paper }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ ...ssEyebrow, color: "#8a8067", marginBottom: 24 }}>ขอใบเสนอราคา / Request a quote</div>
            <h2 style={{ ...ssDisplay, color: SS.paper, fontSize: 64, margin: 0 }}>
              ไม่พบสิ่งที่ต้องการ?<br />
              <em style={{ fontStyle: "italic", color: SS.accent }}>ถามเราได้.</em>
            </h2>
          </div>
          <div>
            <p style={{ ...ssBody, color: "#c9c2b2", fontSize: 18 }}>
              หากสินค้าที่ต้องการไม่มีในแคตตาล็อก ทีมของเราสามารถสั่งมาเพิ่มได้ตามความต้องการ หรือแนะนำสินค้าทดแทนที่เหมาะสม
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <a
                href="https://line.me/ti/p/@southsteel"
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: "14px 22px", background: SS.line, color: "white", borderRadius: 2, fontSize: 14, fontWeight: 600, textDecoration: "none" }}
              >
                แชทผ่าน Line →
              </a>
              <a href="tel:0864884450" style={{ padding: "14px 22px", background: "transparent", color: SS.paper, border: `1px solid ${SS.paper}`, borderRadius: 2, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                086-488-4450
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
