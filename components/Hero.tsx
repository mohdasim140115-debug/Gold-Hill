import Image from "next/image";
import { EnquiryButton } from "./EnquiryButton";
import { heroKeywords, offer, site } from "@/lib/site";

const IMG_MAIN = "/images/gulmarg.avif";
const IMG_LEFT = "/images/pahalgam.avif";
const IMG_RIGHT = "/images/trek-ridge.avif";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-800 pt-24 pb-10 text-white lg:pt-28 lg:pb-12"
    >
      {/* faint mountains */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-40 w-full text-brand-900/50"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 200l240-120 180 70 210-140 220 150 190-90 200 100V200z"
        />
      </svg>

      <div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        {/* ---------------- LEFT ---------------- */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold ring-1 ring-gold/30">
            <span aria-hidden>🪔</span> {offer.badge}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
            Kashmir Tour Packages
            <br />
            <span className="relative whitespace-nowrap text-brand-300">
              Flat 25% Off
              <svg
                className="absolute -bottom-2 left-0 w-full text-brand-400"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8c40-7 120-9 196-3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            this Diwali
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
            Private Srinagar, Gulmarg, Sonmarg &amp; Pahalgam trips planned by
            locals. {offer.sub}.{" "}
            <span className="font-semibold text-white">{offer.validTill}.</span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <EnquiryButton
              label="Get 25% Off Quote →"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-brand-900 shadow-lg transition hover:brightness-105"
            />
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition group-hover:bg-brand-500">
                ▶
              </span>
              Plan on WhatsApp
            </a>
          </div>

          <dl className="mt-6 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["🌍", "6+", "Regions"],
              ["👣", "4.8K+", "Happy Travellers"],
              ["★", "120+", "Curated Trips"],
            ].map(([icon, n, l]) => (
              <div
                key={l}
                className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15"
              >
                <div className="flex items-center gap-2">
                  <span className="text-brand-300" aria-hidden>
                    {icon}
                  </span>
                  <span className="text-lg font-extrabold">{n}</span>
                </div>
                <p className="mt-0.5 text-xs text-white/60">{l}</p>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-[0.7rem] font-bold uppercase tracking-wide text-white/50">
              Popular:
            </span>
            {heroKeywords.map((k) => (
              <a
                key={k}
                href="#packages"
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15 transition hover:bg-white/20"
              >
                {k}
              </a>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <p className="font-script text-2xl text-white/70">
              Collect moments, not things
            </p>
            <svg viewBox="0 0 60 40" className="h-7 w-11 text-brand-300" fill="none" aria-hidden>
              <path
                d="M2 30C20 34 34 26 40 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="2 5"
                strokeLinecap="round"
              />
              <path d="M40 2l14 8-14 8-2-8 2-8z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* ---------------- RIGHT ---------------- */}
        <div className="reveal relative">
          <div className="grid grid-cols-[0.8fr_1.1fr_0.8fr] items-center gap-3 sm:gap-4">
            {/* left small */}
            <figure className="relative aspect-[3/5] overflow-hidden rounded-[45%_45%_45%_45%/12%_12%_12%_12%] rounded-b-[36px] ring-4 ring-white/20">
              <Image
                src={IMG_LEFT}
                alt="Pahalgam valley, Kashmir"
                fill
                sizes="18vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-1.5 bottom-1.5 rounded-xl bg-white/95 px-2 py-1 text-center text-[0.68rem] font-semibold text-brand-900 shadow">
                Pahalgam
                <span className="block text-[0.6rem] font-normal text-brand-900/55">
                  Lidder Valley
                </span>
              </figcaption>
            </figure>

            {/* center large */}
            <figure className="relative aspect-[3/4] overflow-hidden rounded-[50%_50%_50%_50%/22%_22%_18%_18%] rounded-b-[48px] shadow-2xl ring-4 ring-white/25">
              <Image
                src={IMG_MAIN}
                alt="Traveller looking out over Gulmarg meadows, Kashmir"
                fill
                priority
                sizes="(max-width: 1024px) 55vw, 28vw"
                className="object-cover"
              />
              <span className="absolute left-1/2 top-3 -translate-x-1/2 font-script text-lg leading-tight text-white drop-shadow-md">
                Explore · Dream · Discover
              </span>
            </figure>

            {/* right small */}
            <figure className="relative aspect-[3/5] overflow-hidden rounded-[45%_45%_45%_45%/12%_12%_12%_12%] rounded-b-[36px] ring-4 ring-white/20">
              <Image
                src={IMG_RIGHT}
                alt="Trekker on a snowy Kashmir ridge"
                fill
                sizes="18vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-1.5 bottom-1.5 rounded-xl bg-white/95 px-2 py-1 text-center text-[0.68rem] font-semibold text-brand-900 shadow">
                Sonmarg
                <span className="block text-[0.6rem] font-normal text-brand-900/55">
                  Meadow of Gold
                </span>
              </figcaption>
            </figure>
          </div>

          {/* green circular badge */}
          <div className="absolute -left-2 top-1 hidden h-20 w-20 flex-col items-center justify-center rounded-full bg-brand-700 text-center text-[0.58rem] font-semibold leading-tight text-white shadow-lg ring-2 ring-white/20 sm:flex">
            <span aria-hidden className="mb-0.5 text-sm">
              ⛰
            </span>
            Your Next
            <br />
            Adventure
            <br />
            Awaits
          </div>

          {/* airplane + adventure awaits */}
          <div className="absolute -right-1 -top-3 hidden items-center gap-2 sm:flex">
            <svg viewBox="0 0 70 50" className="h-9 w-12 text-brand-300" fill="none" aria-hidden>
              <path
                d="M4 46C24 42 40 30 46 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="2 6"
                strokeLinecap="round"
              />
              <path d="M44 2l22 8-20 12-4-10-2-2 4-6z" fill="currentColor" />
            </svg>
            <span className="font-script text-lg text-white/80">
              Adventure awaits
            </span>
          </div>

          {/* category bar */}
          <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-white/95 p-2.5 shadow-lg sm:grid-cols-4">
            {[
              ["🛶", "Houseboats"],
              ["⛷", "Snow & Ski"],
              ["🌷", "Lakes & Gardens"],
              ["🥾", "Trekking"],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-center"
              >
                <span className="text-lg text-brand-600" aria-hidden>
                  {icon}
                </span>
                <span className="text-xs font-semibold text-brand-900">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
