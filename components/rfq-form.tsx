"use client";

import { motion } from "framer-motion";
import { Send, UploadCloud } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { profile } from "@/lib/data";

type FormState = {
  name: string;
  company: string;
  email: string;
  partType: string;
  process: string;
  eav: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  partType: "Brackets",
  process: "Stamping",
  eav: "",
  notes: "",
};

const contactRows = [
  { label: "EMAIL", value: profile.email },
  { label: "WEBSITE", value: profile.website },
  { label: "MOBILE", value: profile.mobile },
  { label: "ADDRESS", value: profile.address },
];

export function RFQForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const eav = Number(form.eav || 0);
  const tier = eav >= 100000 ? "High Mass Production" : eav >= 25000 ? "Medium Production" : eav > 0 ? "Low / Prototype" : "Awaiting EAV";
  const gauge = useMemo(() => Math.min(100, eav ? Math.max(6, (Math.log10(eav + 1) / 6) * 100) : 0), [eav]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <aside className="technical-panel p-6">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-300">Demo Contact Terminal</p>
        <h2 className="mt-3 text-3xl font-black uppercase text-white">RFQ Intake Demo</h2>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          Contact details are intentionally withheld in this demo until confirmed by the company.
        </p>
        <div className="mt-6 grid gap-4 text-sm text-slate-300">
          {contactRows.map((row) => (
            <p key={row.label}>
              <span className="font-mono text-slate-500">{row.label}</span>
              <br />
              {row.value ?? "Not provided in this demo"}
            </p>
          ))}
        </div>
      </aside>
      <form onSubmit={submit} className="technical-panel p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
            Name
            <input value={form.name} onChange={(event) => update("name", event.target.value)} required className="border border-slate-700 bg-slate-950 px-3 py-3 font-normal normal-case tracking-normal text-white outline-none focus:border-red-500" />
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
            Company
            <input value={form.company} onChange={(event) => update("company", event.target.value)} required className="border border-slate-700 bg-slate-950 px-3 py-3 font-normal normal-case tracking-normal text-white outline-none focus:border-red-500" />
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
            Email
            <input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} required className="border border-slate-700 bg-slate-950 px-3 py-3 font-normal normal-case tracking-normal text-white outline-none focus:border-red-500" />
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
            Part Type
            <select value={form.partType} onChange={(event) => update("partType", event.target.value)} className="border border-slate-700 bg-slate-950 px-3 py-3 font-normal normal-case tracking-normal text-white outline-none focus:border-red-500">
              {["Seating System Components", "Tube Components", "Brackets", "Chassis Structures", "Mountings", "Suspension Parts"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
            Process
            <select value={form.process} onChange={(event) => update("process", event.target.value)} className="border border-slate-700 bg-slate-950 px-3 py-3 font-normal normal-case tracking-normal text-white outline-none focus:border-red-500">
              {["Stamping", "CNC Pipe Bending", "Spot Welding", "Projection Welding", "CO2 Welding", "Shearing"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
            Estimated Annual Volume
            <input type="number" min="0" value={form.eav} onChange={(event) => update("eav", event.target.value)} placeholder="50000" className="border border-slate-700 bg-slate-950 px-3 py-3 font-normal normal-case tracking-normal text-white outline-none focus:border-red-500" />
          </label>
        </div>
        <div className="mt-5 border border-slate-700 bg-slate-950 p-4">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Production Tier</p>
            <p className="font-mono text-sm font-bold text-red-200">{tier}</p>
          </div>
          <div className="mt-4 h-3 border border-slate-700 bg-slate-900">
            <motion.div className="h-full bg-red-600" animate={{ width: `${gauge}%` }} transition={{ type: "spring", stiffness: 120, damping: 22 }} />
          </div>
          <div className="mt-2 grid grid-cols-3 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
            <span>Low</span>
            <span className="text-center">Medium</span>
            <span className="text-right">High Mass</span>
          </div>
        </div>
        <label className="mt-5 grid gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
          RFQ Notes
          <textarea value={form.notes} onChange={(event) => update("notes", event.target.value)} rows={5} className="border border-slate-700 bg-slate-950 px-3 py-3 font-normal normal-case tracking-normal text-white outline-none focus:border-red-500" />
        </label>
        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-3 border border-dashed border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-400">
            <UploadCloud size={18} className="text-red-300" />
            Demo only: file upload is not connected.
          </div>
          <button type="submit" className="inline-flex items-center justify-center gap-2 border border-red-500 bg-red-700 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-glow">
            <Send size={16} />
            Submit RFQ
          </button>
        </div>
        {submitted ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 border border-green-500/60 bg-green-500/10 p-4 text-sm text-green-200">
            RFQ captured for demo review: {form.partType}, {form.process}, EAV {form.eav || "not supplied"}.
          </motion.div>
        ) : null}
      </form>
    </div>
  );
}
