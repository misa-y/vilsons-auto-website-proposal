import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-300">{profile.tagline}</p>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">{profile.description}</p>
        </div>
        <div className="grid gap-2 text-sm text-slate-300">
          <Link href="/contact" className="font-bold uppercase tracking-[0.18em] text-white">Start RFQ</Link>
          <span className="font-mono text-xs text-slate-500">{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
