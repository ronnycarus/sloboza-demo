"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 transition ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      />

      {/* NAV CONTENT */}
      <div className="relative max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Sloboza"
          className="w-28 md:w-32 hover:opacity-80 transition"
        />

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#diensten" className="relative group">
            Diensten
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300" />
          </a>

          <a href="#projecten" className="relative group">
            Projecten
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300" />
          </a>

          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300" />
          </a>

          {/* CTA */}
          <a
            href="#contact"
            className="ml-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Offerte
          </a>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center text-center">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            ✕
          </button>

          {/* LINKS */}
          <div className="flex flex-col gap-8 text-2xl font-semibold">

            <a
              href="#diensten"
              onClick={() => setOpen(false)}
              className="hover:text-orange-500 transition"
            >
              Diensten
            </a>

            <a
              href="#projecten"
              onClick={() => setOpen(false)}
              className="hover:text-orange-500 transition"
            >
              Projecten
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-orange-500 transition"
            >
              Contact
            </a>

          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold"
          >
            Offerte aanvragen
          </a>

        </div>
      )}
    </header>
  );
}