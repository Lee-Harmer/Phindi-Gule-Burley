import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phindi Gule | Communications. Wellness. Impact.",
  description:
    "Phindi Gule — South African broadcast journalist, speaker, moderator, wellness advocate, podcaster and entrepreneur. Book Phindi for your next event.",
  keywords:
    "Phindi Gule, South African speaker, moderator, broadcaster, wellness, running, podcast, Comrades Marathon",
  openGraph: {
    title: "Phindi Gule | Communications. Wellness. Impact.",
    description:
      "Broadcast journalist, speaker, moderator, wellness advocate and entrepreneur.",
    siteName: "Phindi Gule",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
