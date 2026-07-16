import type { Metadata } from "next";
import { Sarabun, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics, { AnalyticsBody } from "@/components/Analytics";
import FloatingCta from "@/components/FloatingCta";
import { SITE_URL, SITE_NAME, COMPANY_TH, COMPANY_EN } from "@/lib/site";

const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sarabun",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `ร้านเหล็กหาดใหญ่ เหล็กรูปพรรณ ตัดเลเซอร์ | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "เหล็กใต้ ร้านเหล็กหาดใหญ่ 38 ปี จำหน่ายเหล็กรูปพรรณ เหล็กกล่อง เหล็กฉาก เหล็กแผ่น มาตรฐาน มอก. บริการตัดเลเซอร์ CNC พับเหล็ก ส่งทั่วไทย 2 สาขาในหาดใหญ่ สงขลา",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: COMPANY_TH,
    title: `ร้านเหล็กหาดใหญ่ เหล็กรูปพรรณ ตัดเลเซอร์ | ${SITE_NAME}`,
    description:
      "จำหน่ายเหล็กรูปพรรณครบวงจร มาตรฐาน มอก. บริการตัดเลเซอร์ CNC พับเหล็ก ส่งทั่วไทย 2 สาขาในหาดใหญ่",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${COMPANY_TH} — ${COMPANY_EN}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `ร้านเหล็กหาดใหญ่ เหล็กรูปพรรณ ตัดเลเซอร์ | ${SITE_NAME}`,
    description:
      "จำหน่ายเหล็กรูปพรรณครบวงจร มาตรฐาน มอก. บริการตัดเลเซอร์ CNC พับเหล็ก ส่งทั่วไทย 2 สาขาในหาดใหญ่",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${sarabun.variable} ${inter.variable}`}>
      <head>
        <Analytics />
      </head>
      <body>
        <AnalyticsBody />
        <a href="#content" className="skip-link">
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <Nav />
        <div id="content">{children}</div>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
