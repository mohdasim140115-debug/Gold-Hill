import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { seoKeywords, site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], display: "swap", variable: "--font-caveat" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Gold Hill Luxe Tour and Travel | Luxury Kashmir Holiday Packages",
    template: "%s | Gold Hill Luxe Tour and Travel",
  },
  description: site.description,
  keywords: [...seoKeywords, "Gold Hill Luxe Tour and Travel"],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  category: "travel",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Gold Hill Luxe Tour and Travel | Luxury Kashmir Holiday Packages",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Hill Luxe Tour and Travel | Luxury Kashmir Holiday Packages",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "LocalBusiness"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      image: `${site.url}/og.jpg`,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      openingHours: site.openingHours,
      areaServed: "Jammu and Kashmir, India",
      sameAs: [site.social.instagram, site.social.facebook],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${caveat.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
