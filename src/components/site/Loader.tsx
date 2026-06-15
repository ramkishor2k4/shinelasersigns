import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import loadingImage from "../assets/loadingpage.jpeg";

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
          <div className="flex flex-col items-center">
            <img
  src={loadingImage}
  alt="SHINE Logo"
  className="w-40 md:w-56 object-contain"
/>

  <div className="mt-2 text-xs uppercase tracking-[0.5em] text-muted-foreground">
 
  </div>
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