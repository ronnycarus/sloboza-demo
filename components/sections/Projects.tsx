"use client";

import Container from "@/components/layout/Container";

const projects = [
  {
    title: "Badkamer sloop Rotterdam",
    desc: "Complete badkamer zorgvuldig gesloopt en afgevoerd binnen 1 dag.",
  },
  {
    title: "Keuken verwijdering Den Haag",
    desc: "Oude keuken professioneel verwijderd zonder schade aan muren.",
  },
  {
    title: "Renovatiesloop Leiden",
    desc: "Binnenmuren en vloeren veilig gesloopt voor renovatieproject.",
  },
];

export default function Projects() {
  return (
    <section id="projecten" className="bg-black py-20">
      <Container>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Recente projecten
          </h2>
          <p className="text-gray-400 mt-4">
            Enkele voorbeelden van ons werk in de regio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-orange-500/50 transition"
            >

              {/* Fake visual block */}
              <div className="h-40 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#222] flex items-center justify-center text-gray-400 text-sm">
                Project afbeelding
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mt-5">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Hover line */}
              <div className="mt-6 h-[2px] w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
