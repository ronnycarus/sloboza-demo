"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const services = [
  {
    title: "Sloopwerk",
    desc: "Complete en veilige sloopwerken voor woningen en bedrijfspanden.",
  },
  {
    title: "Renovatiesloop",
    desc: "Gericht slopen voor renovaties zonder schade aan omliggende delen.",
  },
  {
    title: "Badkamer slopen",
    desc: "Snel en netjes uw badkamer laten verwijderen en afvoeren.",
  },
  {
    title: "Keuken slopen",
    desc: "Efficiënt verwijderen van keukens inclusief afvoer van materiaal.",
  },
];

export default function Services() {
  return (
    <section id="diensten" className="bg-[#1a1a1a] py-20">
      <Container>
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Onze diensten
          </h2>
          <p className="text-gray-400 mt-4">
            Professionele sloopdiensten voor particulieren en bedrijven.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-b from-[#1a1a1a] to-[#111] p-6 rounded-2xl border border-white/5 hover:border-orange-500/50 transition"
            >
              <div className="text-orange-500 text-3xl mb-4">🛠️</div>

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-6 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}