import { SectionHeading } from "./Section";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Good to know before you book" />
        <div className="divide-y divide-brand-700/10 rounded-2xl border border-brand-700/10 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-brand-900">
                {f.q}
                <span className="ml-4 text-brand-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-brand-900/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
