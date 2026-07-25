import { MachineryMatrix } from "@/components/machinery-matrix";
import { SectionHeading } from "@/components/section-heading";
import { machines } from "@/lib/data";

export default function CapabilitiesPage() {
  const totalUnits = machines.reduce((total, machine) => total + machine.quantity, 0);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="What We Manufacture"
        title="Machine Capability Matrix"
        copy="A filterable dashboard built from the provided machine spreadsheet. Select a category, then open a machine card to inspect specifications, quantity, source sheet, and mapped product applications."
      />
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        <div className="technical-panel p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Total Listed Units</p>
          <p className="mt-2 text-4xl font-black text-white">{totalUnits}</p>
        </div>
        <div className="technical-panel p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Highest Press</p>
          <p className="mt-2 text-4xl font-black text-white">250 Ton</p>
        </div>
        <div className="technical-panel p-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">CNC Capability</p>
          <p className="mt-2 text-4xl font-black text-white">3 Axis</p>
        </div>
      </div>
      <MachineryMatrix />
    </section>
  );
}
