import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                <Sparkles size={14} /> About SHINE
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight md:text-5xl">
                Elevating Brands Through <span className="text-gradient">Premium Signage</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground md:text-lg">
                SHINE Laser & Signages specializes in designing and manufacturing high-quality
                signage solutions for businesses, retail stores, hotels, hospitals, restaurants,
                cafes, commercial buildings, and corporate brands.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-muted-foreground md:text-lg">
                From concept to installation, we deliver signage solutions that create lasting
                impressions and increase brand visibility.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { k: "Concept", v: "Tailored design direction for your brand identity." },
              { k: "Craft", v: "Precision laser cutting & premium fabrication." },
              { k: "Illuminate", v: "Energy-efficient LED & liquid letter systems." },
              { k: "Install", v: "Professional on-site installation across AP & TS." },
            ].map((card, i) => (
              <Reveal key={card.k} delay={0.15 * i}>
                <div className="glass-strong group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-gold/40">
                  <div className="mb-3 font-display text-2xl font-bold text-gold-gradient">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold">{card.k}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
