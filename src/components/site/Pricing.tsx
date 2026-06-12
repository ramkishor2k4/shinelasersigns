import { Reveal } from "./Reveal";
import { Check, Crown } from "lucide-react";

const PLANS = [
  {
    name: "Liquid Letters",
    price: "₹110",
    unit: "Per Inch",
    featured: false,
    features: [
      "Premium Acrylic Finish",
      "LED Illumination",
      "Weather Resistant",
      "Installation Included",
    ],
  },
  {
    name: "Sign Boards",
    price: "₹899",
    unit: "Per Sq Ft",
    featured: true,
    features: [
      "Premium Materials",
      "Long Lasting Finish",
      "Custom Designs",
      "Professional Installation",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Transparent Pricing
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
              Premium Quality, <span className="text-gradient">Honest Rates</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={0.15 * i}>
              <div
                className={`relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.featured ? "glass-strong border-gold/40 glow-gold" : "glass-strong"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                    <Crown size={13} /> Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                  Starting From
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <span
                    className={`font-display text-5xl font-extrabold ${
                      plan.featured ? "text-gold-gradient" : "text-gradient"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="mb-2 text-sm text-muted-foreground">{plan.unit}</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-9 block rounded-xl py-3.5 text-center font-semibold transition-transform duration-300 hover:scale-[1.03] ${
                    plan.featured ? "text-gold-foreground glow-gold" : "text-primary-foreground"
                  }`}
                  style={{
                    background: plan.featured ? "var(--gradient-gold)" : "var(--gradient-royal)",
                  }}
                >
                  Get a Quote
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
