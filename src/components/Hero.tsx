"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="acasa" className="relative min-h-[100svh] flex flex-col justify-center bg-white">
      <div className="max-container section-spacing pb-16 md:pb-24">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="label-sm mb-8 md:mb-12"
        >
          Birou Individual Notarial — Galați
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.95] tracking-tight text-zinc-950 max-w-5xl"
        >
          Birou Individual Notarial
          <br />
          Todașcă Mihaela Iuliana
        </motion.h1>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left w-24 h-[2px] bg-gold mt-10 md:mt-14 mb-10 md:mb-14"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed mb-12"
        >
          Servicii notariale <span className="italic text-gold">de încredere</span> în Galați.
          Profesionalism, transparență și dedicare pentru fiecare client.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#contact" className="btn-primary">
            Contactează-ne
            <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
          </a>
          <a href="#servicii" className="btn-outline">
            Servicii
          </a>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="border-t border-zinc-100"
      >
        <div className="max-container px-6 md:px-10 lg:px-16 py-5 flex flex-wrap items-center gap-x-10 gap-y-3 text-[13px] text-zinc-400">
          <span>Strada Traian 56A, Galați</span>
          <span className="hidden md:inline text-zinc-200">|</span>
          <span>L–J 09:00–16:00, V 09:00–14:00</span>
          <span className="hidden md:inline text-zinc-200">|</span>
          <a href="tel:0236327657" className="text-zinc-950 hover:text-gold transition-colors">
            0236 327 657
          </a>
        </div>
      </motion.div>
    </section>
  );
}
