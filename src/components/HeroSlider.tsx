"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// สไลด์พื้นหลัง hero — โหลดเฉพาะรูปแรกทันที รูปถัดไปโหลดเมื่อถึงคิวแสดง
const slides = [
  { src: "/images/hero-store.jpg", alt: "คลังเหล็กรูปพรรณของร้านเหล็กใต้ สาขาหาดใหญ่" },
  { src: "/images/hero-store2.jpg", alt: "สต็อกเหล็กครบทุกประเภทภายในร้านเหล็กใต้ หาดใหญ่" },
  { src: "/images/hero-store3.jpg", alt: "หน้าร้านเหล็กใต้ ศูนย์จำหน่ายเหล็กหาดใหญ่" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(1); // จำนวนสไลด์ที่อนุญาตให้โหลดแล้ว

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        setLoaded((l) => Math.max(l, next + 1));
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {slides.map((s, i) => (
        <div
          key={s.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        >
          {i < loaded && (
            <Image src={s.src} alt={s.alt} fill priority={i === 0} sizes="100vw" style={{ objectFit: "cover" }} />
          )}
        </div>
      ))}
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.src}
            className={`hero-dot${i === current ? " hero-dot--active" : ""}`}
            onClick={() => {
              setCurrent(i);
              setLoaded((l) => Math.max(l, i + 1));
            }}
            aria-label={`ดูภาพที่ ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
