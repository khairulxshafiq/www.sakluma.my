import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JumpBar from "@/components/JumpBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { brand, contact } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — Salai Tempurung Kelapa`,
    template: `%s | ${brand.name}`,
  },
  description: brand.usp,
  keywords: ["sakluma", "saklomak", "salai", "tempurung kelapa", "daging salai", "ayam salai", "itik salai", "keli salai", "malaysia"],
  openGraph: {
    title: `${brand.name} — Salai Tempurung Kelapa`,
    description: brand.usp,
    type: "website",
    locale: "ms_MY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms">
      <body className="pb-16 md:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <JumpBar />
        <WhatsAppFloat />
        <a
          href={`mailto:${contact.email}`}
          className="hidden"
          aria-hidden="true"
        />
      </body>
    </html>
  );
}
