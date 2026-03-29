import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birou Individual Notarial Todașcă Mihaela Iuliana | Notar Public Galați",
  description:
    "Servicii notariale profesionale în Galați. Autentificări acte, succesiuni, procuri, divorțuri la notar, declarații și consultanță notarială. Strada Traian 56A, Galați.",
  keywords:
    "notar public galati, birou notarial galati, succesiuni galati, procuri galati, divorturi notar galati, autentificare acte galati, notar todasca, birou individual notarial galati",
  openGraph: {
    title: "Birou Individual Notarial Todașcă Mihaela Iuliana | Notar Public Galați",
    description:
      "Servicii notariale profesionale în Galați — autentificări, succesiuni, procuri, divorțuri și consultanță notarială.",
    type: "website",
    locale: "ro_RO",
  },
  robots: { index: true, follow: true },
  other: { "geo.region": "RO-GL", "geo.placename": "Galați" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Notary",
              name: "Birou Individual Notarial Todașcă Mihaela Iuliana",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Traian 56A",
                addressLocality: "Galați",
                postalCode: "800049",
                addressCountry: "RO",
              },
              telephone: "+40236327657",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "16:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday"],
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$",
              areaServed: { "@type": "City", name: "Galați" },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
