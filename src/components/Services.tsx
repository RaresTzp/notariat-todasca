"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Contracte Notariale",
    description:
      "Redactăm și autentificăm toate tipurile de contracte, asigurându-ne că fiecare clauză vă protejează interesele. Peste 1000 de acte autentificate, 6 categorii de servicii și 100% clienți mulțumiți.",
    items: [
      "Contracte de vânzare-cumpărare — apartamente, case, terenuri",
      "Contracte de donație — transfer gratuit de proprietate",
      "Contracte de întreținere — îngrijire în schimbul unui bun",
      "Contracte de ipotecă — garantarea unui credit cu imobil",
      "Contracte de partaj — împărțirea bunurilor între coproprietari",
      "Convenții matrimoniale — regimul bunurilor între soți",
    ],
  },
  {
    num: "02",
    title: "Succesiuni și Moșteniri",
    description:
      "Vă ghidăm pas cu pas prin procedura succesorală, de la deschiderea dosarului până la eliberarea certificatului de moștenitor. Ne asigurăm că totul decurge cât mai simplu și rapid.",
    items: [
      "Certificate de moștenitor — calitatea de moștenitor și cota-parte",
      "Testamente autentice — întocmirea ultimei voințe",
      "Acte de opțiune succesorală — acceptare sau renunțare",
      "Partaj succesoral — împărțirea bunurilor între moștenitori",
      "Ieșirea din indiviziune — mai mulți moștenitori, un singur bun",
    ],
  },
  {
    num: "03",
    title: "Procuri Notariale",
    description:
      "Prin procură, împuterniciți o persoană de încredere să acționeze în numele dumneavoastră. Redactăm procura exact după nevoile dvs., specificând clar operațiunile permise mandatarului.",
    items: [
      "Procuri speciale — pentru vânzarea unui imobil sau alt act precis",
      "Procuri generale — administrarea bunurilor și intereselor",
      "Procuri auto — înmatriculare, radiere, vânzare vehicul",
      "Procuri pentru instanță — reprezentare judecătorească",
      "Procuri bancare — gestionare conturi și operațiuni",
      "Procuri pentru succesiune — reprezentare în procedura succesorală",
    ],
  },
  {
    num: "04",
    title: "Divorțuri la Notar",
    description:
      "Dacă ambii soți sunt de acord, divorțul la notar este cea mai rapidă și discretă soluție. Procedura durează aproximativ 30 de zile, fără prezența în instanță.",
    items: [
      "Divorț prin acord fără copii — procedură simplificată în 30 de zile",
      "Divorț prin acord cu copii minori — custodie, pensie, program vizite",
      "Partaj bunuri comune — împărțirea bunurilor din căsătorie",
      "Revenire la numele anterior — opțional la cerere",
    ],
  },
  {
    num: "05",
    title: "Declarații și Legalizări",
    description:
      "Vă ajutăm cu legalizarea oricărui document, certificarea copiilor conform cu originalul și autentificarea declarațiilor notariale necesare în diverse proceduri.",
    items: [
      "Declarații pe propria răspundere — proceduri administrative sau juridice",
      "Legalizări copii — certificarea conformității cu originalul",
      "Legalizări semnături — atestarea identității semnatarului",
      "Legalizări traduceri — certificarea traducerilor autorizate",
      "Dare de dată certă — atestarea oficială a datei unui document",
    ],
  },
  {
    num: "06",
    title: "Consultanță Notarială",
    description:
      "Înainte de orice tranzacție, vă explicăm pe înțelesul dumneavoastră ce presupune fiecare pas, ce acte sunt necesare și care sunt costurile. Nu semnați nimic fără să înțelegeți totul.",
    items: [
      "Consiliere la tranzacții imobiliare — verificarea actelor și legalității",
      "Verificări în registrele publice — Cartea Funciară, RNPM",
      "Redactare acte și contracte — adaptate situației dumneavoastră",
      "Informare privind taxe — calcul transparent al costurilor",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicii" className="section-spacing bg-white border-t border-zinc-100">
      <div className="max-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <p className="label-sm mb-4">Servicii</p>
          <h2 className="heading-xl max-w-xl">
            Ce vă putem<br />
            <span className="italic text-gold">oferi</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16">
          {services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group py-10 border-t-2 border-zinc-100 hover:border-gold transition-colors duration-500"
            >
              {/* Number + Title */}
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-serif text-3xl text-zinc-200 group-hover:text-gold transition-colors duration-500">
                  {s.num}
                </span>
                <h3 className="font-serif text-2xl md:text-[1.7rem] text-zinc-950 leading-tight">
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                {s.description}
              </p>

              {/* Items */}
              <ul className="space-y-2">
                {s.items.map((item) => {
                  const [name, ...rest] = item.split(" — ");
                  const detail = rest.join(" — ");
                  return (
                    <li key={item} className="flex items-start gap-3 text-[14px]">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span>
                        <span className="text-zinc-700 font-medium">{name}</span>
                        {detail && <span className="text-zinc-400"> — {detail}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
