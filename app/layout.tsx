import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I.E. Ann Goulden",
  description:
    "Descubre la Institución Educativa Ann Goulden en Piura: educación de calidad, actividades extracurriculares y desarrollo integral de tus hijos.",
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
    url: "https://www.anngoulden.org",
    title: "I.E. Ann Goulden ",
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
  twitter: {
    card: "summary_large_image",
    
    title: "I.E. Ann Goulden -",
    description:
      "Educación de calidad y desarrollo integral de tus hijos en la I.E. Ann Goulden, Piura.",
    images: ["/logo_colegio.png"],
  },
  authors: [
    {
      name: "Equipo de Desarrollo Ann Goulden",
      url: "https://www.anngoulden.org",
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
