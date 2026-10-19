import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/context/language";
import { Cursor, Grain } from "@/app/components/GlobalEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sifan Xue",
  description: "Portfolio of Sifan Xue, UX Designer",
  icons: {
    icon: "/logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Cursor />
        <Grain />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
