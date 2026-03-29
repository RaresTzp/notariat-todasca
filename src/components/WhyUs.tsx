"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1000+", label: "Acte autentificate" },
  { value: "15+", label: "Ani de experiență" },
  { value: "100%", label: "Clienți mulțumiți" },
  { value: "6", label: "Categorii de servicii" },
];

export default function WhyUs() {
  return (
    <section className="border-t border-zinc-100 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="max-container px-6 md:px-10 lg:px-16 py-16 md:py-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-zinc-100">
          {stats.map((s) => (
            <div key={s.label} className="md:px-10 first:md:pl-0 last:md:pr-0 text-center md:text-left">
              <div className="font-serif text-4xl md:text-5xl text-zinc-950 mb-2">
                {s.value}
              </div>
              <div className="label-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
