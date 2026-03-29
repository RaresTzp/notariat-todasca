"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-[#FAFAF9] border-t border-zinc-100">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="label-sm mb-4">Contact</p>
          <h2 className="heading-xl max-w-lg">
            Suntem aici<br />
            <span className="italic text-gold">pentru dvs.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — info + map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Contact details */}
            <div className="space-y-6">
              {[
                { label: "Adresă", value: "Strada Traian 56A, 800049 Galați" },
                { label: "Telefon", value: "0236 327 657", href: "tel:0236327657" },
                { label: "Email", value: "bnpmunteanu@mail.com", href: "mailto:bnpmunteanu@mail.com" },
                { label: "Program", value: "L–J 09:00–16:00 | V 09:00–14:00" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="label-sm mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-zinc-950 hover:text-gold transition-colors text-base">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-950 text-base">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="border border-zinc-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.5!2d28.0503!3d45.4353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b6df55e809e1c9%3A0xae9145034bc40615!2sBirou%20Notarial%20Todasca%20Mihaela%20Iuliana!5e0!3m2!1sro!2sro!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locație birou notarial"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-zinc-200 p-8 md:p-12">
              <p className="label-sm mb-8">Trimiteți un mesaj</p>

              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="label-sm mb-3 block">Nume complet</label>
                    <input
                      type="text"
                      placeholder="Ion Popescu"
                      className="w-full border-b border-zinc-200 pb-3 text-zinc-950 placeholder:text-zinc-300 focus:border-gold outline-none transition-colors bg-transparent text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="label-sm mb-3 block">Telefon</label>
                    <input
                      type="tel"
                      placeholder="0722 123 456"
                      className="w-full border-b border-zinc-200 pb-3 text-zinc-950 placeholder:text-zinc-300 focus:border-gold outline-none transition-colors bg-transparent text-[15px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="label-sm mb-3 block">Email</label>
                  <input
                    type="email"
                    placeholder="email@exemplu.ro"
                    className="w-full border-b border-zinc-200 pb-3 text-zinc-950 placeholder:text-zinc-300 focus:border-gold outline-none transition-colors bg-transparent text-[15px]"
                  />
                </div>

                <div>
                  <label className="label-sm mb-3 block">Serviciul dorit</label>
                  <select className="w-full border-b border-zinc-200 pb-3 text-zinc-400 focus:border-gold outline-none transition-colors bg-transparent text-[15px] cursor-pointer">
                    <option value="">Selectați...</option>
                    <option>Contracte Notariale</option>
                    <option>Succesiuni și Moșteniri</option>
                    <option>Procuri Notariale</option>
                    <option>Divorțuri la Notar</option>
                    <option>Declarații și Legalizări</option>
                    <option>Consultanță Notarială</option>
                    <option>Altele</option>
                  </select>
                </div>

                <div>
                  <label className="label-sm mb-3 block">Mesaj</label>
                  <textarea
                    rows={4}
                    placeholder="Descrieți solicitarea..."
                    className="w-full border-b border-zinc-200 pb-3 text-zinc-950 placeholder:text-zinc-300 focus:border-gold outline-none transition-colors bg-transparent text-[15px] resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold">
                  Trimite mesajul
                  <ArrowRight className="w-4 h-4 ml-2" strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
