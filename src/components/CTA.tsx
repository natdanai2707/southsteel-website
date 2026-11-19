import { LINE_URL, PHONE_MAIN, OPENING_HOURS_TH } from "@/lib/site";
import { IconPhone, IconLine } from "@/components/Icons";
import Tw from "@/components/ThaiText";

// แถบชวนติดต่อท้ายหน้า — ใช้ซ้ำได้ทุกหน้า
// ส่ง phone มาแทนได้ (เช่น หน้าพาร์ทเนอร์ใช้เบอร์ เอส-2000)
export default function CTA({
  title = "ต้องการใบเสนอราคา หรือปรึกษาเรื่องเหล็ก?",
  subtitle = `ทีมงานตอบไว ภายใน 24 ชั่วโมง เปิดทำการ${OPENING_HOURS_TH}`,
  eyebrow = "ติดต่อเหล็กใต้",
  phone = PHONE_MAIN,
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  phone?: { display: string; tel: string };
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <span className="eyebrow">{eyebrow}</span>
          <h2 style={{ maxWidth: 640, margin: "0 auto" }}>
            <Tw>{title}</Tw>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, margin: "12px auto 28px", maxWidth: 560 }}>
            <Tw>{subtitle}</Tw>
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${phone.tel}`} className="btn btn--white btn--lg">
              <IconPhone size={18} />
              โทร <span className="num">{phone.display}</span>
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--lg">
              <IconLine size={18} />
              แชท LINE @southsteel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
