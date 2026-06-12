import { motion } from "framer-motion";
import founderImage from "@/assets/founder-ali-hyder.jpeg";

export default function Founder() {
  return (
    <section
      id="founder"
      className="py-24 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={founderImage}
                alt="Ali Hyder"
                className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
              />

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                Founder & Managing Director
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest">
              Meet Our Founder
            </span>

            <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Ali Hyder
                </h2>
                <p className="text-primary text-lg font-medium mt-2">Founder & Managing Director</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With more than three decades of experience in signage
              manufacturing and branding solutions, Ali Hyder has led the
              successful execution of thousands of projects across commercial,
              retail, hospitality, healthcare, and industrial sectors.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              His commitment to quality craftsmanship, innovation, and customer
              satisfaction has helped SHINE Laser & Signages become a trusted
              name in premium signage solutions throughout Hyderabad and beyond.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border p-6 text-center">
                <h3 className="text-4xl font-bold text-primary">30+</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border p-6 text-center">
                <h3 className="text-4xl font-bold text-primary">10,000+</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}