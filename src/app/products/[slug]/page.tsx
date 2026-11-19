import { YEARS_IN_BUSINESS } from "@/lib/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import Tw from "@/components/ThaiText";
import ViewTracker from "@/components/ViewTracker";
import { IconPhone, IconLine } from "@/components/Icons";
import { PRODUCTS, getProduct } from "@/lib/products";
import JsonLd from "@/components/JsonLd";
import { lineMessageUrl, PHONE_MAIN, SITE_URL, COMPANY_TH } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = product.metaTitle ?? `${product.nameTh} หาดใหญ่ ราคาส่ง`;
  const description = product.metaDescription ?? `${product.short} ซื้อ${product.nameTh}ที่หาดใหญ่ ราคาส่งจากเหล็กใต้ ร้านเหล็ก ${YEARS_IN_BUSINESS} ปี พร้อมส่งทั่วไทย`;
  return {
    title,
    description,
    keywords: product.keywords,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${title} | เหล็กใต้`,
      description,
      url: `/products/${product.slug}`,
      images: [{ url: product.image, width: 1200, height: 800, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = product.related
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  // ไม่ใส่ Product schema: ธุรกิจเป็นแบบขอใบเสนอราคา (ไม่มี price) และไม่ใส่
  // review/aggregateRating ปลอมตามนโยบาย Google — Product snippet ต้องมีอย่างน้อย
  // หนึ่งในสามช่องนี้ จึงเลี่ยง error ด้วยการไม่ประกาศ @type Product
  // โครงสร้างหน้ายังมี BreadcrumbList schema จาก PageHeader อยู่

  // หน้าบริการ (ตัดเลเซอร์ / พับเหล็ก) ประกาศเป็น Service — ไม่ต้องมีราคาเหมือน Product
  const serviceSchema =
    product.categoryEn === "service"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: product.nameTh,
          alternateName: product.nameEn,
          description: product.short,
          url: `${SITE_URL}/products/${product.slug}`,
          image: `${SITE_URL}${product.image}`,
          serviceType: product.nameEn,
          provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: COMPANY_TH, url: SITE_URL },
          areaServed: ["หาดใหญ่", "สงขลา", "ภาคใต้"],
        }
      : null;

  return (
    <main>
      {serviceSchema && <JsonLd data={serviceSchema} />}
      <ViewTracker
        event="product_view"
        params={{ product_name: product.nameTh, product_category: product.category }}
      />

      <PageHeader
        title={`${product.nameTh} หาดใหญ่`}
        desc={product.short}
        crumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "สินค้า", href: "/products" },
          { label: product.nameTh },
        ]}
      />

      <section className="section--tight section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
            {/* เนื้อหา */}
            <div>
              {product.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.85, color: "#1F2937" }}>
                  <Tw>{p}</Tw>
                </p>
              ))}

              <h2 style={{ fontSize: 24, margin: "32px 0 16px" }}>เหมาะกับงานอะไรบ้าง</h2>
              <ul className="check-list check-list--tiles">
                {product.uses.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>

              <h2 style={{ fontSize: 24, margin: "32px 0 16px" }}>ทำไมต้องซื้อที่เหล็กใต้</h2>
              <ul className="check-list">
                <li>ร้านเหล็กหาดใหญ่ประสบการณ์ {YEARS_IN_BUSINESS} ปี มี 2 สาขา สต็อกจริง เช็กของได้ทันที</li>
                <li>{product.mok ? `สินค้ามาตรฐาน ${product.mok} พร้อมใบรับรองคุณภาพ` : "สินค้าคุณภาพ ระบุเกรดชัดเจน ตรวจสอบได้ทุกชิ้น"}</li>
                <li>บริการตัดเลเซอร์ CNC และพับเหล็กครบวงจรในที่เดียว</li>
                <li>ราคาส่งสำหรับผู้รับเหมาและงานโครงการ พร้อมส่งถึงไซต์งานทั่วไทย</li>
              </ul>
            </div>

            {/* รูป + ราคา + สเปก (เลื่อนตามจอบน desktop) */}
            <div className="product-side">
              <div className="card" style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "16/10" }}>
                  {product.mok && <span className="badge-mok">{product.mok}</span>}
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 767px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="price-card">
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>เช็กราคาวันนี้</h3>
                <p style={{ fontSize: 15, color: "var(--gray)", marginBottom: 16 }}>
                  <Tw>ราคาเหล็กเปลี่ยนตามตลาด ส่งรายการที่ต้องการมาทางไลน์ หรือโทรสอบถาม ทีมงานตอบภายใน 24 ชั่วโมง</Tw>
                </p>
                <div className="price-card__actions">
                  <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--primary">
                    <IconPhone size={16} />
                    โทร <span className="num">{PHONE_MAIN.display}</span>
                  </a>
                  <a
                    href={lineMessageUrl(
                      product.categoryEn === "service"
                        ? `สนใจ${product.nameTh} ขอใบเสนอราคาครับ (จากเว็บ)`
                        : `สนใจ${product.nameTh} ขอราคาวันนี้ครับ (จากเว็บ)`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--line"
                  >
                    <IconLine size={16} />
                    สอบถามผ่าน LINE
                  </a>
                </div>
              </div>
              <div>
              <h2 style={{ fontSize: 22, marginBottom: 12 }}>{product.specTitle}</h2>
              <div className="table-scroll">
                <table className="spec-table">
                  <thead>
                    <tr>
                      {product.specColumns.map((c) => (
                        <th key={c}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specRows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {product.specNote && (
                <p style={{ fontSize: 14, color: "var(--gray)", marginTop: 12 }}>{product.specNote}</p>
              )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {product.gallery && product.gallery.length > 0 && (
        <section className="section--tight section">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 32 }}>
              <span className="eyebrow">ผลงานจริง</span>
              <h2 style={{ fontSize: 26 }}>{product.galleryTitle ?? "ตัวอย่างผลงาน"}</h2>
            </div>
            <div className="work-gallery">
              {product.gallery.map((g) => (
                <div key={g.src} className="work-gallery__item">
                  <Image src={g.src} alt={g.alt} fill loading="lazy" sizes="(max-width: 767px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section--tight section section--alt">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 32 }}>
              <span className="eyebrow">สินค้าที่เกี่ยวข้อง</span>
              <h2 style={{ fontSize: 26 }}>ลูกค้าที่ดู{product.nameTh} มักดูสิ่งเหล่านี้ด้วย</h2>
            </div>
            <div className="grid-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA title={`สอบถามราคา${product.nameTh}`} />
    </main>
  );
}
