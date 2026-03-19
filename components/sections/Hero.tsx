"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center bg-black relative overflow-hidden">

      {/* LIGHT EFFECT */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-orange-500/20 to-yellow-400/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Sloopwerk nodig?
            <br />
            <span className="text-orange-500">
              Wij regelen het snel en professioneel.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-6 text-lg"
          >
            Specialist in sloopwerken, betonboringen en renovaties.
          </motion.p>

          <p className="text-sm text-gray-500 mb-6">
            ✔ Gratis offerte • ✔ Binnen 24 uur reactie • ✔ Scherpe prijzen
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Offerte aanvragen
            </a>

            <a
              href="tel:+31624837855"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Bel direct
            </a>
          </motion.div>

          <p className="text-xs text-gray-600 mt-3">
            Vrijblijvend en zonder verplichtingen
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className="hidden md:block relative">

          <motion.video
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full h-[400px] object-cover rounded-2xl brightness-50 contrast-125"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </motion.video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent rounded-2xl" />

          {/* BORDER */}
          <div className="absolute inset-0 rounded-2xl border border-white/10" />

        </div>

      </div>
    </section>
  );
}