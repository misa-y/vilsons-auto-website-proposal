import { ArrowRight, BadgeCheck, Factory, Settings2 } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-shell";
import { ScrollRevealHome } from "@/components/scroll-reveal-home";
import { coreStrengths, machines, profile } from "@/lib/data";

export default function Home() {
  const pressUnits = machines.filter((machine) => machine.name === "Power Press").reduce((total, machine) => total + machine.quantity, 0);
  const weldingUnits = machines.filter((machine) => machine.category === "Welding").reduce((total, machine) => total + machine.quantity, 0);

  return (
    <>
      <ScrollRevealHome />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { icon: BadgeCheck, label: "Certified Operations", value: profile.certification, copy: "Quality system identified in the company profile." },
            { icon: Factory, label: "Press Shop Depth", value: `${pressUnits} Power Presses`, copy: "Power Press capacity spans 20 Ton through 250 Ton." },
            { icon: Settings2, label: "Welding Coverage", value: `${weldingUnits} Welding Units`, copy: "CO2, Arc, Spot, and Projection welding systems." },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionDiv key={item.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="technical-panel p-6">
                <Icon className="text-red-300" size={28} />
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                <h2 className="mt-2 text-3xl font-black uppercase text-white">{item.value}</h2>
                <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
              </MotionDiv>
            );
          })}
        </div>
      </section>
      <section className="border-y border-slate-800 bg-slate-950/55">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-red-300">Core Strengths</p>
            <h2 className="mt-3 text-4xl font-black uppercase text-white">Built For Repeatable Manufacturing</h2>
            <Link href="/capabilities" className="mt-8 inline-flex items-center gap-2 border border-red-500 bg-red-700 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-glow">
              Explore Matrix <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {coreStrengths.map((strength) => (
              <div key={strength} className="border border-slate-700 bg-slate-900/70 p-4 font-bold text-slate-200">{strength}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
