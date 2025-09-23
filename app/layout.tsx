import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I.E. Ann Goulden - Piura",
  description:
    "Plataforma web oficial de la Institución Educativa Ann Goulden, diseñada con Next.js 15, Tailwind CSS y Shadcn UI para impulsar la innovación educativa en Piura.",
  keywords: [
    "I.E. Ann Goulden",
    "Colegio Ann Goulden",
    "Educación Piura",
    "Plataforma Educativa",
    "Gestión Administrativa Escolar",
    "Landing Page Colegio",
    "Shadcn UI",
    "Next.js",
    "Tailwind CSS",
  ],
  openGraph: {
    type: "website",
    siteName: "I.E. Ann Goulden",
    locale: "es_PE",
    url: "https://www.ann-goulden.edu.pe",
    title: "I.E. Ann Goulden - Innovación Educativa en Piura",
    description:
      "Página oficial de la Institución Educativa Ann Goulden, con información sobre nuestra propuesta educativa, docentes y contacto.",
    images: [
      {
        url: "/logo_colegio.png",
        width: 1200,
        height: 630,
        alt: "Logo I.E. Ann Goulden",
      },
    ],
  },
  authors: [
    {
      name: "Equipo de Desarrollo Ann Goulden",
      url: "https://www.ann-goulden.edu.pe",
    },
  ],
  creator: "Institución Educativa Ann Goulden",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
