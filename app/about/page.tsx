import { SectionHeading } from "@/components/section-heading";

const placeholders = [
  {
    title: "Company Overview",
    copy: "Placeholder content pending final client-approved company description.",
  },
  {
    title: "Leadership Profile",
    copy: "Placeholder content pending verified leadership and founder details.",
  },
  {
    title: "Quality & Certifications",
    copy: "Placeholder content pending confirmed certification text and supporting documentation.",
  },
];

const timelinePlaceholders = [
  "Milestone placeholder 01",
  "Milestone placeholder 02",
  "Milestone placeholder 03",
  "Milestone placeholder 04",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Who We Are"
        title="Company Profile Placeholder"
        copy="This demo section is intentionally using placeholders until the final company history, leadership details, certifications, and customer references are verified."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {placeholders.map((item) => (
          <article key={item.title} className="technical-panel p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-red-300">Demo Placeholder</p>
            <h2 className="mt-3 text-2xl font-black uppercase text-white">{item.title}</h2>
            <p className="mt-4 leading-7 text-slate-300">{item.copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 technical-panel p-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-red-300">Timeline Placeholder</p>
        <h2 className="mt-3 text-3xl font-black uppercase text-white">Corporate Milestones Pending Verification</h2>
        <div className="mt-8 grid gap-4">
          {timelinePlaceholders.map((item, index) => (
            <div key={item} className="grid gap-4 border border-slate-700 bg-slate-950 p-4 sm:grid-cols-[120px_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Step {String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3 className="font-black uppercase text-white">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">Client-approved milestone copy to be inserted here.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        <article className="technical-panel p-6">
          <h2 className="text-2xl font-black uppercase text-white">Values Placeholder</h2>
          <div className="mt-5 grid gap-2">
            {["Value pending verification", "Value pending verification", "Value pending verification"].map((value, index) => (
              <div key={`${value}-${index}`} className="border border-slate-700 bg-slate-950 px-4 py-3 text-slate-300">{value}</div>
            ))}
          </div>
        </article>
        <article className="technical-panel p-6">
          <h2 className="text-2xl font-black uppercase text-white">Customer References Placeholder</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {["Customer pending verification", "Customer pending verification", "Customer pending verification", "Customer pending verification"].map((customer, index) => (
              <div key={`${customer}-${index}`} className="border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-300">{customer}</div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
