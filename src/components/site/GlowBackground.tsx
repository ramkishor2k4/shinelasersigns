export function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute -left-40 top-[-10%] h-[480px] w-[480px] rounded-full blur-[120px] animate-float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.23 264 / 0.5), transparent 70%)" }}
      />
      <div
        className="absolute right-[-10%] top-1/3 h-[520px] w-[520px] rounded-full blur-[130px] animate-float-slower"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.14 85 / 0.22), transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] left-1/3 h-[460px] w-[460px] rounded-full blur-[120px] animate-pulse-glow"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.2 280 / 0.35), transparent 70%)" }}
      />
    </div>
  );
}
