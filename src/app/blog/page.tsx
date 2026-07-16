import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { ARTICLES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "บทความความรู้เรื่องเหล็ก",
  description:
    "รวมบทความความรู้เรื่องเหล็กจากร้านเหล็กหาดใหญ่ 38 ปี วิธีเลือกเหล็ก มาตรฐาน มอก. งานตัดเลเซอร์ CNC และเทคนิคงานช่างที่ใช้ได้จริง",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "บทความความรู้เรื่องเหล็ก | เหล็กใต้ ร้านเหล็กหาดใหญ่",
    description: "วิธีเลือกเหล็ก มาตรฐาน มอก. งานตัดเลเซอร์ CNC จากประสบการณ์ค้าเหล็ก 38 ปี",
    url: "/blog",
  },
};

export default function BlogPage() {
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main>
      <PageHeader
        title="ความรู้เรื่องเหล็ก จากทีมงานเหล็กใต้"
        desc="บทความจากประสบการณ์ค้าเหล็กกว่า 38 ปีที่หาดใหญ่ ช่วยให้คุณเลือกเหล็กถูกประเภท ถูกมาตรฐาน และคุ้มค่าที่สุด"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "บทความ" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {sorted.map((a) => (
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
                  <h3 style={{ fontSize: 19, margin: "6px 0 8px" }}>{a.title}</h3>
                  <p>{a.description}</p>
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
