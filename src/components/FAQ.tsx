"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Ce acte sunt necesare pentru procedura de succesiune?",
    a: "Certificatul de deces, acte de stare civilă ale moștenitorilor (certificate de naștere, căsătorie), actele de proprietate ale bunurilor, certificat fiscal de la Administrația Financiară și actul de identitate al moștenitorilor. La prima consultație vă indicăm exact documentele necesare.",
  },
  {
    q: "Cât costă un contract de vânzare-cumpărare la notar?",
    a: "Costul depinde de valoarea tranzacției și include onorariul notarial, impozitul pe transferul proprietății și taxa de publicitate imobiliară. Vă oferim un calcul exact al costurilor la prima consultație, fără obligații.",
  },
  {
    q: "Se poate face divorțul la notar?",
    a: "Da, dacă ambii soți sunt de acord. Procedura durează aproximativ 30 de zile. Dacă există copii minori, soții trebuie să convină asupra custodiei, pensiei alimentare și programului de vizite.",
  },
  {
    q: "Ce documente sunt necesare pentru o procură?",
    a: "Actul de identitate al mandantului, datele de identificare ale mandatarului și documente specifice obiectului procurii — pentru procură auto: cartea de identitate a vehiculului, pentru procură imobiliară: actul de proprietate.",
  },
  {
    q: "Care este programul de lucru?",
    a: "Luni – Vineri, între orele 09:00 și 17:00. Pentru situații urgente, contactați-ne telefonic la 0236 327 657. Recomandăm programarea în avans.",
  },
  {
    q: "Oferiți servicii notariale la domiciliu?",
    a: "Da, în situații excepționale — imobilitate, internare în spital sau alte circumstanțe care împiedică deplasarea la birou. Contactați-ne pentru detalii.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-spacing bg-white border-t border-zinc-100">
      <div className="max-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <p className="label-sm mb-4">FAQ</p>
            <h2 className="heading-lg">
              Întrebări<br />
              <span className="italic text-gold">frecvente</span>
            </h2>
          </motion.div>

          {/* Right questions */}
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-t border-zinc-100 last:border-b"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-base md:text-lg font-medium pr-8 transition-colors duration-200 ${open === i ? "text-zinc-950" : "text-zinc-600 group-hover:text-zinc-950"}`}>
                    {faq.q}
                  </span>
                  <span className={`text-xl font-light flex-shrink-0 w-6 text-center transition-colors duration-200 ${open === i ? "text-gold" : "text-zinc-300"}`}>
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-zinc-400 text-[15px] leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
