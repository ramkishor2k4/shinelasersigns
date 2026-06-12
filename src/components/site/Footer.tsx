import { Instagram, Facebook, Linkedin, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "./constants";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-extrabold tracking-tight">
              <span className="text-gradient">SHINE</span>{" "}
              <span className="text-foreground">Laser & Signages</span>
            </div>
            <p className="mt-3 text-sm text-gold-gradient font-medium uppercase tracking-widest">
              Built To Last. Designed To Impress.
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Premium signage manufacturing & installation across Andhra Pradesh & Telangana.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest">Explore</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest">Contact</h4>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <a href={`tel:${CONTACT.phone1Tel}`} className="flex items-center gap-2 hover:text-gold">
                <Phone size={14} /> {CONTACT.phone1}
              </a>
              <a href={`tel:${CONTACT.phone2Tel}`} className="flex items-center gap-2 hover:text-gold">
                <Phone size={14} /> {CONTACT.phone2}
              </a>
            </div>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-all hover:border-gold/50 hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} SHINE Laser & Signages. All rights reserved.</p>
          <p>Made with precision in Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
