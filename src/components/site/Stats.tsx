import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const STATS = [
  { to:10000,fix: "+", label: "Projects Completed" },
  { to: 100, suffix: "+", label: "Business Clients" },
  { to: 2, suffix: "", label: "States Served" },
  { to: 100, suffix: "%", label: "Quality Commitment" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="glass-strong overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div className="text-center">
                  <div className="font-display text-5xl font-extrabold text-gradient md:text-6xl">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
