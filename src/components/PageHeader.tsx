import { SS, ssEyebrow, ssBody, ssDisplay } from "@/lib/design";

interface PageHeaderProps {
  kicker: string;
  titleTh: string;
  titleEn: string;
  desc?: string;
}

export default function PageHeader({ kicker, titleTh, titleEn, desc }: PageHeaderProps) {
  return (
    <section style={{ padding: "96px 56px 64px", borderBottom: `1px solid ${SS.rule}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 64, alignItems: "end" }}>
        <div>
          {kicker && <div style={{ ...ssEyebrow, marginBottom: 12 }}>{kicker}</div>}
          {titleEn && <div style={{ ...ssBody, fontSize: 13, color: SS.muted, fontStyle: "italic" }}>{titleEn}</div>}
        </div>
        <div>
          <h1
            style={{ ...ssDisplay, fontSize: 96, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: titleTh }}
          />
          {desc && (
            <p style={{ ...ssBody, fontSize: 30, maxWidth: 1100, marginTop: 32, color: SS.subtle, whiteSpace: "pre-line" }}>{desc}</p>
          )}
        </div>
      </div>
    </section>
  );
}
