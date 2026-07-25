"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { MouseEvent } from "react";
import { useState } from "react";
import { assetPath } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Who We Are" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact / RFQ" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    if (pathname === href) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/70 bg-slate-950/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={(event) => handleNavClick(event, "/")}>
          <span className="flex h-14 w-64 items-center border border-red-950 bg-white px-3 py-2 shadow-glow sm:w-72">
            <img
              src={assetPath("/vilsons-logo-horizontal.png")}
              alt="Vilsons Auto"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden border border-red-500/70 bg-red-700/20 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-red-100 sm:inline-flex">
            Demo
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={`border px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${
                pathname === item.href
                  ? "border-red-600 bg-red-700 text-white"
                  : "border-transparent text-slate-300 hover:border-slate-600 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-slate-600 text-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-slate-800 bg-slate-950 px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`border px-3 py-3 text-xs font-bold uppercase tracking-[0.16em] ${
                  pathname === item.href ? "border-red-600 bg-red-700 text-white" : "border-slate-800 text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
