# รายการรูปภาพ — บริษัท เหล็กใต้ จำกัด

## ✅ รูปที่มีอยู่แล้ว (Root /images/)

| ไฟล์ | ใช้ในหน้า | คำอธิบาย |
|------|-----------|-----------|
| `logo.png` | ทุกหน้า (nav + footer) | โลโก้สีหลัก |
| `logo-blue.png` | สำรอง | โลโก้สีน้ำเงิน |
| `hero-store.jpg` | index.html (Hero bg) | ภาพหน้าร้าน/ไซต์งาน |
| `store-interior.jpg` | index.html (About section) | ภายในร้าน |
| `about-team.jpg` | about.html | ทีมงาน |
| `wide-flange.jpg` | index.html (Category) | เหล็กไวด์แฟลงค์ |
| `angle-bar.jpg` | index.html (Category misc) | เหล็กฉาก |
| `rebar.jpg` | index.html (Category construction) | เหล็กข้ออ้อย |
| `square-pipe.jpg` | index.html (Category cold-rolled) | เหล็กกล่อง |
| `stainless.jpg` | products.html (สแตนเลส) | เหล็กสแตนเลส |
| `steel-plate.jpg` | products.html (แผ่น), index.html | เหล็กแผ่นดำ |
| `laser-cutting.jpg` | index.html (Category services) | เครื่อง Laser |
| `bending.jpg` | สำรอง | งานพับเหล็ก |
| `round-pipe.jpg` | สำรอง | เหล็กท่อกลม |
| `c-purlin.jpg` | สำรอง | เหล็กตัวซี |
| `branch-30m.jpg.jpg` | index.html / about.html | สาขาสามสิบเมตร |
| `branch-klongwa.jpg.jpg` | index.html / about.html | สาขาคลองหวะ |

---

## ✅ /images/products/ — สินค้า

| ไฟล์ | ใช้ใน |
|------|-------|
| `wide-flange-01.jpg` – `wide-flange-07.jpg` | products.html — Wide Flange |
| `h-beam-01.jpg`, `h-beam-02.jpg` | สำรอง H-Beam |
| `i-beam-01.jpg` – `i-beam-03.jpg` | products.html — I-Beam |
| `angle-bar-01.jpg`, `angle-bar-02.jpg` | products.html — Angle Bar |
| `c-purlin-01.jpg` – `c-purlin-03.jpg` | products.html — C-Purlin |
| `checkered-plate-01.jpg` – `checkered-plate-06.jpg` | products.html — Checkered Plate |
| `expanded-metal-01.jpg` – `expanded-metal-07.jpg` | products.html — Expanded Metal |
| `flat-bar-01.jpg` – `flat-bar-04.jpg` | products.html — Flat Bar |
| `galv-pipe-01.jpg` – `galv-pipe-07.jpg` | products.html — Galvanized Pipe |
| `rebar-01.jpg`, `rebar-02.jpg` | products.html — Deformed Bar |
| `round-bar-01.jpg`, `round-bar-02.jpg` | products.html — Round Bar |
| `round-pipe-01.jpg` – `round-pipe-04.jpg` | products.html — Black Pipe |
| `shaft-round-01.jpg` – `shaft-round-06.jpg` | products.html — Round Bar/Shaft |
| `square-pipe-01.jpg` – `square-pipe-04.jpg` | products.html — Square Pipe |
| `stainless-01.jpg`, `stainless-02.jpg` | products.html — Stainless |
| `wire-mesh-01.jpg` | products.html — Wire Mesh |

---

## ✅ /images/services/ — บริการ

| ไฟล์ | ใช้ใน |
|------|-------|
| `laser-01.jpg` – `laser-27.jpg` | services.html — Laser Cutting |
| `bending-01.jpg` – `bending-45.jpg` | services.html — Bending |
| `folding-01.jpg` – `folding-11.jpg` | services.html — Gas/Plasma |

---

## ✅ /images/gallery/ — แกลเลอรี่

| ไฟล์ | ใช้ใน |
|------|-------|
| `store-01.jpg` – `store-27.jpg` | สำรองสำหรับ gallery / about |
| `warehouse-01.jpg` – `warehouse-56.jpg` | สำรองสำหรับ stock / gallery |

---

## ✅ /images/stock/ — สต็อกเหล็ก

| ไฟล์ | ใช้ใน |
|------|-------|
| `stock-01.jpg` – `stock-20.jpg` | สำรอง / gallery หน้า about |

---

## ✅ /images/delivery/ — จัดส่ง

| ไฟล์ | ใช้ใน |
|------|-------|
| `delivery-01.jpg` – `delivery-12.jpg` | services.html — Delivery section |
| `delivery-13.png` – `delivery-22.png` | สำรอง |

---

## ⚠️ รูปที่ยังขาด (Placeholder สี #F5F7FA)

ถ้าต้องการรูปเพิ่มเติม ให้เพิ่มใน path ต่อไปนี้:

| Path ที่ควรมี | ขนาดแนะนำ | คำอธิบาย |
|--------------|-----------|-----------|
| `images/og-image.jpg` | 1200×630 px | Open Graph default image |
| `images/favicon.png` | 32×32 px | Favicon |
| `images/favicon-192.png` | 192×192 px | PWA Icon |

---

## หมายเหตุ
- ไฟล์ `branch-30m.jpg.jpg` และ `branch-klongwa.jpg.jpg` มี `.jpg` ซ้ำ 2 ชั้น → ควรเปลี่ยนชื่อเป็น `branch-30m.jpg` และ `branch-klongwa.jpg` แล้วอัปเดต HTML
- ทุกรูปที่ใช้ในเว็บมี `alt` text ภาษาไทยพร้อม keyword แล้ว
- ทุกรูปที่ไม่ใช่ hero ใช้ `loading="lazy"` เพื่อ performance
