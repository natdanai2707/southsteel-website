import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import type { Product } from "@/lib/products";

// การ์ดสินค้า — ขอบบนเป็นสีเหลืองอำพันเมื่อ hover (กำหนดใน globals.css)
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <div className="product-card-img">
        {product.mok && <span className="badge-mok">{product.mok}</span>}
        <Placeholder label={product.nameTh} src={product.image} alt={product.imageAlt} />
      </div>
      <div className="product-card-body">
        <h3>{product.nameTh}</h3>
        <p>{product.short}</p>
        <span className="link-more">สอบถามราคา →</span>
      </div>
    </Link>
  );
}
