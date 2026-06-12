import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "The illuminated signage SHINE built for our restaurant completely changed our street presence. Footfall noticeably increased within weeks.",
    name: "Rajesh Kumar",
    role: "Restaurant Owner, Hyderabad",
  },
  {
    quote:
      "From design to installation, the entire process was seamless. Our hotel facade now looks truly premium and stands out at night.",
    name: "Anita Reddy",
    role: "Hotel Owner, Secunderabad",
  },
  {
    quote:
      "Excellent quality and finishing on our storefront signboard. The team understood our brand and delivered exactly what we needed.",
    name: "Mohammed Imran",
    role: "Retail Business Owner",
  },
  {
    quote:
      "Professional, fast, and reliable. The building signage for our hospital is clean, bright, and visible from a distance. Highly recommended.",
    name: "Dr. Sneha Rao",
    role: "Healthcare Facility, Hyderabad",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const go = (dir: number) =>
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Client Voices
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Trusted by <span className="text-gradient">Businesses</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
            <Quote className="mb-6 text-gold/40" size={48} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-display text-xl font-medium leading-relaxed md:text-2xl">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-gold" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous"
                  onClick={() => go(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-gold/50"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  aria-label="Next"
                  onClick={() => go(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-gold/50"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
