import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เหล็กใต้ | South Steel Co., Ltd.",
  description: "ศูนย์จำหน่ายเหล็กรูปพรรณครบวงจร บริการ Laser CNC ตัด–พับ–ม้วน ประสบการณ์กว่า 38 ปี สองสาขาในหาดใหญ่",
  keywords: ["เหล็กใต้", "เหล็ก", "หาดใหญ่", "Laser CNC", "South Steel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Thai:wght@400;500;600;700&family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
