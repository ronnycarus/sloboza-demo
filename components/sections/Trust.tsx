"use client";

import Container from "@/components/layout/Container";

const items = [
  {
    title: "10+ jaar ervaring",
    desc: "Jarenlange ervaring in sloopwerken en betonbewerking.",
  },
  {
    title: "Snelle service",
    desc: "Binnen 24 uur reactie en snelle uitvoering op locatie.",
  },
  {
    title: "Netjes opgeleverd",
    desc: "Wij werken schoon, veilig en laten alles netjes achter.",
  },
  {
    title: "Scherpe prijzen",
    desc: "Transparante tarieven zonder verrassingen achteraf.",
  },
];

export default function Trust() {
  return (
    <section className="bg-[#111] py-20">
      <Container>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Waarom kiezen voor Sloboza?
          </h2>
          <p className="text-gray-400 mt-4">
            Betrouwbaar, professioneel en altijd gericht op kwaliteit.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 hover:border-orange-500/40 transition"
            >

              {/* Icon */}
              <div className="text-orange-500 text-2xl mb-3">
                ✔
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
