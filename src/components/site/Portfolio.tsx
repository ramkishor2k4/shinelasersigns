import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import { Reveal } from "./Reveal";
import hotel from "@/assets/img11.jpeg";
import cafe from "@/assets/img10.jpeg";
import hospital from "@/assets/img3.jpeg";
import restaurant from "@/assets/img6.jpeg";
import retail from "@/assets/img4.jpeg";
import commercial from "@/assets/img8.jpeg";
import img2 from "@/assets/img2.jpeg";
import img7 from "@/assets/img7.jpeg";
import img9 from "@/assets/img9.jpeg";
import img1 from "@/assets/img1.jpeg";


const PROJECTS = [
  { img: hotel, title: "Hotel Signage", category: "Hotels", span: "lg:row-span-2" },
  { img: cafe, title: "Chocolate Room Cafe", category: "Cafes", span: "" },
  { img: restaurant, title: "Persian Cafe Signage", category: "Restaurants", span: "" },
  { img: hospital, title: "Hospital Building Signage", category: "Hospitals", span: "" },
  { img: retail, title: "Devolopers", category: " ", span: "" },
  { img: commercial, title: "College Building", category: "college", span: "lg:row-span-2" },
  { img: img2, title: "", category: " ", span: "" },
  { img: img7, title: "", category: " ", span: "" },
  { img: img9, title: "", category: " ", span: "" },
  { img: img1, title: "", category: " ", span: "" },
];

export function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Our Work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Signage That <span className="text-gradient">Commands Attention</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Hotels · Restaurants · Cafes · Hospitals · Commercial Buildings · Retail Stores
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[220px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i} className={p.span}>
              <button
                onClick={() => setActive(i)}
                className={`group relative h-full w-full overflow-hidden rounded-3xl border border-border text-left ${p.span}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold">{p.title}</h3>
                </div>
                <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full glass-strong opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 size={16} className="text-gold" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/85 p-5 backdrop-blur-md"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-foreground"
              onClick={() => setActive(null)}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-3xl border border-border"
            >
              <img
                src={PROJECTS[active].img}
                alt={PROJECTS[active].title}
                className="max-h-[75vh] w-full object-cover"
              />
              <div className="glass-strong flex items-center justify-between p-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">
                    {PROJECTS[active].category}
                  </p>
                  <h3 className="font-display text-lg font-bold">{PROJECTS[active].title}</h3>
                </div>
                <a
                  href="#contact"
                  className="rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-royal)" }}
                >
                  Get Similar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
