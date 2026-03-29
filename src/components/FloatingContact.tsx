"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:0236327657"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gold text-white px-5 py-3 text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-gold-light transition-colors duration-300 shadow-sm"
          aria-label="Contactează-ne telefonic"
        >
          <Phone className="w-4 h-4" strokeWidth={1.5} />
          <span className="hidden sm:inline">Sună acum</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
