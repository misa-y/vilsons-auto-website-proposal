"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Factory, Gauge, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { metrics, profile } from "@/lib/data";
import { assetPath } from "@/lib/site";

const slides = [
  {
    title: "Precision Sheet Metal Components",
    copy: "Automotive and industrial fabrication solutions from Pune, Maharashtra.",
    image: assetPath("/vilsons-page-5.png"),
    icon: Factory,
  },
  {
    title: "20-250 Ton Press Capacity",
    copy: "Power press coverage from compact sheet forms to high-tonnage component forming.",
    image: assetPath("/vilsons-page-6.png"),
    icon: Gauge,
  },
  {
    title: "ISO 9001:2015 Quality System",
    copy: "Process-driven manufacturing systems focused on dimensional accuracy and consistency.",
    image: assetPath("/vilsons-page-7.png"),
    icon: ShieldCheck,
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const Icon = slide.icon;
  const next = () => setIndex((value) => (value + 1) % slides.length);
  const prev = () => setIndex((value) => (value - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = window.setInterval(next, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const metricItems = useMemo(() => metrics, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 opacity-30 blueprint" />
      <div className="mx-auto grid min-h-[calc(100vh-66px)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-red-300"
          >
            {profile.tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-5 text-5xl font-black uppercase leading-[0.92] text-white sm:text-7xl lg:text-8xl"
          >
            Vilsons Auto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {profile.description} Built for prototype development, large-scale production, and customer-focused manufacturing operations.
          </motion.p>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {metricItems.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="technical-panel p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                <p className="mt-2 text-xl font-black text-white">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative z-10">
          <div className="technical-panel clip-hero overflow-hidden shadow-glow">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55 }}
                className="relative min-h-[520px]"
              >
                <img src={slide.image} alt={slide.title} className="absolute inset-0 h-full w-full object-cover opacity-45" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="mb-5 grid h-12 w-12 place-items-center border border-red-500 bg-red-700/25 text-red-50">
                    <Icon size={24} />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-200">Slide 0{index + 1} / 03</p>
                  <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">{slide.title}</h2>
                  <p className="mt-3 text-slate-300">{slide.copy}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex justify-between gap-3">
            <button type="button" onClick={prev} className="grid h-11 w-11 place-items-center border border-slate-600 text-slate-200 transition hover:border-red-500 hover:text-white" aria-label="Previous slide">
              <ChevronLeft size={18} />
            </button>
            <div className="flex flex-1 items-center gap-2">
              {slides.map((item, itemIndex) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  className={`h-1.5 flex-1 transition ${itemIndex === index ? "bg-red-600" : "bg-slate-700"}`}
                  aria-label={`Go to ${item.title}`}
                />
              ))}
            </div>
            <button type="button" onClick={next} className="grid h-11 w-11 place-items-center border border-slate-600 text-slate-200 transition hover:border-red-500 hover:text-white" aria-label="Next slide">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
