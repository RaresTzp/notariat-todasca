"use client";

import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white">
      {/* Gold line */}
      <div className="h-px bg-gold" />

      {/* CTA */}
      <div className="max-container px-6 md:px-10 lg:px-16 py-20 md:py-28 text-center border-b border-white/10">
        <p className="label-sm text-zinc-500 mb-4">Aveți nevoie de ajutor?</p>
        <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.05] mb-8">
          Contactați-ne pentru o<br />
          <span className="italic text-gold">consultație</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:0236327657" className="btn-gold">
            Sună: 0236 327 657
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-7 py-3 border border-white/20 text-white text-[13px] font-medium tracking-[0.08em] uppercase hover:border-white/60 transition-colors duration-300">
            Trimite un mesaj
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="max-container px-6 md:px-10 lg:px-16 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <Logo size={64} className="text-white" />
            </div>
            <p className="text-zinc-500 text-[13px] leading-relaxed">
              Birou Individual Notarial Todașcă Mihaela Iuliana. Servicii notariale profesionale în Galați.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="label-sm text-zinc-500 mb-4">Servicii</p>
            <ul className="space-y-2 text-[13px]">
              {[
                "Contracte Notariale",
                "Succesiuni și Moșteniri",
                "Procuri Notariale",
                "Divorțuri la Notar",
                "Declarații și Legalizări",
                "Consultanță Notarială",
              ].map((s) => (
                <li key={s}>
                  <a href="#servicii" className="text-zinc-500 hover:text-gold transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <p className="label-sm text-zinc-500 mb-4">Navigare</p>
            <ul className="space-y-2 text-[13px]">
              {[
                { href: "#acasa", label: "Acasă" },
                { href: "#servicii", label: "Servicii" },
                { href: "#despre", label: "Despre Noi" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-zinc-500 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-sm text-zinc-500 mb-4">Contact</p>
            <div className="space-y-3 text-[13px] text-zinc-500">
              <p>Strada Traian 56A<br />800049, Galați</p>
              <p>
                <a href="tel:0236327657" className="hover:text-gold transition-colors">0236 327 657</a>
              </p>
              <p>
                <a href="mailto:bnpmunteanu@mail.com" className="hover:text-gold transition-colors">
                  bnpmunteanu@mail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-container px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-zinc-600">
            &copy; {year} BIN Todașcă Mihaela Iuliana. Toate drepturile rezervate.
          </p>
          <p className="text-[11px] text-zinc-700">
            Membru Camera Notarilor Publici Galați
          </p>
        </div>
      </div>
    </footer>
  );
}
