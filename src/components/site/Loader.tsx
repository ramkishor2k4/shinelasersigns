import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">
              <span className="text-gradient">SHINE</span>
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.5em] text-muted-foreground">
              Laser & Signages
            </div>
            <div className="mx-auto mt-6 h-[2px] w-48 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full"
                style={{ background: "var(--gradient-gold)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
