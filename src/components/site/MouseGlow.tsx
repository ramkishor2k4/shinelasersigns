import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] hidden md:block"
      style={{
        background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, oklch(0.58 0.23 264 / 0.1), transparent 65%)`,
      }}
    />
  );
}
