# เว็บไซต์ บริษัท เหล็กใต้ จำกัด

เว็บไซต์ภาษาไทยสำหรับ บริษัท เหล็กใต้ จำกัด (South Steel Co., Ltd.)  
ศูนย์จำหน่ายเหล็กรูปพรรณครบวงจร + บริการ Laser CNC ตัด-พับ-ม้วน  
อายุกิจการ 35+ ปี · 2 สาขาในหาดใหญ่ สงขลา

---

## โครงสร้างไฟล์

```
/
├── index.html               ← หน้าแรก
├── products.html            ← หน้าสินค้า
├── services.html            ← หน้าบริการ
├── about.html               ← หน้าเกี่ยวกับเรา
├── contact.html             ← หน้าติดต่อ
├── style.css                ← CSS หลักทั้งเว็บ
├── script.js                ← JavaScript (nav, animation, GA4)
├── sitemap.xml              ← Sitemap สำหรับ Search Engine
├── robots.txt               ← อนุญาต/ห้าม crawler
├── google-site-verification.html ← Placeholder verification file
├── images/
│   ├── README.md            ← รายการรูปทั้งหมด
│   ├── logo.png
│   ├── hero-store.jpg
│   ├── ...
│   ├── products/            ← รูปสินค้าแต่ละชนิด
│   ├── services/            ← รูปบริการ (laser, bending, folding)
│   ├── gallery/             ← รูปร้านและคลังสินค้า
│   ├── stock/               ← รูปสต็อกเหล็ก
│   └── delivery/            ← รูปรถบรรทุก/จัดส่ง
└── README.md                ← ไฟล์นี้
```

---

## ✅ Checklist ก่อน Deploy

### 1. แทนที่ Placeholder ทั้งหมด

เปิดทุก HTML file แล้วแทนที่ข้อความต่อไปนี้:

| Placeholder | แทนที่ด้วย | วิธีหา |
|-------------|-----------|--------|
| `GA_MEASUREMENT_ID` | เช่น `G-XXXXXXXXXX` | [analytics.google.com](https://analytics.google.com) → Create Property |
| `VERIFICATION_CODE` | เช่น `abcdef123456` | [search.google.com/search-console](https://search.google.com/search-console) → Add Property → HTML tag |
| `[FORM_ID]` | เช่น `xpzvwkbo` | [formspree.io](https://formspree.io) → New Form → copy ID |
| `https://southsteel.co.th` | domain จริง | จาก hosting provider |

**หาไฟล์ที่ต้องแก้ทั้งหมด:**
- `index.html`, `products.html`, `services.html`, `about.html`, `contact.html`
- `sitemap.xml`, `robots.txt`

---

### 2. แก้ชื่อไฟล์รูป (สำคัญ)

ไฟล์ `branch-30m.jpg.jpg` และ `branch-klongwa.jpg.jpg` มีนามสกุลซ้ำ  
ควรเปลี่ยนชื่อไฟล์เป็น:

```
branch-30m.jpg.jpg  →  branch-30m.jpg
branch-klongwa.jpg.jpg  →  branch-klongwa.jpg
```

แล้วอัปเดต `src` ใน HTML ตามที่ต้องการ

---

### 3. เพิ่ม Favicon (แนะนำ)

สร้างหรือแปลงโลโก้เป็น favicon แล้วเพิ่มใน `<head>` ทุกหน้า:

```html
<link rel="icon" type="image/png" href="images/favicon.png">
<link rel="apple-touch-icon" href="images/favicon-192.png">
```

---

## 🚀 Deploy บน Static Hosting

### Netlify (แนะนำ — ฟรี)

1. ไปที่ [netlify.com](https://netlify.com) → Sign up ฟรี
2. ลาก folder `เว็บเหล็กใต้` ทั้งโฟลเดอร์ไปวางใน Netlify Drop
3. รับ URL เช่น `https://southsteel.netlify.app` ทันที
4. ตั้งค่า Custom Domain: Site settings → Domain management → Add custom domain

### GitHub Pages (ฟรี)

1. สร้าง repo บน GitHub
2. `git init && git add . && git commit -m "init"`
3. `git push origin main`
4. Settings → Pages → Source: main branch

### Shared Hosting / cPanel

1. zip ทุกไฟล์ใน folder
2. อัปโหลดผ่าน File Manager ไปที่ `public_html/`
3. แตก zip

---

## 📊 ตั้งค่า Google Analytics 4

1. ไปที่ [analytics.google.com](https://analytics.google.com)
2. Admin → Create Property → ใส่ชื่อ "เหล็กใต้" และ URL
3. Data Streams → Web → ใส่ domain
4. คัดลอก **Measurement ID** (รูปแบบ `G-XXXXXXXXXX`)
5. แทนที่ `GA_MEASUREMENT_ID` ทุกที่ใน HTML ทั้ง 5 ไฟล์

**Events ที่ tracking อัตโนมัติแล้ว (ใน script.js):**
- คลิกปุ่มโทร → `phone_call`
- คลิก Line → `line_chat`
- คลิก Facebook → `facebook`
- ส่งฟอร์ม → `form_submit`

---

## 🔍 ตั้งค่า Google Search Console

1. ไปที่ [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://southsteel.co.th`
3. เลือก Verify: **HTML tag** method
4. คัดลอก `content="..."` จาก `<meta name="google-site-verification">`
5. แทนที่ `VERIFICATION_CODE` ใน HTML ทั้ง 5 ไฟล์
6. กด Verify
7. หลัง verify แล้ว → Sitemaps → ใส่ `https://southsteel.co.th/sitemap.xml`

---

## 💬 ตั้งค่า Formspree (Contact Form)

1. ไปที่ [formspree.io](https://formspree.io) → Sign up ฟรี
2. New Form → ตั้งชื่อ "เหล็กใต้ Contact"
3. คัดลอก Form ID (8 ตัวอักษร เช่น `xpzvwkbo`)
4. แทนที่ `[FORM_ID]` ใน `contact.html`:
   ```html
   action="https://formspree.io/f/xpzvwkbo"
   ```
5. กรอกฟอร์มทดสอบ → ตรวจสอบ Email

---

## 🗺️ อัปเดต Google Maps Embed (แนะนำ)

Maps embed ปัจจุบันใช้พิกัดโดยประมาณ สำหรับพิกัดที่แม่นยำ:

1. เปิด Google Maps → ค้นหาชื่อร้าน
2. กด Share → Embed a map → คัดลอก `<iframe src="...">`
3. แทนที่ `<iframe>` ใน `about.html` และ `contact.html`

---

## 📱 ทดสอบ Responsive

ทดสอบที่ขนาดหน้าจอ:
- **Desktop**: 1280px+
- **Tablet**: 768px
- **Mobile**: 375px (iPhone SE)

ตรวจสอบ:
- [ ] Navigation hamburger ทำงาน
- [ ] Floating buttons (Line + Call) ปรากฏบน mobile
- [ ] Form กรอกได้สะดวกบน mobile
- [ ] รูปภาพโหลดครบ ไม่มี broken image
- [ ] Hero text อ่านได้ชัดบน overlay
- [ ] Maps แสดงผลถูกต้อง

---

## 🛠️ Tech Stack

- Pure **HTML5** + **CSS3** + **Vanilla JavaScript**
- ไม่มี framework ไม่มี npm — เปิดจาก `file://` ได้ทันที
- Font: **Sarabun** (Google Fonts)
- Icons: **Inline SVG** (ไม่ต้องโหลด library)
- Animation: **Intersection Observer API**
- Form: **Formspree** (no backend needed)
- Analytics: **Google Analytics 4**

---

## 📞 ข้อมูลติดต่อบริษัท

| | ข้อมูล |
|-|--------|
| **บริษัท** | บริษัท เหล็กใต้ จำกัด |
| **สาขาใหญ่** | 45 ถ.ราษฎร์ยินดี ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110 |
| **สาขาคลองหวะ** | 272 ถ.กาญจนวนิช ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110 |
| **โทร (ใหญ่)** | 086-488-4450, 095-086-1777, 074-356-643 ถึง 6 |
| **โทร (คลองหวะ)** | 086-488-2285, 074-819-777 |
| **Laser CNC** | 087-287-7007 |
| **ตัดพับ** | 086-488-4501 |
| **Email** | natdanai2707@gmail.com |
| **Line** | @southsteel |
| **Facebook** | facebook.com/southsteelth |
| **เวลาทำการ** | จันทร์–เสาร์ 08.00–17.00 น. |
