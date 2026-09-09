import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-700/10 bg-white py-12">
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src="/logo.webp"
            alt="Gold Hill Luxe Tour and Travel"
            width={322}
            height={160}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm text-brand-900/70">
            Curated luxury Kashmir holidays — private tours of Srinagar, Gulmarg,
            Sonmarg, Pahalgam and Doodhpathri, run by a Srinagar-based team.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-bold text-brand-900">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-900/70">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-brand-600">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold text-brand-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-900/70">
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-brand-600">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-600">
                {site.email}
              </a>
            </li>
            <li>Kunzer, Srinagar, J&amp;K 193404</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-10 flex flex-col gap-2 border-t border-brand-700/10 pt-6 text-xs text-brand-900/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>
          <a href={site.url} className="hover:text-brand-600">
            {site.url.replace("https://", "")}
          </a>
        </p>
      </div>
    </footer>
  );
}
