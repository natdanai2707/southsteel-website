import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <div className="num" style={{ fontSize: 96, fontWeight: 700, color: "var(--amber)", lineHeight: 1 }}>
          404
        </div>
        <h1 style={{ fontSize: 32, margin: "16px 0 8px" }}>ไม่พบหน้าที่คุณต้องการ</h1>
        <p style={{ color: "var(--gray)", maxWidth: 480, margin: "0 auto 32px" }}>
          หน้านี้อาจถูกย้ายหรือลบไปแล้ว ลองกลับไปหน้าแรก หรือดูสินค้าทั้งหมดของเรา
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn--primary">
            กลับหน้าแรก
          </Link>
          <Link href="/products" className="btn btn--outline-dark">
            ดูสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    </main>
  );
}
