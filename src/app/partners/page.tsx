import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";
import { IconLine, IconPhone } from "@/components/Icons";
import { LINE_URL, PHONE_MAIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "พาร์ทเนอร์ของเรา · เอส-2000 สตีล แฟบริเคท",
  description:
    "รู้จักพาร์ทเนอร์ของเหล็กใต้ บริษัท เอส-2000 สตีล แฟบริเคท จำกัด ผู้ผลิตและรับเหมางานโครงสร้างเหล็ก พร้อมบริการโกดัง–คลังสินค้าให้เช่าที่หาดใหญ่ และสำนักงานให้เช่าในกรุงเทพฯ",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "พาร์ทเนอร์ของเรา · เอส-2000 สตีล แฟบริเคท | เหล็กใต้",
    description:
      "เอส-2000 สตีล แฟบริเคท ผู้ผลิตงานโครงสร้างเหล็ก พร้อมโกดัง–คลังสินค้าให้เช่าหาดใหญ่ และสำนักงานให้เช่ากรุงเทพฯ",
    url: "/partners",
  },
};

// งานที่ เอส-2000 รับทำ
const fabWork = [
  "ผลิตและประกอบโครงสร้างเหล็กสำหรับงานก่อสร้างทุกประเภท",
  "รับเหมาก่อสร้างโรงงาน โกดัง คลังสินค้า และอาคารโครงสร้างเหล็ก",
  "งานแปรรูปโลหะ ตัด พับ เชื่อม ขัด ทั้งเหล็ก สแตนเลส และอลูมิเนียม",
  "งานโลหะเชิงอุตสาหกรรมและงานสั่งทำตามแบบ (Fabrication)",
  "ควบคุมงานและประเมินราคาโดยทีมวิศวกรของบริษัท",
];

// โกดัง/คลังสินค้าให้เช่า 2 ทำเลที่หาดใหญ่
const warehouses = [
  {
    name: "โกดังสำเร็จรูป — ทำเลสายเอเชีย",
    tag: "พร้อมเช่า เข้าใช้งานได้ทันที",
    img: undefined as string | undefined,
    imgLabel: "โกดังสายเอเชีย",
    size: "200 – 1,400 ตร.ม.",
    price: "เริ่มต้น 90 บาท/ตร.ม./เดือน",
    points: [
      "โกดังสร้างเสร็จแล้ว พร้อมเข้าใช้งานทันที ไม่ต้องรอสร้าง",
      "ติดถนนสายเอเชีย ใกล้แยกคลองหวะ รถบรรทุก/รถใหญ่เข้าออกสะดวก",
      "เลือกขนาดพื้นที่ได้ตามการใช้งาน",
    ],
    maps: "https://maps.app.goo.gl/YMzezL7aT3befb6j6",
  },
  {
    name: "โกดังสั่งสร้าง (Built-to-Suit) — บ้านพรุ-บ้านไร่",
    tag: "ออกแบบตามธุรกิจของคุณ",
    img: undefined as string | undefined,
    imgLabel: "โกดังบ้านพรุ-บ้านไร่",
    size: "1,000 – 32,000 ตร.ม.",
    price: "อ้างอิงตลาด ~100 – 150 บาท/ตร.ม./เดือน",
    points: [
      "สร้างโกดังตามแบบและขนาดที่ธุรกิจต้องการบนที่ดินของ เอส-2000",
      "ติดถนนกาญจนวนิช หน้าแปลงกว้าง 140 เมตร เห็นชัดจากถนนใหญ่",
      "ขับรถ 3 นาทีถึงวงแหวนหาดใหญ่ เชื่อมด่านสะเดา สนามบิน และ ทล.43 โดยไม่ต้องเข้าเมือง",
      "เหมาะกับโลจิสติกส์ คลังกระจายสินค้าชายแดน และโรงงานเบา",
    ],
    maps: "https://maps.app.goo.gl/mL7CAowVKx3qvApF7",
  },
];

export default function PartnersPage() {
  return (
    <main>
      <PageHeader
        title="พาร์ทเนอร์ของเรา"
        desc="เหล็กใต้ทำงานร่วมกับ บริษัท เอส-2000 สตีล แฟบริเคท จำกัด ผู้เชี่ยวชาญงานผลิตและรับเหมาโครงสร้างเหล็ก ทำให้เราดูแลลูกค้าได้ครบตั้งแต่วัสดุเหล็ก งานแปรรูป ไปจนถึงงานก่อสร้างและพื้นที่เช่า"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "พาร์ทเนอร์ของเรา" }]}
      />

      {/* S-2000 overview */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <span className="eyebrow">พาร์ทเนอร์หลัก</span>
              <h2>บริษัท เอส-2000 สตีล แฟบริเคท จำกัด</h2>
              <p style={{ fontSize: 17, lineHeight: 1.85, marginTop: 12 }}>
                เอส-2000 สตีล แฟบริเคท (S-2000 Steel Fabricate) เป็นผู้ผลิตและประกอบผลิตภัณฑ์
                โครงสร้างเหล็กสำหรับงานก่อสร้าง จดทะเบียนที่จังหวัดสงขลา ด้วยประสบการณ์งานโลหะ
                เชิงอุตสาหกรรมที่สั่งสมมายาวนาน ทีมช่างและวิศวกรของ เอส-2000 รับงานตั้งแต่ชิ้นงาน
                แปรรูปโลหะไปจนถึงการรับเหมาก่อสร้างโรงงานและโกดังทั้งหลัง
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85 }}>
                การทำงานร่วมกับเหล็กใต้ทำให้ลูกค้าได้ครบในที่เดียว — เลือกเหล็กคุณภาพจากเหล็กใต้
                แล้วต่อยอดสู่งานแปรรูปและงานก่อสร้างโครงสร้างเหล็กกับ เอส-2000 ได้ทันที
              </p>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image
                  src="/images/laser-welding.jpg"
                  alt="งานผลิตและประกอบโครงสร้างเหล็กของ บริษัท เอส-2000 สตีล แฟบริเคท จำกัด"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <h3 style={{ fontSize: 22, marginBottom: 16 }}>งานที่ เอส-2000 รับทำ</h3>
            <ul className="check-list" style={{ maxWidth: 760 }}>
              {fabWork.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Warehouse rental */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">บริการโดย เอส-2000</span>
            <h2>โกดัง–คลังสินค้าให้เช่า หาดใหญ่ 2 ทำเล</h2>
            <p>
              เอส-2000 เป็นผู้รับเหมาก่อสร้างโครงสร้างเหล็กเอง จึงปรับแบบโกดังได้ตามความต้องการ
              และควบคุมคุณภาพได้ทุกขั้นตอน ทั้ง 2 ทำเลอยู่ในจุดที่ <strong>น้ำไม่ท่วม</strong>{" "}
              แม้ในช่วงน้ำท่วมใหญ่เดือนพฤศจิกายน 2568
            </p>
          </div>

          <div className="grid-2">
            {warehouses.map((w) => (
              <div key={w.name} className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--paper-alt)" }}>
                  <Placeholder label={w.imgLabel} src={w.img} alt={w.name} />
                  <span className="badge-mok" style={{ background: "var(--amber)" }}>
                    {w.tag}
                  </span>
                </div>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: 20 }}>{w.name}</h3>
                  <div className="table-scroll" style={{ margin: "16px 0" }}>
                    <table className="spec-table">
                      <tbody>
                        <tr>
                          <td>พื้นที่</td>
                          <td>{w.size}</td>
                        </tr>
                        <tr>
                          <td>ค่าเช่า</td>
                          <td>{w.price}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <ul className="check-list">
                    {w.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <a
                    href={w.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-more map-link"
                    style={{ marginTop: 16 }}
                  >
                    ดูทำเลใน Google Maps →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 24, marginTop: 24, borderLeft: "4px solid var(--amber)" }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>เหมาะกับธุรกิจแบบไหน</h3>
            <p style={{ fontSize: 15, color: "var(--gray)", margin: 0 }}>
              คลังสินค้า โกดังกระจายสินค้า โลจิสติกส์ และโรงงานเบา โดยเฉพาะสายส่งสินค้า
              ชายแดนหาดใหญ่–สะเดา สอบถามขนาดที่ว่าง ราคา และนัดชมพื้นที่จริงได้ทุกวัน
            </p>
          </div>
        </div>
      </section>

      {/* Bangkok office rental */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">บริการโดย เอส-2000</span>
            <h2>สำนักงานให้เช่า ในกรุงเทพฯ</h2>
            <p>
              นอกจากพื้นที่คลังสินค้าที่หาดใหญ่ เอส-2000 ยังมีพื้นที่สำนักงานให้เช่าในกรุงเทพฯ
              เหมาะสำหรับบริษัทที่ต้องการที่ตั้งสำนักงานในเมืองหลวง
            </p>
          </div>
          <div className="card" style={{ padding: 32, borderLeft: "4px solid var(--navy)" }}>
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>สนใจเช่าพื้นที่สำนักงาน?</h3>
            <p style={{ fontSize: 16, color: "var(--gray)", marginBottom: 20 }}>
              สอบถามทำเล ขนาดพื้นที่ ราคาค่าเช่า และรายละเอียดเพิ่มเติมได้โดยตรง
              ทีมงานยินดีให้ข้อมูลและนัดชมพื้นที่
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--primary">
                <IconPhone size={16} />
                โทร <span className="num">{PHONE_MAIN.display}</span>
              </a>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--line">
                <IconLine size={16} />
                สอบถามผ่าน Line
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA title="สนใจงานโครงสร้างเหล็ก หรือพื้นที่ให้เช่า?" subtitle="ติดต่อทีมงานเหล็กใต้ เพื่อประสานงานกับ เอส-2000 ได้เลย" />
    </main>
  );
}
