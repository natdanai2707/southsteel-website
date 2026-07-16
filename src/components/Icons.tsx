// ไอคอน SVG ที่ใช้ทั่วเว็บ — stroke ใช้ currentColor เพื่อรับสีจาก CSS

interface IconProps {
  size?: number;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
});

export function IconLaser({ size = 28 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M12 3v6" />
      <path d="M12 9l-5 8h10l-5-8z" fill="currentColor" fillOpacity="0.15" />
      <path d="M4 21h16" />
      <path d="M8.5 21l1-2M15.5 21l-1-2M12 21v-2.5" />
    </svg>
  );
}

export function IconBend({ size = 28 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 17h8a6 6 0 0 0 6-6V4" />
      <path d="M3 21h18" />
      <path d="M14 7l3-3 3 3" />
    </svg>
  );
}

export function IconWeld({ size = 28 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 14l7-7 3 3-7 7H3v-3z" />
      <path d="M13 7l2-2" />
      <path d="M17 9l1.5-1.5M18.5 12.5L20 11M15 5.5L16.5 4" />
      <path d="M14 17h7M16 21h5" />
    </svg>
  );
}

export function IconTruck({ size = 28 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M1 5h13v11H1z" />
      <path d="M14 9h4l3 3v4h-7V9z" />
      <circle cx="5.5" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
    </svg>
  );
}

export function IconPhone({ size = 20 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" stroke="none">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02z" />
    </svg>
  );
}

export function IconLine({ size = 20 }: IconProps) {
  return (
    <svg {...base(size)} fill="currentColor" stroke="none">
      <path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.03 3.58 7.4 8.41 8.04.33.07.77.22.89.5.1.26.07.66.03.92l-.14.86c-.04.26-.2 1.01.89.55 1.09-.46 5.87-3.45 8.01-5.91C21.66 13.4 22 11.83 22 10.13 22 5.64 17.52 2 12 2z" />
    </svg>
  );
}

export function IconCheck({ size = 20 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
