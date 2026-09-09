export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-brand-900/70">{intro}</p>}
    </div>
  );
}
