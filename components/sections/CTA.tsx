"use client";

import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-yellow-400 py-12 md:py-16">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Klaar om uw project te starten?
          </h2>

          <p className="mt-3 text-black/80">
            Vraag vandaag nog een vrijblijvende offerte aan.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              Offerte aanvragen
            </a>

            <a
              href="tel:+31624837855"
              className="border border-black text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Bel direct
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
