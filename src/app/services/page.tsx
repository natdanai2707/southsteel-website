import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { IconLaser, IconBend, IconWeld, IconTruck, IconLine, IconPhone } from "@/components/Icons";
import { LINE_URL, PHONE_LASER, PHONE_BENDING } from "@/lib/site";

export const metadata: Metadata = {
  title: "บริการตัดเลเซอร์ CNC พับเหล็ก เชื่อม จัดส่ง",
  description:
    "บริการตัดเลเซอร์หาดใหญ่ด้วยไฟเบอร์เลเซอร์ 6,000W พับเหล็ก–สแตนเลสด้วย CNC Press Brake งานเชื่อม TIG/MIG/เลเซอร์ พร้อมจัดส่งถึงไซต์งานทั่วไทย",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "บริการตัดเลเซอร์ CNC พับเหล็ก เชื่อม | เหล็กใต้ หาดใหญ่",
    description: "ตัดเลเซอร์ 6,000W แม่นยำ ±0.1 มม. พับเหล็กยาว 3 เมตร งานเชื่อมครบวงจร ที่หาดใหญ่",
    url: "/services",
  },
};

interface ServiceEntry {
  id: string;
  icon: typeof IconLaser;
  featured?: boolean;
  title: string;
  en: string;
  lead: string;
  specs: [string, string][];
  img: string;
  imgAlt: string;
  img2?: string;
  img2Alt?: string;
  gallery?: { src: string; alt: string }[];
  href: string;
  phone?: { display: string; tel: string };
}

const services: ServiceEntry[] = [
  {
    id: "laser",
    icon: IconLaser,
    featured: true,
    title: "ตัดเลเซอร์ CNC",
    en: "Fiber Laser Cutting",
    lead: "หัวใจของเหล็กใต้ยุคใหม่ — เครื่องไฟเบอร์เลเซอร์กำลัง 6,000 วัตต์ ความแม่นยำ ±0.1 มม. ตัดเหล็กแผ่นหนาถึง 25 มม. สแตนเลส 10 มม. รองรับงานฉลุลาย ชิ้นส่วนเครื่องจักร และตัดตามแบบทุกรูปทรง ส่งไฟล์ DXF/DWG/PDF มาประเมินราคาได้ทันที",
    specs: [
      ["กำลังเลเซอร์", "6,000W ไฟเบอร์"],
      ["ความแม่นยำ", "±0.1 มม."],
      ["ความหนาสูงสุด", "เหล็ก 25 มม. · สแตนเลส 10 มม."],
      ["ขนาดโต๊ะ", "1,500 × 3,000 มม."],
    ],
    img: "/images/laser-cutting.jpg",
    imgAlt: "เครื่องตัดเลเซอร์ไฟเบอร์ CNC กำลัง 6000 วัตต์ ของร้านเหล็กใต้ หาดใหญ่",
    gallery: [
      { src: "/images/laser-ex1.jpg", alt: "ตัวอย่างงานตัดเลเซอร์ลายฉลุบนเหล็กแผ่น" },
      { src: "/images/laser-ex2.jpg", alt: "ชิ้นส่วนเหล็กตัดเลเซอร์ตามแบบ" },
      { src: "/images/laser-ex3.jpg", alt: "งานตัดเลเซอร์สแตนเลสความละเอียดสูง" },
      { src: "/images/laser-ex4.jpg", alt: "แผ่นเหล็กฉลุลายด้วยเลเซอร์ CNC" },
      { src: "/images/laser-ex5.jpg", alt: "งานตัดเลเซอร์ป้ายและโลโก้เหล็ก" },
      { src: "/images/laser-ex6.jpg", alt: "ชิ้นงานเหล็กหนาตัดด้วยเลเซอร์ขอบเรียบ" },
    ],
    href: "/products/laser-cutting",
    phone: PHONE_LASER,
  },
  {
    id: "bending",
    icon: IconBend,
    title: "พับเหล็ก / พับสแตนเลส / พับรางน้ำ",
    en: "CNC Press Brake",
    lead: "พับขึ้นรูปเหล็กและสแตนเลสตามแบบด้วยเครื่อง CNC Press Brake แรงกด 160 ตัน พับยาวสุด 3 เมตร มุมแม่นยำ ±0.5° รับงานฝาข้างรถบรรทุก รางน้ำขนาดพิเศษ ตู้เหล็ก และชิ้นงานพับทุกประเภท โดยช่างประสบการณ์กว่า 20 ปี",
    specs: [
      ["แรงกด", "160 ตัน"],
      ["ความยาวพับ", "สูงสุด 3,000 มม."],
      ["ความหนา", "สูงสุด 12 มม."],
      ["ความแม่นยำมุม", "±0.5°"],
    ],
    img: "/images/bending.jpg",
    imgAlt: "เครื่องพับเหล็ก CNC Press Brake กำลังพับแผ่นเหล็กที่ร้านเหล็กใต้ หาดใหญ่",
    img2: "/images/bending2.jpg",
    img2Alt: "งานพับเหล็กแผ่นขึ้นรูปตามแบบด้วย Press Brake",
    href: "/products/press-brake",
    phone: PHONE_BENDING,
  },
  {
    id: "welding",
    icon: IconWeld,
    title: "งานเชื่อม",
    en: "TIG / MIG / Laser Welding",
    lead: "งานเชื่อมครบทุกรูปแบบ ทั้ง TIG สำหรับงานประณีต MIG สำหรับงานโครงสร้าง และเชื่อมเลเซอร์สำหรับสแตนเลสและเหล็กบาง รอยเชื่อมสะอาดเรียบสวยแทบไม่ต้องเจียรแต่ง ความร้อนเข้าชิ้นงานน้อย ชิ้นงานไม่บิดงอ",
    specs: [
      ["ประเภท", "TIG · MIG · เลเซอร์"],
      ["ความหนา", "0.5 – 12 มม."],
      ["วัสดุ", "เหล็ก · สแตนเลส · อลูมิเนียม"],
      ["จุดเด่น", "รอยเชื่อมสะอาด ไม่ต้องเจียร"],
    ],
    img: "/images/laser-welding.jpg",
    imgAlt: "งานเชื่อมเลเซอร์สแตนเลสรอยเชื่อมเรียบสวย ที่ร้านเหล็กใต้ หาดใหญ่",
    href: "/contact",
  },
  {
    id: "delivery",
    icon: IconTruck,
    title: "จัดส่งถึงไซต์งาน",
    en: "Delivery & Logistics",
    lead: "รถบรรทุก 4 ล้อ 6 ล้อ และ 10 ล้อ ประจำพร้อมส่งทุกวัน ส่งฟรีในพื้นที่หาดใหญ่และใกล้เคียง จัดส่งด่วนภายใน 24 ชั่วโมง ครอบคลุมสงขลา ภาคใต้ และทั่วประเทศ พร้อมทีมยกของหน้างาน",
    specs: [
      ["พื้นที่ส่งฟรี", "หาดใหญ่และใกล้เคียง"],
      ["รถบรรทุก", "4 ล้อ · 6 ล้อ · 10 ล้อ"],
      ["ระยะเวลา", "ด่วนภายใน 24 ชม."],
      ["ครอบคลุม", "ทั่วประเทศ"],
    ],
    img: "/images/delivery/delivery-01.jpg",
    imgAlt: "รถบรรทุกจัดส่งเหล็กของร้านเหล็กใต้ ส่งถึงไซต์งานทั่วภาคใต้",
    href: "/contact",
  },
];

const workflow = [
  ["1", "ส่งแบบ / รายการ", "ทางไลน์ @southsteel ไฟล์ DWG · DXF · PDF หรือภาพร่าง"],
  ["2", "รับใบเสนอราคา", "ทีมงานประเมินและตอบกลับภายใน 24 ชั่วโมง"],
  ["3", "ผลิต / เตรียมของ", "ตัด พับ เชื่อม ตามแบบ พร้อมตรวจสอบคุณภาพ"],
  ["4", "จัดส่งถึงไซต์งาน", "รถบรรทุกส่งถึงหน้างาน หรือรับเองได้ที่สาขา"],
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="บริการตัดเลเซอร์ พับ เชื่อม ครบวงจรที่หาดใหญ่"
        desc="สั่งเหล็กพร้อมแปรรูปจบในที่เดียว — ตัดเลเซอร์ CNC ความแม่นยำระดับอุตสาหกรรม พับขึ้นรูปตามแบบ งานเชื่อมคุณภาพ และจัดส่งถึงไซต์งานทั่วประเทศ"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "บริการ" }]}
      />

      {/* Workflow */}
      <section className="section--tight section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <span className="eyebrow">ขั้นตอนการใช้บริการ</span>
            <h2 style={{ fontSize: 28 }}>สั่งงานง่าย ใน 4 ขั้นตอน</h2>
          </div>
          <div className="grid-4">
            {workflow.map(([n, title, desc]) => (
              <div key={n} className="card" style={{ padding: 24 }}>
                <div
                  className="num"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--amber)",
                    color: "var(--navy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 16,
                  }}
                >
                  {n}
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "var(--gray)", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services detail */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section${i % 2 === 0 ? " section--alt" : ""}`}>
          <div className="container">
            <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div className="service-icon" style={{ marginBottom: 16 }}>
                  <s.icon size={30} />
                </div>
                {s.featured && <span className="badge-featured">บริการเด่นของเหล็กใต้</span>}
                <h2 style={{ fontSize: 30 }}>{s.title}</h2>
                <p style={{ color: "var(--gray)", fontSize: 14, margin: "4px 0 16px", letterSpacing: "0.04em" }}>
                  {s.en}
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.8 }}>{s.lead}</p>
                <div className="table-scroll" style={{ margin: "24px 0" }}>
                  <table className="spec-table">
                    <tbody>
                      {s.specs.map(([k, v]) => (
                        <tr key={k}>
                          <td>{k}</td>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--line">
                    <IconLine size={16} />
                    ส่งแบบประเมินราคา
                  </a>
                  {s.phone && (
                    <a href={`tel:${s.phone.tel}`} className="btn btn--outline-dark">
                      <IconPhone size={16} />
                      สายตรง <span className="num">{s.phone.display}</span>
                    </a>
                  )}
                  <Link href={s.href} className="btn btn--navy">
                    ดูรายละเอียด →
                  </Link>
                </div>
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div className="card" style={{ overflow: "hidden" }}>
                  <div style={{ position: "relative", aspectRatio: "16/10" }}>
                    <Image
                      src={s.img}
                      alt={s.imgAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                {s.gallery && (
                  <div className="grid-3" style={{ marginTop: 16, gap: 16 }}>
                    {s.gallery.map((g) => (
                      <div key={g.src} className="card" style={{ overflow: "hidden" }}>
                        <div style={{ position: "relative", aspectRatio: "4/3" }}>
                          <Image
                            src={g.src}
                            alt={g.alt}
                            fill
                            sizes="(max-width: 767px) 33vw, 16vw"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {s.img2 && (
                  <div className="card" style={{ overflow: "hidden", marginTop: 16 }}>
                    <div style={{ position: "relative", aspectRatio: "16/9" }}>
                      <Image
                        src={s.img2}
                        alt={s.img2Alt || s.imgAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTA title="ส่งแบบมาประเมินราคาได้เลยวันนี้" />
    </main>
  );
}
