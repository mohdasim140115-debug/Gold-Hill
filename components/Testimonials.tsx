import { SectionHeading } from "./Section";
import { testimonials } from "@/lib/site";

const avatarColors = ["#1a73e8", "#e8710a", "#188038", "#a142f4", "#d93025"];

function initials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.96 13.96 0 0 1 10.94 24c0-1.45.25-2.86.7-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-[#fbbc04]">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.7l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-brand-50/60 py-20">
      <div className="container-x">
        <SectionHeading eyebrow="Reviews" title="What our travellers say" />

        <div className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-sm ring-1 ring-brand-900/5">
          <GoogleG className="h-7 w-7" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-brand-900">4.9</span>
              <Stars />
            </div>
            <p className="text-xs text-brand-900/60">
              Based on 120+ Google reviews
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm"
            >
              <GoogleG className="absolute right-5 top-6 h-5 w-5" />

              <div className="flex items-center gap-3 pr-8">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {initials(t.name)}
                </span>
                <div>
                  <figcaption className="text-sm font-medium text-brand-900">
                    {t.name}
                  </figcaption>
                  <p className="text-xs text-brand-900/55">
                    {t.reviews} · {t.from}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Stars />
                <span className="text-xs text-brand-900/50">{t.time}</span>
              </div>

              <blockquote className="mt-3 text-sm leading-relaxed text-brand-900/80">
                {t.text}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
