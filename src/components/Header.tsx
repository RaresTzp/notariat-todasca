"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "#servicii", label: "Servicii" },
  { href: "#despre", label: "Despre" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-sm border-b border-zinc-100" : "bg-transparent"
      }`}
    >
      <div className="max-container flex items-center justify-between h-16 md:h-20 px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <a href="#acasa" className="flex items-center">
          <Logo size={68} className="text-zinc-950" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-zinc-500 hover:text-zinc-950 transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:0236327657" className="btn-outline text-[12px] py-2 px-5">
            0236 327 657
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-600"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors py-2 border-b border-zinc-50"
                >
                  {l.label}
                </a>
              ))}
              <a href="tel:0236327657" className="btn-primary mt-2 text-center">
                Sună: 0236 327 657
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
