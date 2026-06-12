import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { CONTACT } from "./constants";
import { MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business: z.string().trim().max(100).optional(),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid phone number"),
  requirement: z.string().trim().max(100).optional(),
  message: z.string().trim().max(1000).optional(),
});

const FIELD =
  "w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      business: (form.elements.namedItem("business") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      requirement: (form.elements.namedItem("requirement") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const d = result.data;
    const text = `Hi SHINE Laser & Signages!%0A%0AName: ${encodeURIComponent(d.name)}%0ABusiness: ${encodeURIComponent(
      d.business || "-",
    )}%0APhone: ${encodeURIComponent(d.phone)}%0ARequirement: ${encodeURIComponent(
      d.requirement || "-",
    )}%0AMessage: ${encodeURIComponent(d.message || "-")}`;
    window.open(`https://wa.me/919052963583?text=${text}`, "_blank");
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Get In Touch
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight md:text-5xl">
                Let's Build Your <span className="text-gradient">Brand Presence</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-muted-foreground md:text-lg">
                Reach out for a free consultation and a tailored premium signage quote for your
                business.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              <Reveal delay={0.25}>
                <a
                  href={`tel:${CONTACT.phone1Tel}`}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-primary/50"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Phone size={22} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Call</p>
                    <p className="font-semibold">{CONTACT.phone1}</p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.3}>
                <a
                  href={`tel:${CONTACT.phone2Tel}`}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-primary/50"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Phone size={22} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Call</p>
                    <p className="font-semibold">{CONTACT.phone2}</p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.35}>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl py-4 font-semibold text-gold-foreground transition-transform hover:scale-[1.02] glow-gold"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <MessageCircle size={20} /> Chat on WhatsApp
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-7 md:p-9">
              {sent && (
                <div className="mb-5 flex items-center gap-2 rounded-xl bg-gold/15 px-4 py-3 text-sm text-gold">
                  <CheckCircle2 size={18} /> Thanks! We'll be in touch shortly.
                </div>
              )}
              <div className="grid gap-4">
                <div>
                  <input name="name" placeholder="Name" className={FIELD} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <input name="business" placeholder="Business Name" className={FIELD} />
                <div>
                  <input name="phone" placeholder="Phone Number" className={FIELD} />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <input name="requirement" placeholder="Project Requirement" className={FIELD} />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className={`${FIELD} resize-none`}
                />
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] glow-royal"
                  style={{ background: "var(--gradient-royal)" }}
                >
                  Send Enquiry <Send size={17} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
        {/* Address Section */}
        <div className="mt-16">
          <div className="glass rounded-3xl p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <MapPin size={22} />
              </span>

              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Visit Our Office
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  SHINE Laser & Signages
                  <br />
                  Near Megha Pan House
                  <br />
                  Kachiguda Station Road
                  <br />
                  Hyderabad, Telangana 500027
                </p>

                <a
                  href="https://www.google.com/maps/search/Megha%20Pan%20House/@17.389415740966797,78.49581909179688,17z?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-semibold text-gold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-border">
            <iframe
              src="https://maps.google.com/maps?q=Megha%20Pan%20House%20Kachiguda%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SHINE Laser & Signages Location"
            />
          </div>
        </div>
        
      </div>
    </section>
  
    
  );
}
