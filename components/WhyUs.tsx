import { SectionHeading } from "./Section";
import { features } from "@/lib/site";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-brand-900 py-24 text-white">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
            Why Gold Hill Luxe
          </p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            A travel partner on the ground, not just a booking site
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-brand-900">
                ★
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/75">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
