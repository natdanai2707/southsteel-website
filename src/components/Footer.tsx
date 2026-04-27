import Link from "next/link";
import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

const footerLinks = [
  ["เมนู / Menu", [
    { label: "หน้าแรก", href: "/" },
    { label: "สินค้า", href: "/products" },
    { label: "บริการ", href: "/services" },
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ติดต่อเรา", href: "/contact" },
  ]],
  ["สินค้า / Products", [
    { label: "เหล็กรีดร้อน" },
    { label: "เหล็กก่อสร้าง" },
    { label: "เหล็กรีดเย็น" },
    { label: "เหล็กแผ่น" },
    { label: "Laser CNC" },
  ]],
  ["ติดต่อ / Contact", [
    { label: "@southsteel" },
    { label: "074-819-777" },
    { label: "facebook.com/southsteelth" },
    { label: "จ.–ส. 08.00–17.00" },
  ]],
] as const;

export default function Footer() {
  return (
    <footer style={{ background: SS.ink, color: SS.paper, padding: "80px 56px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
        <div>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ ...ssDisplay, color: SS.paper, fontSize: 32, fontWeight: 500 }}>เหล็กใต้</div>
          </Link>
          <div style={{ ...ssEyebrow, color: "#8a8067", marginTop: 4 }}>SOUTH STEEL CO., LTD.</div>
          <p style={{ ...ssBody, color: "#a8a091", fontSize: 14, marginTop: 24, maxWidth: 320 }}>
            ศูนย์จำหน่ายเหล็กรูปพรรณครบวงจร บริการ Laser CNC ตัด–พับ ประสบการณ์จากรุ่นสู่รุ่นกว่า 80 ปี
          </p>
        </div>
        {footerLinks.map(([title, links]) => (
          <div key={title as string}>
            <div style={{ ...ssEyebrow, color: "#c9c2b2", marginBottom: 20 }}>{title as string}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {(links as readonly { label: string; href?: string }[]).map((l) => (
                <li key={l.label} style={{ ...ssBody, color: "#a8a091", fontSize: 14, padding: "6px 0" }}>
                  {l.href ? (
                    <Link href={l.href} style={{ color: "#a8a091", textDecoration: "none" }}>{l.label}</Link>
                  ) : l.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid rgba(245,242,236,0.15)`, paddingTop: 24, display: "flex", justifyContent: "space-between", ...ssBody, fontSize: 12, color: "#8a8067" }}>
        <div>© 2568 บริษัท เหล็กใต้ จำกัด · All rights reserved.</div>
        <div style={{ fontFamily: SS.mono }}>HATYAI · SONGKHLA · 90110</div>
      </div>
    </footer>
  );
}
