import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I.E Ann Goulden",
  description:
    "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
  keywords: [
    "PureLanding",
    "PureLanding Landing Page",
    "PureLanding Landing Page Template",
    "PureLanding Page",
    "Shadcn UI Landing Page",
    "Shadcn UI Blocks",
    "Shadcn UI",
    "Landing Page",
    "Tailwind CSS Landing Page",
    "Beautiful Shadcn UI Landing Page",
    "Next.js 15 Landing Page",
    "Simple Landing Page",
    "Landing Page Template",
    "Landing Page Design",
  ],
  openGraph: {
    type: "website",
    siteName: "PureLanding",
    locale: "en_ES",
    url: "https://shadcn-landing-page.vercel.app",
    title: "PureLanding - Beautiful Shadcn UI Landing Page",
    description:
      "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
    images: [
      {
        url: "/logo_colegio.png",
        width: 1200,
        height: 630,
        alt: "PureLanding Preview",
      },
    ],
  },
  authors: [
    {
      name: "Akash Moradiya",
      url: "https://shadcnui-blocks.com",
    },
  ],
  creator: "Akash Moradiya",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
