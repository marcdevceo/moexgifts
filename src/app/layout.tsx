import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../ui-framework/theme/globals.css";
import { navlinks } from "../data/navlinks";
import {
  fontFamilyMap,
  Footer,
  greatVibes,
  lobster,
  merriweather,
  NavBarCart,
  outfit,
  pacifico,
  playfair,
  poppins,
  rubik,
} from "@/ui-framework";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoEx Gifts Shop",
  description:
    "MoEx Gifts is a modern e-commerce demo that celebrates meaningful gift giving. Built with Next.js, Stripe Checkout, and a custom UI framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}
          ${greatVibes.variable} ${rubik.variable} ${pacifico.variable} 
          ${poppins.variable} ${outfit.variable} ${fontFamilyMap.fancy} 
          ${merriweather.variable} ${lobster.variable} antialiased`}
      >
        <NavBarCart title="MoEx Gifts" links={navlinks} />
        {children}
        <Footer companyName="MoEx Gifts" textAlign="center" />
      </body>
    </html>
  );
}
