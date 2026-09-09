"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SectionHeading } from "./Section";
import { site } from "@/lib/site";
import { pushLeadEvent, sendEnquiry, whatsappFallback } from "@/lib/enquiry";

export function Contact() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const payload = {
      name: String(f.get("name") || ""),
      phone: String(f.get("phone") || ""),
      date: String(f.get("month") || ""),
      pax: String(f.get("pax") || ""),
      message: String(f.get("message") || ""),
      package: "Custom Kashmir trip (contact form)",
      source: "contact-section",
    };

    setBusy(true);
    const ok = await sendEnquiry(payload);
    pushLeadEvent(payload.package);
    if (!ok) window.open(whatsappFallback(payload), "_blank");
    router.push("/thank-you");
  }

  return (
    <section id="contact" className="bg-brand-900 py-24 text-white">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
            Contact
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Let&apos;s plan your Kashmir trip
          </h2>
          <p className="mt-4 text-white/80">
            Tell us your dates and what you have in mind. We reply within a few
            hours with a written itinerary and a clear quote.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-brand-300">Phone / WhatsApp</dt>
              <dd>
                <a href={`tel:${site.phone}`} className="hover:underline">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-300">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-300">Office</dt>
              <dd className="text-white/80">
                Main Market, Srinagar–Gulmarg Road, near UG Restaurant, Kunzer,
                Srinagar, Jammu &amp; Kashmir 193404
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-300">Hours</dt>
              <dd className="text-white/80">Open daily, 8:00 AM – 9:00 PM</dd>
            </div>
          </dl>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Gold Hill Luxe office location map"
              src="https://www.google.com/maps?q=Kunzer,+Srinagar,+Jammu+and+Kashmir+193404&output=embed"
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-white p-6 text-brand-900 shadow-xl sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Name
              <input
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-brand-700/20 px-3 py-2 text-sm outline-none focus:border-brand-500"
              />
            </label>
            <label className="text-sm font-medium">
              Phone
              <input
                name="phone"
                required
                inputMode="tel"
                className="mt-1 w-full rounded-lg border border-brand-700/20 px-3 py-2 text-sm outline-none focus:border-brand-500"
              />
            </label>
            <label className="text-sm font-medium">
              Travel date
              <input
                name="month"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="mt-1 w-full rounded-lg border border-brand-700/20 px-3 py-2 text-sm outline-none focus:border-brand-500"
              />
            </label>
            <label className="text-sm font-medium">
              Travellers
              <input
                name="pax"
                placeholder="e.g. 2 adults"
                className="mt-1 w-full rounded-lg border border-brand-700/20 px-3 py-2 text-sm outline-none focus:border-brand-500"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium">
            What are you looking for?
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-lg border border-brand-700/20 px-3 py-2 text-sm outline-none focus:border-brand-500"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="mt-5 w-full rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:opacity-60"
          >
            {busy ? "Sending…" : "Send enquiry"}
          </button>
          <p className="mt-3 text-center text-xs text-brand-900/50">
            Prefer email? Write to {site.email}
          </p>
        </form>
      </div>
    </section>
  );
}
