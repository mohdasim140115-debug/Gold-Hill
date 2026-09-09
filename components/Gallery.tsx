import Image from "next/image";
import { SectionHeading } from "./Section";

const shots = [
  ["/images/houseboat-2.avif", "Houseboat interior on Dal Lake"],
  ["/images/gulmarg-3.avif", "Gulmarg gondola over snow"],
  ["/images/pahalgam-2.avif", "Pahalgam river valley"],
  ["/images/srinagar-garden.avif", "Mughal garden in Srinagar"],
  ["/images/trek-ridge.avif", "Sonmarg alpine meadow"],
  ["/images/doodhpathri.avif", "Doodhpathri green meadows"],
  ["/images/yusmarg.avif", "Yusmarg pastures"],
  ["/images/gulmarg.avif", "Skiing in Gulmarg"],
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-brand-50/60 py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Gallery" title="Moments from our trips" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {shots.map(([src, alt]) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
