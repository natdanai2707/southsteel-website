import Link from "next/link";
import Image from "next/image";
import {
  BRANCHES,
  COMPANY_TH,
  FACEBOOK_URL,
  LINE_ID,
  LINE_URL,
  OPENING_HOURS_TH,
  EMAIL,
} from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

const menuLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "สินค้า", href: "/products" },
  { label: "บริการ", href: "/services" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear() + 543;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* คอลัมน์ 1: โลโก้ + tagline */}
          <div className="footer-brand">
            <Link href="/" aria-label="เหล็กใต้ — กลับหน้าแรก">
              <Image
                src="/images/logo-white.png"
                alt="โลโก้ บริษัท เหล็กใต้ จำกัด"
                width={253}
                height={52}
              />
            </Link>
            <p>
              ร้านเหล็กหาดใหญ่ 38 ปี ศูนย์รวมเหล็กรูปพรรณ เหล็กเส้น เหล็กแผ่น
              มาตรฐาน มอก. พร้อมบริการตัดเลเซอร์ CNC ตัด–พับ และจัดส่งทั่วไทย
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-qr"
              aria-label={`เพิ่มเพื่อน Line ${LINE_ID}`}
            >
              <Image
                src="/images/line-qr-green.png"
                alt={`Line QR Code สแกนเพิ่มเพื่อน ${LINE_ID}`}
                width={108}
                height={108}
              />
            </a>
          </div>

          {/* คอลัมน์ 2: ลิงก์ */}
          <div>
            <h4>เมนู</h4>
            <ul>
              {menuLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 style={{ marginTop: 24 }}>สินค้ายอดนิยม</h4>
            <ul>
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`}>{p.nameTh}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* คอลัมน์ 3: ติดต่อ */}
          <div className="footer-contact">
            <h4>ติดต่อเรา</h4>
            {BRANCHES.map((b) => (
              <div key={b.id} className="footer-branch">
                <strong>
                  {b.name} ({b.badge})
                </strong>
                <address>{b.addr}</address>
                <ul>
                  {b.phones.map((p) => (
                    <li key={p.tel}>
                      <a href={`tel:${p.tel}`} className="num">
                        {p.num}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul>
              <li>
                Line:{" "}
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                  {LINE_ID}
                </a>
              </li>
              <li>
                Facebook:{" "}
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                  facebook.com/southsteelth
                </a>
              </li>
              <li>
                อีเมล: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>เปิดทำการ {OPENING_HOURS_TH}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {year} สงวนลิขสิทธิ์ {COMPANY_TH} · South Steel Co., Ltd.
          </div>
          <div className="num">HAT YAI · SONGKHLA · THAILAND</div>
        </div>
      </div>
    </footer>
  );
}
