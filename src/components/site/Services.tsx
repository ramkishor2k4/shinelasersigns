import { Reveal } from "./Reveal";
import { Store, Building2, LayoutPanelTop, Lightbulb, Droplets, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Store,
    title: "Shop Signs",
    desc: "Premium storefront signboards designed to attract customers and increase footfall.",
  },
  {
    icon: Building2,
    title: "Building Signs",
    desc: "Large-scale building signage solutions that maximize brand visibility.",
  },
  {
    icon: LayoutPanelTop,
    title: "Brand Displays",
    desc: "Custom branding displays for retail, corporate, and commercial environments.",
  },
  {
    icon: Lightbulb,
    title: "LED Solutions",
    desc: "Energy-efficient LED signage and illuminated branding systems.",
  },
  {
    icon: Droplets,
    title: "Liquid Letters",
    desc: "Premium illuminated liquid letters with stunning night-time visibility.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            What We Do
          </span>
        </Reveal>
        <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={0.1}>
            <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Signage Services Engineered for <span className="text-gradient">Impact</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl px-6 py-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Starting from</p>
              <p className="font-display text-2xl font-bold text-gold-gradient">₹110 Per Inch</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <div className="glass-strong group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/30" />
                <div className="relative">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ background: "var(--gradient-royal)" }}
                  >
                    <s.icon size={26} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    Enquire <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
