import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/products";

export const metadata: Metadata = {
  title: "สินค้า เหล็กรูปพรรณ เหล็กเส้น เหล็กแผ่น ราคาส่ง",
  description:
    "รวมสินค้าร้านเหล็กหาดใหญ่ เหล็กกล่อง เหล็กฉาก เหล็กข้ออ้อย เหล็กแผ่น สแตนเลส กัลวาไนซ์ มาตรฐาน มอก. ราคาส่ง พร้อมบริการตัดเลเซอร์และจัดส่งทั่วไทย",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "สินค้า เหล็กรูปพรรณครบวงจร | เหล็กใต้ ร้านเหล็กหาดใหญ่",
    description: "เหล็กกล่อง เหล็กฉาก เหล็กเส้น เหล็กแผ่น สแตนเลส มาตรฐาน มอก. ราคาส่งจากหาดใหญ่",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        title="สินค้าเหล็กครบทุกประเภท ราคาส่งจากหาดใหญ่"
        desc="เหล็กรูปพรรณ เหล็กเส้นก่อสร้าง เหล็กแผ่น สแตนเลส มาตรฐาน มอก. พร้อมอุปกรณ์งานเหล็ก แก๊ส สี ลวดเชื่อม ใบตัด ใบเจียร์ ครบจบในที่เดียว"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "สินค้า" }]}
      />

      {PRODUCT_CATEGORIES.map((cat) => {
        const items = PRODUCTS.filter((p) => p.categoryEn === cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} className="section--tight section" id={cat.id}>
            <div className="container">
              <div className="section-head" style={{ marginBottom: 32 }}>
                <span className="eyebrow">{cat.en}</span>
                <h2 style={{ fontSize: 28 }}>{cat.th}</h2>
              </div>
              <div className="grid-3">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section--tight section section--alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 26 }}>ไม่พบสินค้าที่ต้องการ?</h2>
          <p style={{ color: "var(--gray)", maxWidth: 560, margin: "12px auto 0" }}>
            เรามีสินค้ามากกว่าที่แสดงในเว็บไซต์ ทั้งอลูมิเนียม ไวร์เมช อุปกรณ์งานเชื่อม
            และเหล็กขนาดพิเศษสั่งตามรอบโรงงาน สอบถามได้เลย
          </p>
        </div>
      </section>

      <CTA title="สอบถามราคาสินค้า หรือขอใบเสนอราคา" />
    </main>
  );
}
