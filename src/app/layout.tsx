import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import PS3Background from "./components/ui/PS3Background";
import { NavBar, Footer } from "./components/index.components";

export const metadata: Metadata = {
  title: "David Tejedor | Desarrollador Fullstack",
  description: "Portafolio profesional de David Tejedor",
  openGraph: {
    title: "David Tejedor | Desarrollador Fullstack",
    description: "Portafolio profesional de David Tejedor",
    url: "https://david-tejedor-portfolio.vercel.app",
    siteName: "David Tejedor Portfolio",
    locale: "es_AR",
    type: "website",
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}      >
        <PS3Background />

        <NavBar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
