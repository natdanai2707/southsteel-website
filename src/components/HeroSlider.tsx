"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/hero-store.jpg",
  "/images/hero-store2.jpg",
  "/images/hero-store3.jpg",
  "/images/hero-store4.jpg",
  "/images/hero-store5.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: 520, overflow: "hidden" }}>
      {images.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Image
            src={src}
            alt={`เหล็กใต้ ${i + 1}`}
            fill
            priority={i === 0}
            style={{ objectFit: "cover", filter: "contrast(1.05) saturate(0.9)" }}
            sizes="100vw"
          />
        </div>
      ))}

      {/* dot indicators */}
      <div style={{
        position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 8, zIndex: 2,
      }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? "white" : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
