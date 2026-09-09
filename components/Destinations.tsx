import Image from "next/image";
import { SectionHeading } from "./Section";
import { destinations } from "@/lib/site";

export function Destinations() {
  return (
    <section id="destinations" className="py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Destinations"
          title="Where we'll take you"
          intro="The valleys we know street by street — combine any of them into one seamless trip."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article
              key={d.name}
              className="group relative h-72 overflow-hidden rounded-2xl"
            >
              <Image
                src={d.image}
                alt={`${d.name}, Kashmir`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-xl font-bold">{d.name}</h3>
                <p className="mt-1 text-sm text-white/85">{d.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
