import { Reveal } from "./Reveal";
import { ArrowUpRight, Phone } from "lucide-react";
import { CONTACT } from "./constants";

export function CTASection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-10 text-center md:p-20">
            <div className="absolute inset-0" style={{ background: "var(--gradient-royal)" }} />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-background/30 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
                Ready To Make Your Brand Impossible To Ignore?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-primary-foreground/85 md:text-lg">
                Get a free consultation and premium signage solution tailored for your business.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-background px-7 py-4 font-semibold text-foreground transition-transform duration-300 hover:scale-105"
                >
                  Get Free Quote
                  <ArrowUpRight size={18} className="text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`tel:${CONTACT.phone1Tel}`}
                  className="inline-flex items-center gap-2 rounded-xl glass-strong px-7 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
