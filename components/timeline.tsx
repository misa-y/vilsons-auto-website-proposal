"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/lib/data";

export function DynamicTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mt-12">
      <div className="absolute left-4 top-0 h-full w-px bg-slate-700 sm:left-1/2" />
      <motion.div className="absolute left-4 top-0 w-px bg-red-500 shadow-glow sm:left-1/2" style={{ height }} />
      <div className="grid gap-8">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            className={`relative ml-12 sm:ml-0 sm:grid sm:grid-cols-2 sm:gap-12 ${index % 2 === 0 ? "" : "sm:[&>div]:col-start-2"}`}
          >
            <span className="absolute -left-[2.42rem] top-5 h-4 w-4 border border-red-300 bg-slate-950 shadow-glow sm:left-1/2 sm:-translate-x-1/2" />
            <div className="technical-panel p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-300">{item.meta}</p>
              <h3 className="mt-2 text-2xl font-black uppercase text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
