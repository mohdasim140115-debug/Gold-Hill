import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You — Enquiry Received",
  description: "Your Kashmir trip enquiry has been received.",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}) {
  const { p } = await searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-50/60 px-5 py-16 text-center">
      {/* GTM / Google Ads conversion event on this page load */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'lead_submitted'});",
        }}
      />

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-900/5 sm:p-10">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-4xl text-brand-700">
          ✓
        </div>
        <h1 className="text-2xl font-extrabold text-brand-900">
          Thank you! Your enquiry is in.
        </h1>
        <p className="mt-3 text-sm text-brand-900/70">
          {p ? (
            <>
              We&apos;ve received your interest in{" "}
              <strong className="text-brand-800">{p}</strong>.{" "}
            </>
          ) : null}
          Our Kashmir travel expert will call you shortly with a customised
          itinerary and the best price. Please keep your phone handy.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <a
            href={site.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Message us on WhatsApp now
          </a>
          <a
            href={`tel:${site.phone}`}
            className="rounded-full border border-brand-700/20 px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
          >
            Call {site.phoneDisplay}
          </a>
        </div>

        <p className="mt-6 text-xs text-brand-900/50">
          Prefer email? Write to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-brand-700 underline"
          >
            {site.email}
          </a>
        </p>

        <Link
          href="/"
          className="mt-6 inline-block text-xs font-semibold text-brand-600 hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
