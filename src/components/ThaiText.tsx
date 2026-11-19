import { Fragment } from "react";

// ตัดบรรทัดภาษาไทยเฉพาะตรงช่องว่างที่เขียนไว้ ไม่ให้เบราว์เซอร์ตัดกลางวลี
// - คำสั้น (≤ 2 ตัวอักษร เช่น "ๆ") และตัวเลขที่ตามด้วยหน่วยสั้น ๆ จะติดไปกับคำข้างเคียง
// - วลีที่ยาวเกิน maxNoWrap ตัวอักษรปล่อยให้ตัดตามปกติ เพื่อไม่ให้ล้นกล่องบนมือถือ
const NUM = /^[\d.,±×/]+/;

export function splitThai(text: string): string[] {
  const out: string[] = [];
  for (const seg of text.trim().split(/\s+/)) {
    if (out.length && seg.length <= 2) out[out.length - 1] += " " + seg;
    else out.push(seg);
  }
  const res: string[] = [];
  for (let i = 0; i < out.length; i++) {
    let cur = out[i];
    while (i + 1 < out.length && NUM.test(cur.split(" ").pop() ?? "") && out[i + 1].length <= 6) {
      cur += " " + out[++i];
    }
    res.push(cur);
  }
  return res;
}

export default function Tw({ children, maxNoWrap = 34 }: { children: string; maxNoWrap?: number }) {
  const parts = splitThai(children);
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          {p.length > maxNoWrap ? p : <span className="nb">{p}</span>}
        </Fragment>
      ))}
    </>
  );
}
