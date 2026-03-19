"use client";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-black border-t border-white/10">

      <a
        href="#contact"
        className="block text-center py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold"
      >
        Offerte aanvragen
      </a>

    </div>
  );
}