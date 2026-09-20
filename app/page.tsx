import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { SeoContent } from "@/components/SeoContent";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { faqs, packages, seoKeywords, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kashmir Tour Packages — Srinagar, Gulmarg, Sonmarg & Pahalgam Trips",
  description:
    "Book customised Kashmir tour packages with Gold Hill Luxe — Srinagar, Gulmarg, Sonmarg & Pahalgam holiday packages for family, couple and groups at the best price. Local Kashmir tour operators, 24×7 support.",
  keywords: seoKeywords,
  alternates: { canonical: "/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const offerLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: packages.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristTrip",
      name: p.title,
      description: p.highlights.join(". "),
      provider: { "@type": "TravelAgency", name: site.name, url: site.url },
    },
  })),
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Packages />
        <WhyUs />
        <Testimonials />
        <Faq />
        <SeoContent />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerLd) }}
      />
    </>
  );
}
