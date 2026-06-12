import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Play, Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const BADGES = [
  "Own Manufacturing",
  "High Quality Materials",
  "AP & Telangana Installation",
  "Trusted Across Hyderabad",
];

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Premium illuminated signage in dark studio"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-silver"
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse-glow" />
            Premium Signage Manufacturing
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Premium Signage Solutions That{" "}
            <span className="text-gradient">Transform Brands</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg font-semibold uppercase tracking-[0.25em] text-gold-gradient"
          >
            Design. Build. Impact.
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            We create premium signboards, illuminated branding solutions, laser-cut signage, and
            commercial display systems that help businesses stand out and dominate attention.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl px-7 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 glow-royal"
              style={{ background: "var(--gradient-royal)" }}
            >
              Get Free Quote
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="glass inline-flex items-center gap-2 rounded-xl px-7 py-4 font-semibold text-foreground transition-all duration-300 hover:border-gold/50 hover:scale-105"
            >
              <Play size={16} className="text-gold" />
              View Our Work
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-silver/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check size={12} strokeWidth={3} />
                </span>
                {b}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-gold" />
        </motion.div>
      </div>
    </section>
  );
}
