import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { IconLaser, IconBend, IconWeld, IconTruck, IconPhone } from "@/components/Icons";
import { PRODUCTS } from "@/lib/products";
import { ARTICLES } from "@/lib/blog";
import {
  SITE_URL,
  COMPANY_TH,
  COMPANY_EN,
  BRANCHES,
  LINE_URL,
  FACEBOOK_URL,
  PHONE_MAIN,
  OPENING_HOURS_SCHEMA,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "ร้านเหล็กหาดใหญ่ เหล็กรูปพรรณ ตัดเลเซอร์ CNC | เหล็กใต้ 38 ปี",
  },
  description:
    "เหล็กใต้ ร้านเหล็กหาดใหญ่ 38 ปี จำหน่ายเหล็กรูปพรรณ เหล็กกล่อง เหล็กฉาก เหล็กเส้น เหล็กแผ่น มอก. บริการตัดเลเซอร์ CNC พับเหล็ก ราคาส่ง 2 สาขา ส่งทั่วไทย",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ร้านเหล็กหาดใหญ่ เหล็กรูปพรรณ ตัดเลเซอร์ CNC | เหล็กใต้ 38 ปี",
    description:
      "จำหน่ายเหล็กครบวงจร มาตรฐาน มอก. บริการตัดเลเซอร์ CNC พับเหล็ก ราคาส่ง 2 สาขาในหาดใหญ่ ส่งทั่วไทย",
    url: "/",
  },
};

const FEATURED_SLUGS = [
  "h-beam",
  "square-tube",
  "rebar",
  "c-channel",
  "angle",
  "steel-plate",
  "stainless-304",
  "laser-cutting",
];

const services = [
  {
    icon: IconLaser,
    title: "ตัดเลเซอร์ CNC",
    desc: "ไฟเบอร์เลเซอร์ 6,000W แม่นยำ ±0.1 มม. ตัดเหล็กหนาถึง 25 มม. ส่งไฟล์ DXF/DWG ตัดได้เลย",
    href: "/products/laser-cutting",
    featured: true,
  },
  {
    icon: IconBend,
    title: "พับเหล็ก Press Brake",
    desc: "เครื่องพับ CNC 160 ตัน ยาวสุด 3 เมตร รับพับรางน้ำ ตู้เหล็ก ฝาข้างรถบรรทุก งานสแตนเลส",
    href: "/products/press-brake",
  },
  {
    icon: IconWeld,
    title: "งานเชื่อม",
    desc: "เชื่อม TIG, MIG และเชื่อมเลเซอร์ รอยเชื่อมสะอาด รองรับทั้งงานเหล็กบางและงานหนา",
    href: "/services",
  },
  {
    icon: IconTruck,
    title: "จัดส่งถึงไซต์งาน",
    desc: "รถบรรทุกประจำพร้อมส่งทั่วหาดใหญ่ สงขลา และทั่วประเทศ ส่งด่วนภายใน 24 ชั่วโมง",
    href: "/services",
  },
];

const timeline = [
  { yr: "2487", title: 'ก่อตั้งร้าน "กวงหลี"', sub: "จุดเริ่มต้นของครอบครัว ที่สุราษฎร์ธานี" },
  { yr: "2531", title: "ก่อตั้ง บริษัท เหล็กใต้ จำกัด", sub: "เปิดสาขาแรกที่หาดใหญ่ สงขลา" },
  { yr: "2555", title: "ขยายสาขาคลองหวะ", sub: "รองรับลูกค้าโซนคอหงส์และสนามบิน" },
  { yr: "2569", title: "ร้านเหล็กคู่เมืองหาดใหญ่", sub: "ครบ 38 ปี พร้อมบริการ Laser CNC ครบวงจร" },
];

// LocalBusiness schema — แยกเป็น 2 สาขา ใต้ @graph เดียวกัน
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": BRANCHES.map((b, i) => ({
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#branch-${b.id}`,
    name: i === 0 ? COMPANY_TH : `${COMPANY_TH} (${b.name})`,
    alternateName: COMPANY_EN,
    description:
      "ร้านเหล็กหาดใหญ่ เปิดมากว่า 38 ปี จำหน่ายเหล็กรูปพรรณ เหล็กเส้น เหล็กแผ่น สแตนเลส มาตรฐาน มอก. พร้อมบริการตัดเลเซอร์ CNC ตัด–พับเหล็ก และจัดส่งทั่วประเทศ",
    url: SITE_URL,
    image: `${SITE_URL}/images/og-image.jpg`,
    telephone: b.phones.map((p) => p.num),
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: b.addressRegion,
      postalCode: b.postalCode,
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: b.geo.lat,
      longitude: b.geo.lng,
    },
    openingHours: OPENING_HOURS_SCHEMA,
    priceRange: "฿฿",
    hasMap: b.mapsUrl,
    sameAs: [FACEBOOK_URL, LINE_URL],
  })),
};

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <main>
      <JsonLd data={localBusinessSchema} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <HeroSlider />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">บริษัท เหล็กใต้ จำกัด · หาดใหญ่ สงขลา</span>
          <h1 className="hero-title">
            ร้านเหล็กหาดใหญ่ <em>ครบวงจร</em>
            <br />
            เหล็กรูปพรรณ มอก. + ตัดเลเซอร์ CNC
          </h1>
          <p className="hero-sub">
            จำหน่ายเหล็กทุกชนิด ปลีก–ส่ง ราคาโรงงาน พร้อมบริการตัดเลเซอร์ พับเหล็ก
            และจัดส่งถึงไซต์งานทั่วประเทศ ดูแลโดยทีมงานประสบการณ์กว่า 38 ปี
          </p>
          <div className="hero-ctas">
            <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--primary btn--lg">
              <IconPhone size={18} />
              โทรหาเรา
            </a>
            <Link href="/products" className="btn btn--outline-light btn--lg">
              ดูสินค้า
            </Link>
          </div>
        </div>
      </section>

      {/* แถบจุดเด่นใต้แบนเนอร์ */}
      <section className="usp-band" aria-label="จุดเด่นของเหล็กใต้">
        <div className="usp-band-inner">
          {[
            ["38 ปี", "ประสบการณ์ค้าเหล็ก"],
            ["2 สาขา", "ในหาดใหญ่ สงขลา"],
            ["Laser CNC", "ตัดแม่นยำ ±0.1 มม."],
            ["ส่งทั่วไทย", "ถึงไซต์งานใน 24 ชม."],
          ].map(([n, d]) => (
            <div key={n} className="stat-badge">
              <strong>{n}</strong>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">สินค้าของเรา</span>
            <h2>เหล็กรูปพรรณครบทุกประเภท มาตรฐาน มอก.</h2>
            <p>
              เหล็กโครงสร้าง เหล็กกล่อง เหล็กเส้น เหล็กแผ่น สแตนเลส และวัสดุงานเหล็กครบวงจร
              สต็อกจริงพร้อมส่งที่หาดใหญ่
            </p>
          </div>
          <div className="grid-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/products" className="btn btn--outline-dark">
              ดูสินค้าทั้งหมด 13 รายการ →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">บริการของเรา</span>
            <h2>มากกว่าร้านขายเหล็ก — ตัด พับ เชื่อม ส่ง จบในที่เดียว</h2>
            <p>
              จุดต่างของเหล็กใต้คือเครื่องตัดเลเซอร์ไฟเบอร์ CNC ระดับโรงงานอุตสาหกรรม
              เจ้าแรก ๆ ในหาดใหญ่ ให้คุณสั่งเหล็กพร้อมแปรรูปเสร็จในร้านเดียว
            </p>
          </div>
          <div className="grid-2">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`service-item${s.featured ? " service-item--featured" : ""}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="service-icon">
                  <s.icon size={30} />
                </div>
                <div>
                  {s.featured && <span className="badge-featured">บริการเด่น</span>}
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: "start" }}>
            <div>
              <span className="eyebrow">เรื่องราวของเรา</span>
              <h2>จากรุ่นสู่รุ่น กว่า 38 ปีในหาดใหญ่</h2>
              <p style={{ color: "var(--gray)", fontSize: 17, marginTop: 16 }}>
                เริ่มต้นจากร้าน &ldquo;กวงหลี&rdquo; ที่สุราษฎร์ธานีตั้งแต่ พ.ศ. 2487
                สู่ บริษัท เหล็กใต้ จำกัด ที่หาดใหญ่ในปี 2531 วันนี้เราส่งต่อความไว้วางใจ
                สู่รุ่นที่สาม พร้อมยกระดับบริการด้วยเทคโนโลยี Laser CNC
                เพื่อเป็นร้านเหล็กคู่เมืองหาดใหญ่ที่ช่างและผู้รับเหมาไว้ใจที่สุด
              </p>
              <Link href="/about" className="link-more">
                อ่านเรื่องราวของเหล็กใต้ →
              </Link>
            </div>
            <ul className="timeline">
              {timeline.map((t) => (
                <li key={t.yr}>
                  <div className="num">พ.ศ. {t.yr}</div>
                  <strong>{t.title}</strong>
                  <span>{t.sub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">สาขาของเรา</span>
            <h2>2 สาขาในหาดใหญ่ พร้อมให้บริการ</h2>
          </div>
          <div className="grid-2">
            {BRANCHES.map((b) => (
              <div key={b.id} className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "16/8" }}>
                  <Image
                    src={b.img}
                    alt={`${b.name} ${COMPANY_TH} ${b.addr}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
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
                      <a key={p.tel} href={`tel:${p.tel}`} className="btn btn--outline-dark" style={{ padding: "8px 16px", fontSize: 14 }}>
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

      {/* BLOG TEASER */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ความรู้เรื่องเหล็ก</span>
            <h2>บทความจากทีมงานเหล็กใต้</h2>
          </div>
          <div className="grid-3">
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="product-card blog-card">
                <div className="product-card-img">
                  <Image
                    src={a.cover}
                    alt={a.coverAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="product-card-body">
                  <time dateTime={a.date}>
                    {new Date(a.date).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <h3 style={{ fontSize: 18, margin: "6px 0" }}>{a.title}</h3>
                  <span className="link-more">อ่านต่อ →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
