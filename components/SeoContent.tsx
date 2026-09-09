import { originCities, site, topSearched } from "@/lib/site";

export function SeoContent() {
  return (
    <section
      aria-labelledby="seo-heading"
      className="bg-brand-50/60 py-20"
    >
      <div className="container-x">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-brand-900/5 sm:p-12">
          <h2
            id="seo-heading"
            className="text-center text-xl font-extrabold uppercase tracking-[0.15em] text-brand-800 sm:text-2xl"
          >
            Best Travel Agency for Kashmir Tour
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-brand-900/75">
            <p>
              Plan your perfect <strong>Kashmir vacation</strong> with{" "}
              <strong>{site.name}</strong>, one of the{" "}
              <strong>best travel agencies for Kashmir tours</strong>. We are
              recognised as leading <strong>Kashmir tour operators</strong>{" "}
              delivering premium <strong>Kashmir holiday packages</strong> at the
              best price. Whether you are looking for a romantic{" "}
              <strong>Kashmir tour package for couples</strong>, a family
              holiday, or <strong>Kashmir group tour packages</strong>, we offer
              customised <strong>Kashmir itineraries</strong> covering Srinagar,
              Gulmarg, Sonmarg and Pahalgam.
            </p>

            <div className="grid gap-6 border-t border-brand-900/10 pt-6 sm:grid-cols-2 sm:divide-x sm:divide-brand-900/10">
              <p className="sm:pr-6">
                Get the best <strong>Kashmir trip cost</strong> with no hidden
                charges and 24×7 support. We take pride in our
                &ldquo;Guest First&rdquo; approach, handling every detail of your{" "}
                <strong>Kashmir trip plan</strong> with care and precision — from{" "}
                <strong>Srinagar tour packages</strong> and houseboats to{" "}
                <strong>Gulmarg tour packages</strong> and snow activities.
              </p>
              <p className="sm:pl-6">
                Travellers from{" "}
                <strong>{originCities.join(", ")}</strong> trust us for seamless
                and memorable <strong>Kashmir travel</strong> experiences,
                including <strong>Kashmir trip packages from Delhi</strong>,{" "}
                <strong>cheapest tour packages for Kashmir</strong> and{" "}
                <strong>Kashmir luxury tour packages</strong>.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-brand-900/10 pt-5 text-xs leading-relaxed text-brand-900/55">
            <span className="font-bold uppercase tracking-wide text-brand-600">
              Top searched:{" "}
            </span>
            {topSearched.map((k, i) => (
              <span key={k}>
                <a
                  href={`${site.social.whatsapp}?text=${encodeURIComponent(
                    `Hi Gold Hill Luxe, I'm looking for ${k}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase tracking-wide hover:text-brand-600"
                >
                  {k}
                </a>
                {i < topSearched.length - 1 && (
                  <span className="mx-2 text-brand-900/25">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
