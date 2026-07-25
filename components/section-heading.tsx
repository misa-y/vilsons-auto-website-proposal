type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-red-300">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">{title}</h1>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{copy}</p> : null}
    </div>
  );
}
