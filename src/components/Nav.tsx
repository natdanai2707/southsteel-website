"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SS, ssEyebrow, ssDisplay } from "@/lib/design";

const navItems = [
  { th: "หน้าแรก", en: "Home", href: "/" },
  { th: "สินค้า", en: "Products", href: "/products" },
  { th: "บริการ", en: "Services", href: "/services" },
  { th: "เกี่ยวกับเรา", en: "About", href: "/about" },
  { th: "ติดต่อเรา", en: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 50, background: SS.paper,
      borderBottom: `1px solid ${SS.rule}`, backdropFilter: "blur(8px)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 56px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/images/logo-blue.png" alt="เหล็กใต้" width={108} height={108} style={{ objectFit: "contain" }} />
          <div style={{ ...ssDisplay, fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>เหล็กใต้</div>
          <div style={{ ...ssEyebrow, fontSize: 10 }}>SOUTH&nbsp;STEEL</div>
        </Link>
        <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0, fontSize: 14, fontWeight: 500 }}>
          {navItems.map(({ th, en, href }) => {
            const active = pathname === href;
            return (
              <li key={en}>
                <Link href={href} style={{ display: "flex", flexDirection: "column", lineHeight: 1.1, textDecoration: "none", color: active ? SS.ink : SS.muted }}>
                  <span>{th}</span>
                  <span style={{ ...ssEyebrow, fontSize: 9, marginTop: 2, color: active ? SS.accent : SS.muted }}>{en}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <a
          href="https://line.me/ti/p/@southsteel"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "12px 20px", borderRadius: 999, background: SS.line, color: "white",
            fontSize: 14, fontWeight: 600, textDecoration: "none",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6 2 1 6 1 11c0 3 2 5.5 5 7l-1 4 5-3c1 0 1 0 2 0 6 0 11-4 11-9S18 2 12 2z"/></svg>
          แชท Line
        </a>
      </div>
    </nav>
  );
}
