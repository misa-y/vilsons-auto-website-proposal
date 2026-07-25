"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Factory, Gauge, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const heroImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=90";

export function ScrollRevealHome() {
  const [viewport, setViewport] = useState({ width: 1200, height: 800 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const progress = useSpring(scrollYProgress, {
    stiffness: 56,
    damping: 22,
    mass: 1.35,
  });

  const introOpacity = useTransform(progress, [0, 0.08, 0.18], [1, 0.72, 0]);
  const introY = useTransform(progress, [0, 0.18], [0, -72]);
  const previewTop = useTransform(progress, [0, 0.28], ["76%", "50%"]);
  const previewWidth = useTransform(progress, [0, 0.28], [Math.min(Math.max(viewport.width * 0.42, 320), 520), viewport.width]);
  const previewHeight = useTransform(progress, [0, 0.28], [Math.min(Math.max(viewport.height * 0.32, 220), 300), viewport.height]);
  const previewRadius = useTransform(progress, [0, 0.28], ["28px", "0px"]);
  const previewY = useTransform(progress, [0, 0.28], [0, 0]);
  const imageScale = useTransform(progress, [0, 0.28], [1.08, 1]);
  const imageBrightness = useTransform(progress, [0, 0.28], ["brightness(0.78)", "brightness(0.48)"]);
  const overlayOpacity = useTransform(progress, [0.23, 0.32, 1], [0, 1, 1]);
  const overlayY = useTransform(progress, [0.23, 0.36], [44, 0]);
  const metricOpacity = useTransform(progress, [0.33, 0.42], [0, 1]);

  return (
    <section className="relative h-[260vh] border-b border-slate-800">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[36%] z-30 text-center"
          style={{ opacity: introOpacity, x: "-50%", y: introY, translateY: "-50%" }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-red-300">
            {profile.tagline}
          </p>
          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-black uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            Precision Mobility Components
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Vilsons Auto manufactures precision sheet metal components and fabrication solutions for automotive and industrial applications from Pune, Maharashtra.
          </p>
        </motion.div>

        <motion.div
          className="absolute left-1/2 z-20 overflow-hidden border border-white/14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
          style={{
            top: previewTop,
            width: previewWidth,
            height: previewHeight,
            borderRadius: previewRadius,
            y: previewY,
            x: "-50%",
            translateY: "-50%",
          }}
        >
          <motion.img
            src={heroImage}
            alt="Premium automotive exterior used as cinematic Vilsons Auto manufacturing reveal"
            className="h-full w-full object-cover"
            style={{ scale: imageScale, filter: imageBrightness }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 opacity-30 blueprint" />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-40 flex items-center justify-center px-4 text-center"
          style={{ opacity: overlayOpacity, y: overlayY }}
        >
          <div className="max-w-5xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.34em] text-red-200">
              Prototype To Mass Production
            </p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
              Components Behind The Drive
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore the machines, product ranges, and RFQ path behind Vilsons Auto precision sheet metal and tubular component manufacturing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/capabilities" className="inline-flex items-center gap-2 border border-red-500 bg-red-700 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-glow">
                View Capabilities <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 border border-white/25 bg-black/50 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-red-400">
                See Products
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 gap-3 sm:grid-cols-3"
          style={{ opacity: metricOpacity }}
        >
          {[
            { icon: ShieldCheck, label: "Quality", value: profile.certification },
            { icon: Gauge, label: "Press Range", value: "20-250 Ton" },
            { icon: Factory, label: "Base", value: profile.location },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="border border-white/14 bg-black/54 p-4 text-left backdrop-blur-md">
                <Icon className="text-red-300" size={20} />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                <p className="mt-1 text-lg font-black text-white">{item.value}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
