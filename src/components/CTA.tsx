import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

export default function CTA() {
  return (
    <section style={{ padding: "96px 56px", background: SS.paper, borderTop: `1px solid ${SS.rule}` }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ ...ssEyebrow, marginBottom: 20 }}>ติดต่อ / Get in touch</div>
        <h2 style={{ ...ssDisplay, fontSize: 80, margin: 0, lineHeight: 1 }}>
          แชทได้ที่ <em style={{ fontStyle: "italic", color: SS.line }}>Line.</em>
        </h2>
        <p style={{ ...ssBody, fontSize: 18, maxWidth: 520, margin: "32px auto 0", color: SS.muted }}>
          ตอบกลับภายใน 24 ชั่วโมง จันทร์–เสาร์ · 08.00–17.00 น.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 40 }}>
          <a
            href="https://line.me/ti/p/@southsteel"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 28px", background: SS.line, color: "white", borderRadius: 2, fontSize: 15, fontWeight: 600, textDecoration: "none" }}
          >
            @southsteel — แชทผ่าน Line
          </a>
          <a
            href="tel:0864884450"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 28px", background: "transparent", color: SS.ink, borderRadius: 2, border: `1px solid ${SS.ink}`, fontSize: 15, fontWeight: 500, textDecoration: "none" }}
          >
            086-488-4450
          </a>
        </div>
      </div>
    </section>
  );
}
