import { Reveal } from "./Reveal";
import {
  MapPin,
  Factory,
  Gem,
  Hammer,
  Timer,
  PencilRuler,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  { icon: MapPin, title: "AP & Telangana Reach", desc: "Distribution & installation across both states." },
  { icon: Factory, title: "Own Manufacturing", desc: "Full control over quality and timelines." },
  { icon: Gem, title: "High Quality Materials", desc: "Premium acrylic, metals & LED components." },
  { icon: Hammer, title: "Expert Craftsmanship", desc: "Skilled fabrication and precise finishing." },
  { icon: Timer, title: "Fast Turnaround", desc: "Efficient production without compromise." },
  { icon: PencilRuler, title: "Custom Design", desc: "Bespoke signage built around your brand." },
  { icon: Sparkles, title: "Premium Finishing", desc: "Flawless detailing on every project." },
  { icon: ShieldCheck, title: "Trusted Local Expertise", desc: "A name businesses across Hyderabad rely on." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Why Choose Us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
              The SHINE <span className="text-gradient">Advantage</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.06 * i}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
