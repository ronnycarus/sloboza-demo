"use client";

import Container from "@/components/layout/Container";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f0f0f] py-20">
      <Container>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Neem contact op
            </h2>

            <p className="text-gray-400 mt-4">
              Heeft u een sloopproject? Neem vrijblijvend contact met ons op.
              Wij reageren binnen 24 uur.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-8 space-y-5 text-gray-300">

              <div>
                <p className="text-gray-400 text-sm">Telefoon</p>
                <a href="tel:+31624837855" className="hover:text-orange-500">
                  +31 6 248 378 55
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm">E-mail</p>
                <a href="mailto:info@sloboza.nl" className="hover:text-orange-500">
                  info@sloboza.nl
                </a>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Adres</p>
                <p>
                  Koningin Julianastraat 13 <br />
                  2841 VL Moordrecht
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 space-y-4">

            <input
              type="text"
              placeholder="Naam"
              className="w-full p-3 rounded-lg bg-[#111] border border-white/10 focus:outline-none"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 rounded-lg bg-[#111] border border-white/10 focus:outline-none"
            />

            <textarea
              placeholder="Bericht"
              rows={4}
              className="w-full p-3 rounded-lg bg-[#111] border border-white/10 focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold p-3 rounded-lg"
            >
              Verstuur aanvraag
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}
