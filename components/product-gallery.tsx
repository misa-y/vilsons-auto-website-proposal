"use client";

import { motion } from "framer-motion";
import { Rotate3D, Ruler, Shield } from "lucide-react";
import { useMemo, useState } from "react";
import { productRanges } from "@/lib/data";

const tabs = ["All", "ICE", "EV", "Commercial"] as const;

export function ProductGallery() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const products = useMemo(() => {
    return tab === "All" ? productRanges : productRanges.filter((product) => product.category.includes(tab));
  }, [tab]);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`border px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] ${
              tab === item ? "border-red-500 bg-red-700 text-white" : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <motion.article
            key={product.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="group technical-panel relative min-h-[430px] overflow-hidden"
          >
            <img src={product.image} alt={product.title} className="absolute inset-0 h-full w-full object-cover opacity-34 transition duration-500 group-hover:scale-105 group-hover:opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/84 to-slate-950/20" />
            <motion.div
              className="absolute inset-0 opacity-0 blueprint transition group-hover:opacity-100"
              initial={false}
            />
            <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-end p-5">
              <div className="mb-auto flex flex-wrap gap-2">
                {product.category.map((item) => (
                  <span key={item} className="border border-slate-600 bg-slate-950/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-red-200">{item}</span>
                ))}
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-200">Product Range</p>
              <h2 className="mt-2 text-3xl font-black uppercase text-white">{product.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{product.process}</p>
              <div className="mt-5 grid gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="flex gap-2 text-sm text-slate-200">
                  <Ruler size={16} className="mt-1 shrink-0 text-red-300" />
                  <span>{product.tolerance}</span>
                </div>
                <div className="flex gap-2 text-sm text-slate-200">
                  <Shield size={16} className="mt-1 shrink-0 text-red-300" />
                  <span>{product.material}</span>
                </div>
                <div className="flex gap-2 text-sm text-slate-200">
                  <Rotate3D size={16} className="mt-1 shrink-0 text-red-200" />
                  <span>360-degree inspection hint: rotate component spec in RFQ review.</span>
                </div>
              </div>
              <div className="mt-5 border-t border-slate-700 pt-4 font-mono text-xs text-slate-400">{product.machineFit}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
