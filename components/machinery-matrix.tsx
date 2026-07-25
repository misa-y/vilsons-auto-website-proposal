"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Activity, Layers3, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, Machine, machines } from "@/lib/data";

export function MachineryMatrix() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Machine | null>(null);

  const filtered = useMemo(() => {
    return category === "All" ? machines : machines.filter((machine) => machine.category === category);
  }, [category]);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`border px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] transition ${
              category === item ? "border-red-500 bg-red-700 text-white shadow-glow" : "border-slate-700 bg-slate-950/70 text-slate-300 hover:border-slate-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((machine, index) => (
          <motion.button
            key={machine.id}
            type="button"
            onClick={() => setSelected(machine)}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.025 }}
            className="technical-panel group min-h-52 p-5 text-left transition hover:-translate-y-1 hover:border-red-500 hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="border border-slate-600 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-red-200">{machine.category}</span>
              <span className="font-mono text-sm font-bold text-red-200">QTY {machine.quantity}</span>
            </div>
            <h3 className="mt-5 text-2xl font-black uppercase text-white">{machine.name}</h3>
            <p className="mt-2 font-mono text-sm text-slate-300">{machine.specification}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <Activity size={16} className="text-red-300" />
              <span>{machine.application}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {machine.parts.slice(0, 3).map((part) => (
                <span key={part} className="bg-slate-900 px-2 py-1 text-xs text-slate-300">{part}</span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/82 p-4 backdrop-blur"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 32, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 24, scale: 0.98 }}
              className="technical-panel w-full max-w-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-700 p-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-red-300">{selected.sourceSheet}</p>
                  <h2 className="mt-1 text-3xl font-black uppercase text-white">{selected.name}</h2>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="grid h-10 w-10 place-items-center border border-slate-600 text-slate-100" aria-label="Close modal">
                  <X size={18} />
                </button>
              </div>
              <div className="grid gap-4 p-5 sm:grid-cols-3">
                <div className="metal border border-slate-700 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Specification</p>
                  <p className="mt-2 text-xl font-black text-white">{selected.specification}</p>
                </div>
                <div className="metal border border-slate-700 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Quantity</p>
                  <p className="mt-2 text-xl font-black text-white">{selected.quantity}</p>
                </div>
                <div className="metal border border-slate-700 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Category</p>
                  <p className="mt-2 text-xl font-black text-white">{selected.category}</p>
                </div>
              </div>
              <div className="grid gap-5 border-t border-slate-800 p-5 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 font-bold uppercase text-white">
                    <Layers3 size={18} className="text-red-300" />
                    Parts Mapped
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selected.parts.map((part) => (
                      <span key={part} className="border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300">{part}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold uppercase text-white">Application / Feature</p>
                  <p className="mt-3 leading-7 text-slate-300">{selected.application}</p>
                  <p className="mt-4 font-mono text-xs text-slate-500">Source: {selected.sourceSheet} spreadsheet row.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
