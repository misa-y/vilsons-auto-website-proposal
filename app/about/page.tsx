import { DynamicTimeline } from "@/components/timeline";
import { SectionHeading } from "@/components/section-heading";
import { customers, profile, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Who We Are"
        title="Precision, Reliability, Engineering Excellence"
        copy="Vilsons Auto is a trusted manufacturer of precision sheet metal components and fabrication solutions for automotive and industrial applications based in Pune, Maharashtra."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="technical-panel p-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-red-300">Founder Profile</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white">{profile.founder}</h2>
          <p className="mt-4 leading-8 text-slate-300">{profile.founderProfile}</p>
        </article>
        <article className="technical-panel p-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-red-300">Certification</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white">{profile.certification}</h2>
          <p className="mt-4 leading-8 text-slate-300">CAD software and FEA methodologies support design validation, manufacturability, and cost-effective production solutions.</p>
        </article>
      </div>
      <DynamicTimeline />
      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        <article className="technical-panel p-6">
          <h2 className="text-2xl font-black uppercase text-white">Vision</h2>
          <p className="mt-4 leading-7 text-slate-300">{profile.vision}</p>
        </article>
        <article className="technical-panel p-6">
          <h2 className="text-2xl font-black uppercase text-white">Mission</h2>
          <p className="mt-4 leading-7 text-slate-300">{profile.mission}</p>
        </article>
        <article className="technical-panel p-6">
          <h2 className="text-2xl font-black uppercase text-white">Quality Policy</h2>
          <p className="mt-4 leading-7 text-slate-300">{profile.qualityPolicy}</p>
        </article>
      </div>
      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        <article className="technical-panel p-6">
          <h2 className="text-2xl font-black uppercase text-white">Core Values</h2>
          <div className="mt-5 grid gap-2">
            {values.map((value) => <div key={value} className="border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300">{value}</div>)}
          </div>
        </article>
        <article className="technical-panel p-6">
          <h2 className="text-2xl font-black uppercase text-white">Customers & Market Presence</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {customers.map((customer) => <div key={customer} className="border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300">{customer}</div>)}
          </div>
        </article>
      </div>
    </section>
  );
}
