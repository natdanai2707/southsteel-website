import Image from "next/image";

interface PlaceholderProps {
  label: string;
  src?: string;
  alt?: string;
  sizes?: string;
}

// รูปภาพแบบ fill ภายในกล่องที่กำหนดสัดส่วนจาก parent
// ถ้าไม่มีรูป จะแสดงกล่องสีเทาพร้อมชื่อสินค้าแทน
export default function Placeholder({ label, src, alt, sizes }: PlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt || label}
        fill
        sizes={sizes || "(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"}
        style={{ objectFit: "cover" }}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt || label}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "repeating-linear-gradient(45deg, #E5E7EB, #E5E7EB 12px, #EDF0F3 12px, #EDF0F3 24px)",
        color: "#6B7280",
        fontSize: 14,
        fontWeight: 600,
        textAlign: "center",
        padding: 16,
      }}
    >
      {label}
    </div>
  );
}
