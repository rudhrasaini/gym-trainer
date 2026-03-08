"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-bg/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold italic">FitPro</Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-white transition-colors duration-300">{l.label}</a>
          ))}
        </div>
        <a href="https://wa.me/918447786332" target="_blank" className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-all">
          Let&apos;s Talk <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px]">↗</span>
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl" aria-label="Menu">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <div className="md:hidden bg-bg border-t border-white/5 px-6 pb-8 pt-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-white transition-colors text-sm border-b border-white/5">{l.label}</a>
          ))}
          <a href="https://wa.me/918447786332" target="_blank" className="mt-6 block text-center bg-white text-black py-3 rounded-full font-medium text-sm">Let&apos;s Talk</a>
        </div>
      )}
    </nav>
  );
}
