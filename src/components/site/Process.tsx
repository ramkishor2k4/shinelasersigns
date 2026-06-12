import { Reveal } from "./Reveal";
import { MessageSquare, PenTool, Cog, Truck } from "lucide-react";

const STEPS = [
  { icon: MessageSquare, step: "Step 1", title: "Consultation", desc: "Understanding your branding requirements." },
  { icon: PenTool, step: "Step 2", title: "Design", desc: "Creating custom signage concepts." },
  { icon: Cog, step: "Step 3", title: "Manufacturing", desc: "Precision laser cutting and fabrication." },
  { icon: Truck, step: "Step 4", title: "Installation", desc: "Professional on-site installation." },
];

export function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              How We Work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
              From Concept to <span className="text-gradient">Installation</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.12 * i}>
              <div className="relative text-center">
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground glow-royal"
                  style={{ background: "var(--gradient-royal)" }}
                >
                  <s.icon size={24} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold">
                  {s.step}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
