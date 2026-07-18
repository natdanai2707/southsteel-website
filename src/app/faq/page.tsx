import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { FAQS, stripTags } from "@/lib/faq";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย ร้านเหล็กหาดใหญ่ · ราคา จัดส่ง ตัดเลเซอร์",
  description:
    "รวมคำถามที่พบบ่อยเกี่ยวกับร้านเหล็กหาดใหญ่ เหล็กใต้ — ร้านเหล็กหาดใหญ่ที่ไหนดี ราคาเหล็ก จัดส่ง ตัดเลเซอร์ตามแบบ สาขา และมาตรฐาน มอก. ตอบครบทุกข้อ",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "คำถามที่พบบ่อย | เหล็กใต้ ร้านเหล็กหาดใหญ่",
    description: "ร้านเหล็กหาดใหญ่ที่ไหนดี ราคาเหล็กเท่าไหร่ ตัดเลเซอร์ตามแบบ จัดส่ง สาขา — ตอบครบทุกคำถาม",
    url: "/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <PageHeader
        title="คำถามที่พบบ่อย เกี่ยวกับร้านเหล็กหาดใหญ่"
        desc="รวมคำถามที่ลูกค้าถามเราบ่อยที่สุด เรื่องราคา การจัดส่ง งานตัดเลเซอร์ตามแบบ สาขา และมาตรฐานเหล็ก — ถ้าไม่พบคำตอบที่ต้องการ ทักไลน์ @southsteel มาถามได้เลย"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "คำถามที่พบบ่อย" }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <h2>{f.q}</h2>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </div>
      </section>

      <CTA title="ยังมีคำถามอื่นอีกไหม?" subtitle="ทักไลน์ @southsteel หรือโทรหาเรา ทีมงานยินดีตอบทุกคำถามเรื่องเหล็ก" />
    </main>
  );
}
