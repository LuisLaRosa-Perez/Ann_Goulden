import CTABanner from "@/components/cta-banner";
import FAQ02 from "@/components/faq-02/faq-02";
import Features05 from "@/components/features-05/features-05";
import Footer from "@/components/footer";
import Hero02 from "@/components/hero-02/hero-02";
import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
            <main className="pt-16 xs:pt-20 sm:pt-24">
        <Hero02 />
        <Features05 />
        <FAQ02 />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <Analytics /> 
    </>
  );
}
