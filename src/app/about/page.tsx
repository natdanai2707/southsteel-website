import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา ร้านเหล็กหาดใหญ่ 38 ปี",
  description:
    "รู้จักเหล็กใต้ ร้านเหล็กหาดใหญ่ที่เริ่มต้นตั้งแต่ พ.ศ. 2487 สู่ศูนย์จำหน่ายเหล็กครบวงจร 2 สาขา พร้อมบริการตัดเลเซอร์ CNC ส่งต่อความไว้วางใจถึงรุ่นที่สาม",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "เกี่ยวกับเรา | เหล็กใต้ ร้านเหล็กหาดใหญ่ 38 ปี",
    description: "จากร้านกวงหลีปี 2487 สู่ศูนย์จำหน่ายเหล็กครบวงจรที่หาดใหญ่ ส่งต่อความไว้วางใจถึงรุ่นที่สาม",
    url: "/about",
  },
};

const timeline = [
  {
    yr: "พ.ศ. 2487",
    title: 'ก่อตั้งร้าน "กวงหลี" ที่สุราษฎร์ธานี',
    desc: "จุดเริ่มต้นของครอบครัวในธุรกิจค้าเหล็กและวัสดุก่อสร้าง",
  },
  {
    yr: "พ.ศ. 2531",
    title: "ก่อตั้ง บริษัท เหล็กใต้ จำกัด",
    desc: "เปิดสาขาแรกที่ถนนราษฎร์ยินดี (สามสิบเมตร) หาดใหญ่ สงขลา",
  },
  {
    yr: "พ.ศ. 2555",
    title: "ขยายสาขาคลองหวะ",
    desc: "เพิ่มสาขาที่ถนนกาญจนวนิช คอหงส์ รองรับลูกค้าฝั่งสนามบินและสะเดา",
  },
  {
    yr: "พ.ศ. 2569",
    title: "ร้านเหล็กคู่เมืองหาดใหญ่ ครบ 38 ปี",
    desc: "ยกระดับบริการด้วยเครื่องตัดเลเซอร์ไฟเบอร์ CNC และเครื่องพับ CNC ครบวงจร",
  },
];

const values = [
  {
    title: "เหล็กคุณภาพ",
    desc: "เหล็กทุกชิ้นผ่านมาตรฐาน มอก. คัดจากโรงงานที่ทำงานร่วมกันมายาวนาน ไม่มีเหล็กเบาปนในสต็อก พร้อมใบรับรองคุณภาพสำหรับงานที่ต้องการเอกสาร",
  },
  {
    title: "ราคาโปร่งใส",
    desc: "ราคาส่งตรงจากโรงงาน แจ้งราคาตามจริง ไม่มีค่าใช้จ่ายแอบแฝง ตอบใบเสนอราคาภายใน 24 ชั่วโมงทุกช่องทาง",
  },
  {
    title: "บริการที่ไว้ใจได้",
    desc: "ทีมช่างชำนาญการกว่า 20 ปี รถส่งของประจำ และบริการหลังการขายที่โทรหาแล้วมีคนรับสายจริง",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="ร้านเหล็กหาดใหญ่ 38 ปี จากรุ่นสู่รุ่น"
        desc="จากร้านเล็ก ๆ ที่สุราษฎร์ธานีในปี พ.ศ. 2487 สู่ศูนย์จำหน่ายเหล็กครบวงจร 2 สาขาที่หาดใหญ่ วันนี้เรากำลังส่งต่อความไว้วางใจสู่รุ่นที่สาม"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "เกี่ยวกับเรา" }]}
      />

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <span className="eyebrow">เรื่องราวของเรา</span>
              <h2>เหล็กใต้ คือใคร</h2>
              <p style={{ fontSize: 17, lineHeight: 1.85, marginTop: 16 }}>
                บริษัท เหล็กใต้ จำกัด (South Steel Co., Ltd.) คือร้านเหล็กเก่าแก่คู่เมืองหาดใหญ่
                ก่อตั้งเมื่อปี พ.ศ. 2531 โดยครอบครัวที่อยู่ในธุรกิจค้าเหล็กมาตั้งแต่ปี พ.ศ. 2487
                เราจำหน่ายเหล็กรูปพรรณ เหล็กเส้น เหล็กแผ่น สแตนเลส และวัสดุงานเหล็กครบวงจร
                ทั้งปลีกและส่ง ให้กับช่าง ผู้รับเหมา โรงงาน และเจ้าของบ้านทั่วภาคใต้
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85 }}>
                ทุกวันนี้เหล็กใต้บริหารโดยทายาทรุ่นที่สาม พร้อมการลงทุนในเครื่องตัดเลเซอร์ไฟเบอร์
                CNC และเครื่องพับ CNC เพื่อให้ลูกค้าสั่งเหล็กพร้อมแปรรูปตามแบบได้จบในที่เดียว
                ซึ่งเป็นบริการที่หาได้ยากในภาคใต้
              </p>
            </div>
            <div className="card" style={{ overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image
                  src="/images/store-interior.jpg"
                  alt="ภายในร้านเหล็กใต้ สต็อกเหล็กรูปพรรณครบทุกประเภท หาดใหญ่"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">เส้นทางของเรา</span>
            <h2>กว่า 80 ปีของครอบครัวค้าเหล็ก</h2>
          </div>
          <ul className="timeline" style={{ maxWidth: 640 }}>
            {timeline.map((t) => (
              <li key={t.yr}>
                <div className="num">{t.yr}</div>
                <strong>{t.title}</strong>
                <span>{t.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">สิ่งที่เรายึดถือ</span>
            <h2>ทำไมช่างและผู้รับเหมาเลือกเหล็กใต้</h2>
          </div>
          <div className="grid-3">
            {values.map((v, i) => (
              <div key={v.title} className="card" style={{ padding: 32 }}>
                <div
                  className="num"
                  style={{ fontSize: 40, fontWeight: 700, color: "var(--amber)", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: 22, margin: "16px 0 8px" }}>{v.title}</h3>
                <p style={{ fontSize: 15, color: "var(--gray)", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section--tight section section--navy">
        <div className="container">
          <div className="grid-4">
            {[
              ["38", "ปีในหาดใหญ่"],
              ["3", "รุ่นของครอบครัว"],
              ["2", "สาขาพร้อมบริการ"],
              ["6,000W", "เลเซอร์ไฟเบอร์ CNC"],
            ].map(([n, d]) => (
              <div key={d} style={{ textAlign: "center" }}>
                <div className="num" style={{ fontSize: 44, fontWeight: 700, color: "#FFC53D" }}>{n}</div>
                <div style={{ color: "rgba(255,255,255,0.8)", marginTop: 4 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="section--tight section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 24, marginBottom: 16 }}>สินค้าและบริการยอดนิยม</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="btn btn--outline-dark"
                style={{ padding: "8px 16px", fontSize: 14 }}
              >
                {p.nameTh}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
