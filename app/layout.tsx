import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sloboza – Sloopwerken & Betonboringen",
  description:
    "Professionele sloopwerken en betonboringen in Zuid-Holland. Snel, veilig en vakkundig uitgevoerd.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body
        className={`${inter.className} bg-[#0f0f0f] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}