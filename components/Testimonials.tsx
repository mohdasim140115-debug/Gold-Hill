import { SectionHeading } from "./Section";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Reviews"
          title="What our travellers say"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-brand-700/10 bg-white p-6 shadow-sm"
            >
              <div className="text-gold" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="mt-3 flex-1 text-sm text-brand-900/80">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand-900">
                {t.name}
                <span className="font-normal text-brand-900/60"> · {t.from}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
