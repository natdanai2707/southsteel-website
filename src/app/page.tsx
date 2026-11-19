import { YEARS_IN_BUSINESS } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import Tw from "@/components/ThaiText";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { IconPhone } from "@/components/Icons";
import { PRODUCTS } from "@/lib/products";
import { ARTICLES } from "@/lib/blog";
import { FAQS, stripTags } from "@/lib/faq";
import {
  SITE_URL,
  COMPANY_TH,
  COMPANY_EN,
  BRANCHES,
  LINE_URL,
  FACEBOOK_URL,
  EMAIL,
  PHONE_MAIN,
  OPENING_HOURS_SCHEMA,
  TOTAL_REVIEWS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "ร้านเหล็กหาดใหญ่ ราคาส่ง มีสต็อกพร้อมส่ง ตัดเลเซอร์ | เหล็กใต้ 2 สาขา",
  },
  description:
    `ร้านเหล็กหาดใหญ่ เปิด จ.–ส. 8:00–17:00 เหล็กกล่อง เหล็กฉาก เอชบีม เหล็กเส้น สแตนเลส มอก. ราคาส่ง มีสต็อกจริง ส่งถึงไซต์งาน รับตัดเลเซอร์และพับตามแบบ ขอราคาทางไลน์ @southsteel ตอบใน 24 ชม. ร้านเหล็กคู่หาดใหญ่ ${YEARS_IN_BUSINESS} ปี`,
  alternates: { canonical: "/" },
  openGraph: {
    title: "ร้านเหล็กหาดใหญ่ ราคาส่ง มีสต็อกพร้อมส่ง ตัดเลเซอร์ | เหล็กใต้ 2 สาขา",
    description:
      "เหล็กกล่อง เหล็กฉาก เอชบีม เหล็กเส้น สแตนเลส มอก. ราคาส่ง มีสต็อกจริง ส่งถึงไซต์งาน รับตัดเลเซอร์และพับตามแบบ 2 สาขาในหาดใหญ่",
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
    img: "/images/laser-cutting.webp",
    title: "ตัดเลเซอร์ CNC",
    desc: "ไฟเบอร์เลเซอร์ 6,000W แม่นยำ ±0.1 มม. ตัดเหล็กหนาถึง 25 มม. ส่งไฟล์ DXF/DWG ตัดได้เลย",
    href: "/products/laser-cutting",
    featured: true,
  },
  {
    img: "/images/bending2.webp",
    title: "พับเหล็ก Press Brake",
    desc: "เครื่องพับ CNC 160 ตัน ยาวสุด 3 เมตร รับพับรางน้ำ ตู้เหล็ก ฝาข้างรถบรรทุก งานสแตนเลส",
    href: "/products/press-brake",
  },
  {
    img: "/images/laser-welding.webp",
    title: "งานเชื่อม",
    desc: "เชื่อม TIG, MIG และเชื่อมเลเซอร์ รอยเชื่อมสะอาด รองรับทั้งงานเหล็กบางและงานหนา",
    href: "/services",
  },
  {
    img: "/images/delivery/delivery-01.webp",
    title: "จัดส่งถึงไซต์งาน",
    desc: "รถบรรทุกประจำพร้อมส่งทั่วหาดใหญ่ สงขลา และทั่วประเทศ จัดส่งรวดเร็วทันใจ",
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_TH,
      alternateName: [COMPANY_EN, "เหล็กใต้", "South Steel"],
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      foundingDate: "1988",
      foundingLocation: "หาดใหญ่ สงขลา",
      email: EMAIL,
      telephone: PHONE_MAIN.display,
      areaServed: ["หาดใหญ่", "สงขลา", "สตูล", "พัทลุง", "ปัตตานี", "ยะลา", "นราธิวาส", "ตรัง", "ประเทศไทย"],
      sameAs: [FACEBOOK_URL, LINE_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY_TH,
      inLanguage: "th-TH",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    ...BRANCHES.map((b, i) => ({
    "@type": "LocalBusiness",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    "@id": `${SITE_URL}/#branch-${b.id}`,
    name: i === 0 ? COMPANY_TH : `${COMPANY_TH} (${b.name})`,
    alternateName: COMPANY_EN,
    description:
      `ร้านเหล็กหาดใหญ่ เปิดมากว่า ${YEARS_IN_BUSINESS} ปี จำหน่ายเหล็กรูปพรรณ เหล็กเส้น เหล็กแผ่น สแตนเลส มาตรฐาน มอก. พร้อมบริการตัดเลเซอร์ CNC ตัด–พับเหล็ก และจัดส่งทั่วประเทศ`,
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
  ],
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.slice(0, 4).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
  })),
};

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  return (
    <main>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={homeFaqSchema} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            ร้านเหล็กหาดใหญ่ <em>ครบวงจร</em>
            <br />
            เหล็กรูปพรรณ มอก.
            <br />
            ตัดเลเซอร์ CNC
          </h1>
          <p className="hero-sub">
            <Tw>{`จำหน่ายเหล็กทุกชนิด ปลีก–ส่ง ราคาโรงงาน พร้อมบริการตัดเลเซอร์ พับเหล็ก และจัดส่งถึงไซต์งานทั่วประเทศ ดูแลโดยทีมงานประสบการณ์กว่า ${YEARS_IN_BUSINESS} ปี`}</Tw>
          </p>
          <div className="hero-ctas">
            <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--white btn--lg">
              <IconPhone size={18} />
              โทรหาเรา
            </a>
            <Link href="/products" className="btn btn--outline-light btn--lg">
              ดูสินค้า
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/images/hero-store.webp"
            alt="คลังเหล็กรูปพรรณของร้านเหล็กใต้ สาขาหาดใหญ่"
            fill
            priority
            sizes="(max-width: 991px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* แถบจุดเด่นใต้แบนเนอร์ */}
      <section className="usp-band" aria-label="จุดเด่นของเหล็กใต้">
        <div className="usp-band-inner">
          {[
            [`${YEARS_IN_BUSINESS} ปี`, "ประสบการณ์ค้าเหล็ก"],
            ["2 สาขา", "ในหาดใหญ่ สงขลา"],
            ["Laser CNC", "ตัดแม่นยำ ±0.1 มม."],
            ["ส่งทั่วไทย", "จัดส่งไวถึงหน้างาน"],
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
              <Tw>เหล็กโครงสร้าง เหล็กกล่อง เหล็กเส้น เหล็กแผ่น สแตนเลส และวัสดุงานเหล็กครบวงจร สต็อกจริงพร้อมส่งที่หาดใหญ่</Tw>
            </p>
          </div>
          <div className="grid-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/products" className="btn btn--outline-dark">
              ดูสินค้าทั้งหมด {PRODUCTS.length} รายการ →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">บริการของเรา</span>
            <h2>
              มากกว่าร้านขายเหล็ก — <span className="nb">ตัด พับ เชื่อม ส่ง</span> <span className="nb">จบในที่เดียว</span>
            </h2>
            <p>
              <Tw>จุดต่างของเหล็กใต้คือเครื่องตัดเลเซอร์ไฟเบอร์ CNC ระดับโรงงานอุตสาหกรรม เจ้าแรก ๆ ในหาดใหญ่ ให้คุณสั่งเหล็กพร้อมแปรรูปเสร็จในร้านเดียว</Tw>
            </p>
          </div>
          <div className="grid-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`service-card${s.featured ? " service-card--featured" : ""}`}
              >
                <div className="service-card__img">
                  <Image src={s.img} alt={s.title} fill sizes="(max-width: 639px) 50vw, 25vw" />
                  {s.featured && <span className="badge-featured">บริการเด่น</span>}
                </div>
                <div className="service-card__body">
                  <h3>{s.title}</h3>
                  <p>
                    <Tw>{s.desc}</Tw>
                  </p>
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
              <h2>จากรุ่นสู่รุ่น กว่า {YEARS_IN_BUSINESS} ปีในหาดใหญ่</h2>
              <p style={{ color: "var(--gray)", fontSize: 17, marginTop: 16 }}>
                <Tw>{"เริ่มต้นจากร้าน “กวงหลี” ที่สุราษฎร์ธานีตั้งแต่ พ.ศ. 2487 สู่ บริษัท เหล็กใต้ จำกัด ที่หาดใหญ่ในปี 2531 วันนี้เราส่งต่อความไว้วางใจ สู่รุ่นที่สาม พร้อมยกระดับบริการด้วยเทคโนโลยี Laser CNC เพื่อเป็นร้านเหล็กคู่เมืองหาดใหญ่ที่ช่างและผู้รับเหมาไว้ใจที่สุด"}</Tw>
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

      {/* REVIEWS / SOCIAL PROOF */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">ลูกค้าไว้วางใจ</span>
          <h2 style={{ maxWidth: 640, margin: "0 auto" }}>
            รีวิวจริงกว่า <span className="num">{TOTAL_REVIEWS}</span> รายการบน Google
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 18, margin: "16px auto 32px", maxWidth: 560 }}>
            <Tw>ช่าง ผู้รับเหมา และเจ้าของบ้านในหาดใหญ่และทั่วภาคใต้ เลือกใช้บริการเหล็กใต้ อ่านรีวิวจากลูกค้าจริงของทั้งสองสาขาได้บน Google</Tw>
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {BRANCHES.map((b) => (
              <a
                key={b.id}
                href={b.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white btn--lg"
              >
                <span style={{ color: "#B45309" }} aria-hidden="true">★</span> {b.name} · <span className="num">{b.reviewCount}</span> รีวิว
              </a>
            ))}
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
              <div key={b.id} className="card branch-card">
                <div style={{ position: "relative", aspectRatio: "16/8" }}>
                  <Image
                    src={b.img}
                    alt={`${b.name} ${COMPANY_TH} ${b.addr}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="branch-card__body">
                  <span className="branch-badge">{b.badge}</span>
                  <h3 style={{ fontSize: 24 }}>{b.name}</h3>
                  <p style={{ color: "var(--gray)", fontSize: 15, margin: 0 }}>{b.addr}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {b.phones.map((p, i) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className={`phone-pill${i === 0 ? " phone-pill--main" : ""}`}>
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
            {[...ARTICLES]
              .sort((a, b) => b.date.localeCompare(a.date))
              .slice(0, 3)
              .map((a) => (
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

      {/* FAQ */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="eyebrow">คำถามที่พบบ่อย</span>
            <h2>เรื่องที่ลูกค้าถามเราบ่อย</h2>
          </div>
          {FAQS.slice(0, 4).map((f, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <h3 style={{ fontSize: 18, margin: 0, color: "var(--navy)" }}>{f.q}</h3>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
          <div style={{ marginTop: 24 }}>
            <Link href="/faq" className="btn btn--outline-dark">
              ดูคำถามที่พบบ่อยทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
