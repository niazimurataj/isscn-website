import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ISST | Institute for Shipping Security and Technology",
    template: "%s | ISST",
  },
  description:
    "Making borders and societies safer by empowering businesses to cut off the arteries of the global narcotics trade and strengthen supply chain security through technology.",
  keywords: [
    "shipping security",
    "supply chain technology",
    "supply chain",
    "traceability",
    "container security",
    "CTPAT",
    "BASC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
