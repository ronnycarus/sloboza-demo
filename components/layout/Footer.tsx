"use client";

import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 mt-20">
      <Container>

        <div className="grid md:grid-cols-3 gap-10 py-14">

          {/* LOGO + TEXT */}
          <div>
            <img
              src="/logo.png"
              alt="Sloboza"
              className="w-32 mb-4 hover:opacity-80 transition"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Professioneel sloopwerk, betonboringen en zaagwerken in Zuid-Holland.
            </p>
          </div>

          {/* NAVIGATIE */}
          <div>
            <h3 className="font-semibold mb-4">Navigatie</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <a href="#diensten" className="hover:text-orange-500 transition">
                Diensten
              </a>
              <a href="#projecten" className="hover:text-orange-500 transition">
                Projecten
              </a>
              <a href="#contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>

            <div className="text-gray-400 text-sm space-y-2">
              <p>
                <a
                  href="tel:+31624837855"
                  className="hover:text-orange-500 transition"
                >
                  +31 6 248 378 55
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@sloboza.nl"
                  className="hover:text-orange-500 transition"
                >
                  info@sloboza.nl
                </a>
              </p>

              <p>
                Koningin Julianastraat 13 <br />
                2841 VL Moordrecht
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 py-6 text-center text-gray-500 text-sm space-y-2">

          <p>
            ©️ {new Date().getFullYear()} Sloboza – Alle rechten voorbehouden
          </p>

          <p className="text-xs text-gray-600">
            Website door{" "}
            <a
              href="https://robbycarus.com"
              target="_blank"
              className="hover:text-orange-500 transition"
            >
              Robby Carus
            </a>{" "}
            | Web developer
          </p>

        </div>

      </Container>
    </footer>
  );
}