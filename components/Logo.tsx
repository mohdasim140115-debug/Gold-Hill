export function Logo({ light = false }: { light?: boolean }) {
  const gold = light ? "text-brand-300" : "text-brand-500";
  const dark = light ? "text-white" : "text-brand-700";
  return (
    <span className="inline-flex flex-col leading-none" aria-label="Gold Hill Luxe Tour and Travel">
      <span className="flex items-baseline gap-1 text-xl font-extrabold tracking-tight sm:text-2xl">
        <span className={gold}>GOLD</span>
        <span className={dark}>HILL</span>
        <span className={gold}>LUXE</span>
      </span>
      <span
        className={`mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.35em] ${
          light ? "text-white/70" : "text-brand-800/60"
        }`}
      >
        Tour &amp; Travel
      </span>
    </span>
  );
}
