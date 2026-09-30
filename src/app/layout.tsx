import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import PS3Background from "./components/ui/PS3Background";
import { NavBar, Footer } from "./components/index.components";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Portfolio",
  description: "Bienvenido a mi portafolio personal",
};

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
