# เว็บไซต์ บริษัท เหล็กใต้ จำกัด — southsteel-th.com

เว็บไซต์ Next.js 15 (App Router, TypeScript, static export) สำหรับ บริษัท เหล็กใต้ จำกัด
(South Steel Co., Ltd.) ร้านเหล็กหาดใหญ่ 38 ปี · 2 สาขา · บริการตัดเลเซอร์ CNC

Deploy บน **Netlify** (build อัตโนมัติจาก branch `main` → publish โฟลเดอร์ `out/`)

---

## เริ่มพัฒนา

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # สร้าง static site ใน out/
```

## โครงสร้างสำคัญ

```
src/
├── app/
│   ├── layout.tsx            ← ฟอนต์ (Sarabun+Inter), metadata กลาง, GTM/Pixel
│   ├── page.tsx              ← หน้าแรก (hero, สินค้า, บริการ, สาขา, LocalBusiness schema)
│   ├── products/page.tsx     ← รวมสินค้า
│   ├── products/[slug]/      ← หน้าสินค้ารายตัว (สร้างอัตโนมัติจากข้อมูล)
│   ├── blog/                 ← บทความ + [slug]
│   ├── services|about|contact/
│   ├── sitemap.ts robots.ts  ← สร้าง sitemap.xml / robots.txt อัตโนมัติ
│   └── globals.css           ← design system ทั้งเว็บ (สี, ปุ่ม, การ์ด, responsive)
├── components/               ← Nav, Footer, ContactForm, Analytics, FloatingCta ฯลฯ
└── lib/
    ├── site.ts               ← ⭐ เบอร์โทร ที่อยู่ Line URL — แก้ที่นี่ที่เดียว
    ├── products.ts           ← ⭐ ข้อมูลสินค้าทั้งหมด
    ├── blog.ts               ← ⭐ บทความทั้งหมด
    └── analytics.ts          ← helper ยิง dataLayer / Pixel event
```

---

## วิธีเพิ่มสินค้าใหม่

1. เปิด `src/lib/products.ts`
2. คัดลอก object สินค้าตัวใดตัวหนึ่งใน `PRODUCTS` แล้วแก้:
   - `slug` — ใช้ใน URL `/products/<slug>` (a-z, ขีดกลาง)
   - `nameTh`, `short`, `intro` (2–3 ย่อหน้า รวม 250 คำขึ้นไปเพื่อ SEO)
   - `specColumns` + `specRows` — ตารางขนาด
   - `related` — slug สินค้าที่เกี่ยวข้อง 3–4 ตัว
   - `image` + `imageAlt` (คำบรรยายภาษาไทย ใส่คำว่า "หาดใหญ่")
3. วางรูปสินค้า (แนวนอน ~1600×1000) ใน `public/images/`
4. เสร็จแล้ว — หน้าเว็บ, mega menu, sitemap และ schema ถูกสร้างให้อัตโนมัติ

## วิธีเพิ่มบทความ

1. เปิด `src/lib/blog.ts` คัดลอก object บทความหนึ่งตัวใน `ARTICLES`
2. แก้ `slug`, `title`, `description`, `date` (YYYY-MM-DD), `cover`, `coverAlt`
3. เขียนเนื้อหาเป็น block: `{type:"h2"|"h3"|"p", html:"..."}` หรือ `{type:"ul", items:[...]}`
   - ใส่ลิงก์กลับไปหน้าสินค้าใน html ได้เลย เช่น `<a href="/products/h-beam">เอชบีม</a>`
4. บทความจะปรากฏใน `/blog`, หน้าแรก และ sitemap อัตโนมัติ

## วิธีเปลี่ยนรูปภาพ

- รูปทั้งหมดอยู่ใน `public/images/` — วางทับชื่อไฟล์เดิมได้เลย
- ควรบีบอัดก่อน (กว้างไม่เกิน 1920px, JPEG quality ~75) เพราะเว็บ serve รูปตรง ๆ
  (static export ไม่มี image optimizer) เช่นใช้ https://squoosh.app
- โลโก้: `logo-white.png` ใช้บน header/footer พื้นน้ำเงิน, `logo.png` ตัวเต็ม
- รูป OG (ตอนแชร์ลิงก์): `public/images/og-image.jpg` ขนาด 1200×630
- QR Line: ใช้ `public/images/line-qr-green.png` (สีเขียว ใช้ใน footer + หน้าติดต่อ)
  และมี `line-qr-black.png` สำรอง เปลี่ยน QR ใหม่ให้วางทับไฟล์เดิมชื่อเดิม

## ตั้งค่า GTM / GA4 / Facebook Pixel / LINE Tag

1. คัดลอก `.env.example` → `.env.local` (dev) และตั้งค่าใน Netlify UI (production):
   Site configuration → Environment variables
2. ใส่ค่า:
   - `NEXT_PUBLIC_GTM_ID` — GTM container (GTM-XXXXXXX)
   - `NEXT_PUBLIC_GA_ID` — GA4 (G-XXXXXXXXXX) *ตั้ง GA4 tag ใน GTM โดยอ่านจาก
     dataLayer variable ชื่อ `ga_measurement_id`*
   - `NEXT_PUBLIC_FB_PIXEL_ID`, `NEXT_PUBLIC_LINE_TAG_ID`
3. กด **Trigger deploy** ใหม่ (ค่า env ฝังตอน build)

### dataLayer events ที่ยิงให้อัตโนมัติ (ใช้ตั้ง Trigger ใน GTM ได้เลย)

| Event | เมื่อไหร่ | พารามิเตอร์ |
|---|---|---|
| `phone_click` | กดลิงก์ `tel:` ใด ๆ | `phone_number`, `page_path` |
| `line_click` | กดลิงก์ line.me ใด ๆ | `line_url`, `page_path` |
| `form_submit` | ส่งฟอร์มติดต่อสำเร็จ | `form_location`, `job_type` |
| `product_view` | เปิดหน้า `/products/[slug]` | `product_name`, `product_category` |
| `blog_view` | เปิดหน้า `/blog/[slug]` | `article_title` |
| `catalog_download` | กดลิงก์ไฟล์ `.pdf` | `file_name` |
| `page_view` | เปลี่ยนหน้าแบบ SPA | `page_path` |

Facebook Pixel ยิง `PageView` ทุกหน้า และ `Lead` เมื่อส่งฟอร์ม/กดโทร/กด Line

## ฟอร์มติดต่อ (Netlify Forms)

ฟอร์มหน้า `/contact` ส่งผ่าน **Netlify Forms** — ครั้งแรกต้องเปิดใช้:

1. Netlify → Site configuration → **Forms** → Enable form detection → Deploy ใหม่
2. ข้อความที่ส่งเข้า จะอยู่ที่แท็บ **Forms** ของ Netlify (ฟอร์มชื่อ `contact`)
3. ตั้ง email แจ้งเตือน: Forms → Form notifications → Add notification
4. ทดสอบส่งฟอร์มจริงหลัง deploy หนึ่งครั้งเสมอ

## Search Console

Domain verify แล้วให้ submit sitemap ที่ `https://southsteel-th.com/sitemap.xml`
(สร้างอัตโนมัติ รวมทุกหน้า สินค้า และบทความ)

---

## ข้อมูลติดต่อบริษัท (อ้างอิง — แก้จริงใน `src/lib/site.ts`)

| | ข้อมูล |
|-|--------|
| สาขาใหญ่ (สามสิบเมตร) | 45 ถ.ราษฎร์ยินดี ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110 · 074-356-643-6, 086-488-4450, 095-086-1777 |
| สาขาคลองหวะ | 272 ถ.กาญจนวนิช ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110 · 074-819-777, 086-488-2285 |
| Laser CNC | 087-287-7007 |
| ตัด–พับ | 086-488-4501 |
| ปุ่ม "โทรหาเรา" (CTA ทุกจุด) | 074-819-777 |
| ร้องเรียนการให้บริการ | 099-795-9526 |
| Line | @southsteel · Facebook: facebook.com/southsteelth |
| เวลาทำการ | จันทร์–เสาร์ 08.00–17.00 น. |
