// ข้อมูลกลางของเว็บไซต์ — แก้เบอร์โทร ที่อยู่ ลิงก์โซเชียล ได้ที่ไฟล์นี้ไฟล์เดียว

export const SITE_URL = "https://southsteel-th.com";
// ปีก่อตั้ง — ตัวเลข "กี่ปี" ทั้งเว็บคำนวณจากค่านี้ตอน build ไม่ต้องแก้มือทุกปี
export const FOUNDED_YEAR_BE = 2531; // ก่อตั้ง บริษัท เหล็กใต้ จำกัด ที่หาดใหญ่
export const FAMILY_SINCE_BE = 2487; // ร้าน "กวงหลี" สุราษฎร์ธานี
export const YEARS_IN_BUSINESS = new Date().getFullYear() + 543 - FOUNDED_YEAR_BE;
export const HERITAGE_LINE = `ร้านเหล็กคู่หาดใหญ่ตั้งแต่ พ.ศ. ${FOUNDED_YEAR_BE} · ครอบครัวค้าเหล็กตั้งแต่ พ.ศ. ${FAMILY_SINCE_BE}`;
// วันที่แก้เนื้อหาหน้าหลัก/สินค้าล่าสุด — ใช้เป็น lastmod ใน sitemap (แก้เมื่อเนื้อหาเปลี่ยนจริง)
export const CONTENT_UPDATED = "2026-11-18";

export const SITE_NAME = `เหล็กใต้ ร้านเหล็กหาดใหญ่ ${YEARS_IN_BUSINESS} ปี`;
export const COMPANY_TH = "บริษัท เหล็กใต้ จำกัด";
export const COMPANY_EN = "South Steel Co., Ltd.";

export const LINE_URL = "https://line.me/ti/p/@southsteel";
export const LINE_ID = "@southsteel";
// ลิงก์เปิดแชท LINE OA พร้อมข้อความตั้งต้น (ลูกค้ากดส่งได้เลย และเรารู้ว่ามาจากหน้าไหน)
export const lineMessageUrl = (text: string) =>
  `https://line.me/R/oaMessage/${encodeURIComponent(LINE_ID)}/?${encodeURIComponent(text)}`;
export const FACEBOOK_URL = "https://facebook.com/southsteelth";
export const EMAIL = "ss_southsteel@hotmail.com";

// เบอร์หลักสำหรับปุ่ม CTA
// เบอร์หลักสำหรับปุ่ม "โทรหาเรา" ทุกจุด (nav, hero, ปุ่มลอย, CTA ท้ายหน้า, หน้าสินค้า)
export const PHONE_MAIN = { display: "074-819-777", tel: "074819777" };
// เบอร์สายงาน Laser CNC
export const PHONE_LASER = { display: "087-287-7007", tel: "0872877007" };
export const PHONE_BENDING = { display: "086-488-4501", tel: "0864884501" };
// เบอร์ร้องเรียนการให้บริการ
export const PHONE_COMPLAINT = { display: "099-795-9526", tel: "0997959526" };
// เบอร์ติดต่อ บริษัท เอส-2000 สตีล แฟบริเคท (หน้าพาร์ทเนอร์)
export const PHONE_S2000 = { display: "099-795-9526", tel: "0997959526" };

export const OPENING_HOURS_TH = "จันทร์–เสาร์ 08.00⁠–⁠17.00 น.";
export const OPENING_HOURS_SCHEMA = "Mo-Sa 08:00-17:00";

export interface Branch {
  id: string;
  badge: string;
  name: string;
  addr: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  geo: { lat: number; lng: number };
  phones: { num: string; tel: string; label: string }[];
  img: string;
  mapsUrl: string;
  reviewCount: number; // จำนวนรีวิวจริงบน Google (ใช้เป็น social proof เท่านั้น ไม่ใส่ schema)
}

export const BRANCHES: Branch[] = [
  {
    id: "hq",
    badge: "สำนักงานใหญ่",
    name: "สาขาสามสิบเมตร",
    addr: "45 ถ.ราษฎร์ยินดี ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110",
    streetAddress: "45 ถนนราษฎร์ยินดี ตำบลหาดใหญ่",
    addressLocality: "อำเภอหาดใหญ่",
    addressRegion: "สงขลา",
    postalCode: "90110",
    geo: { lat: 7.0065226, lng: 100.4810876 },
    phones: [
      { num: "074-356-643-6", tel: "074356643", label: "สำนักงาน" },
      { num: "086-488-4450", tel: "0864884450", label: "มือถือ" },
      { num: "095-086-1777", tel: "0950861777", label: "มือถือ" },
    ],
    img: "/images/branch-30m.webp",
    mapsUrl: "https://maps.app.goo.gl/6xUTiAJbnVrMoicz8",
    reviewCount: 65,
  },
  {
    id: "klongwa",
    badge: "สาขา 2",
    name: "สาขาคลองหวะ",
    addr: "272 ถ.กาญจนวนิช ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110",
    streetAddress: "272 ถนนกาญจนวนิช ตำบลคอหงส์",
    addressLocality: "อำเภอหาดใหญ่",
    addressRegion: "สงขลา",
    postalCode: "90110",
    geo: { lat: 6.9823429, lng: 100.4819782 },
    phones: [
      { num: "074-819-777", tel: "074819777", label: "สำนักงาน" },
      { num: "086-488-2285", tel: "0864882285", label: "มือถือ" },
    ],
    img: "/images/branch-klongwa-sign.webp",
    mapsUrl: "https://maps.app.goo.gl/F87FkhKPbHrLzgJo9",
    reviewCount: 12,
  },
];

// รีวิวจริงรวมทุกสาขาบน Google (social proof)
export const TOTAL_REVIEWS = BRANCHES.reduce((sum, b) => sum + b.reviewCount, 0);
