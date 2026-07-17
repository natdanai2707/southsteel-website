"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { PHONE_MAIN } from "@/lib/site";
import { IconPhone } from "@/components/Icons";

const navItems = [
  { th: "หน้าแรก", href: "/" },
  { th: "สินค้า", href: "/products", mega: true },
  { th: "บริการ", href: "/services" },
  { th: "บทความ", href: "/blog" },
  { th: "เกี่ยวกับเรา", href: "/about" },
  { th: "พาร์ทเนอร์", href: "/partners" },
  { th: "ติดต่อเรา", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ปิดเมนูเมื่อเปลี่ยนหน้า และล็อก scroll ตอนเมนูมือถือเปิด
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className={`nav${compact ? " nav--compact" : ""}`} aria-label="เมนูหลัก">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="เหล็กใต้ — กลับหน้าแรก">
            <Image
              src="/images/logo-blue.png"
              alt="โลโก้ บริษัท เหล็กใต้ จำกัด — South Steel Co., Ltd."
              width={226}
              height={46}
              priority
            />
          </Link>

          <ul className="nav-links">
            {navItems.map((item) =>
              item.mega ? (
                <li
                  key={item.href}
                  className={`nav-item${megaOpen ? " nav-item--open" : ""}`}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`nav-link${isActive(item.href) ? " nav-link--active" : ""}`}
                    aria-expanded={megaOpen}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.th}
                    <svg className="nav-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  <div className="mega" role="menu">
                    <div className="mega-grid">
                      {PRODUCTS.map((p) => (
                        <Link key={p.slug} href={`/products/${p.slug}`} className="mega-link" role="menuitem">
                          <strong>{p.nameTh}</strong>
                          <span>{p.category}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mega-footer">
                      <Link href="/products" className="link-more">
                        ดูสินค้าทั้งหมด →
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link${isActive(item.href) ? " nav-link--active" : ""}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.th}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="nav-cta">
            <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--primary">
              <IconPhone size={16} />
              <span className="num">{PHONE_MAIN.display}</span>
            </a>
          </div>

          <button
            className={`nav-burger${mobileOpen ? " nav-burger--open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " mobile-menu--open" : ""}`} aria-hidden={!mobileOpen}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`mobile-link${isActive(item.href) ? " mobile-link--active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.th}
              </Link>
              {item.mega &&
                PRODUCTS.slice(0, 6).map((p) => (
                  <Link key={p.slug} href={`/products/${p.slug}`} className="mobile-sublink">
                    {p.nameTh}
                  </Link>
                ))}
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta">
          <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--primary btn--lg">
            <IconPhone size={18} />
            โทร <span className="num">{PHONE_MAIN.display}</span>
          </a>
        </div>
      </div>
    </>
  );
}
