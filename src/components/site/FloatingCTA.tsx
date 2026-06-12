import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "./constants";

export function FloatingCTA() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-4 font-semibold text-gold-foreground shadow-elegant glow-gold"
      style={{ background: "var(--gradient-gold)" }}
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">Get Free Quote</span>
    </motion.a>
  );
}
