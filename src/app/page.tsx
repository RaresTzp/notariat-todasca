import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingContact />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
