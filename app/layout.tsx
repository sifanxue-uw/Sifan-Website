import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Archivo_Black } from "next/font/google";
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

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const ebGaramond = EB_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sifan Xue",
  description: "Portfolio of Sifan Xue, UX Designer",
  icons: {
    icon: "/favicon-logo.png?v=2",
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
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Grain />
        <LanguageProvider>
          <Cursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
