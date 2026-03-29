"use client";

import { motion } from "framer-motion";

const credentials = [
  "Membră Camera Notarilor Publici Galați",
  "Circumscripția Judecătoriei Galați",
  "Experiență vastă în acte notariale complexe",
  "Abordare personalizată pentru fiecare client",
];

export default function About() {
  return (
    <section id="despre" className="section-spacing bg-[#FAFAF9] border-t border-zinc-100">
      <div className="max-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left - content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="label-sm mb-4">Despre notar</p>
            <h2 className="heading-xl mb-10">
              Todașcă<br />
              <span className="italic text-gold">Mihaela Iuliana</span>
            </h2>

            <p className="font-serif text-xl text-zinc-950 italic mb-10">
              Notar Public — Galați
            </p>

            <div className="space-y-6 text-zinc-500 text-base leading-relaxed max-w-xl">
              <p>
                Cu o vastă experiență în domeniul notarial, Biroul Individual Notarial
                Todașcă Mihaela Iuliana oferă servicii complete și profesionale în orașul Galați.
                Ne dedicăm fiecărui client cu aceeași atenție la detalii,
                asigurând confidențialitate, corectitudine și eficiență.
              </p>
              <p>
                Fiecare client este tratat cu profesionalism, răbdare și amabilitate.
                Ne facem timp să ascultăm, să explicăm și să găsim cea mai bună
                soluție pentru situația dumneavoastră, într-un cadru discret și prietenos.
              </p>
            </div>
          </motion.div>

          {/* Right - credentials card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex items-end"
          >
            <div className="w-full border border-zinc-200 p-8 md:p-10">
              <p className="label-sm mb-6">Calificări</p>
              <ul className="space-y-5">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-[2px] bg-gold mt-3 flex-shrink-0" />
                    <span className="text-zinc-600 text-[15px] leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-6 border-t border-zinc-100">
                <p className="text-[13px] text-zinc-400">
                  Strada Traian 56A, 800049 Galați
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
