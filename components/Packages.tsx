import Image from "next/image";
import { SectionHeading } from "./Section";
import { EnquiryButton } from "./EnquiryButton";
import { offer, packages, site } from "@/lib/site";

export function Packages() {
  return (
    <section id="packages" className="bg-brand-50/60 py-16">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tour Packages"
          title="Kashmir tour packages with 25% Diwali offer"
          intro="Private, customisable itineraries at the best price — apply code DIWALI25 on any package below."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-700/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-36">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-0.5 text-[0.7rem] font-bold text-brand-900">
                  {p.popular ? "Most booked · 25% off" : "25% off"}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-brand-600">
                  {p.nights}
                </p>
                <h3 className="mt-0.5 text-base font-bold leading-snug text-brand-900">
                  {p.title}
                </h3>

                <ul className="mt-2.5 space-y-1.5 text-[0.8rem] text-brand-900/70">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-brand-500">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex items-baseline gap-1 border-t border-brand-700/10 pt-3">
                  <span className="text-lg font-extrabold text-brand-900">
                    {p.price}
                  </span>
                  <span className="text-[0.72rem] text-brand-900/55">
                    {p.priceNote}
                  </span>
                  <span className="ml-auto text-[0.7rem] font-semibold text-brand-600">
                    after {offer.code}
                  </span>
                </div>

                <div className="mt-3">
                  <EnquiryButton packageName={p.title} label="Enquire Now" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brand-900/70">
          Need a custom plan? Call{" "}
          <a
            href={`tel:${site.phone}`}
            className="font-semibold text-brand-700 underline"
          >
            {site.phoneDisplay}
          </a>{" "}
          — free quote in minutes.
        </p>
      </div>
    </section>
  );
}
