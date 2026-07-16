import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import PageTransition from "./_shared/components/PageTransition";

const sans_serif = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans_serif",
});

const serif = localFont({
  src: "../public/fonts/PlayfairDisplay-latin.woff2",
  weight: "400 700",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://institutoeuropean.com"),
  title: "Fórum Internacional em Direito Penal Econômico",
  description:
    "Portal oficial do Fórum Internacional em Direito Penal Econômico promovido pelo European Institute. Dias 09 e 10 de julho em São Paulo.",
  openGraph: {
    title: "Fórum Internacional em Direito Penal Econômico",
    description:
      "Portal oficial do Fórum Internacional em Direito Penal Econômico promovido pelo European Institute.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fórum Internacional em Direito Penal Econômico",
    description:
      "Portal oficial do Fórum Internacional em Direito Penal Econômico promovido pelo European Institute.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${sans_serif.variable} ${serif.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
