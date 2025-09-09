"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-180">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4 animate-fadeUp">
        {/* Espace logo (vide, comme demandé) */}
        <div aria-hidden className="w-8 h-8 md:w-10 md:h-10" />

        {/* Burger (mobile) */}
        <button
          aria-label="Ouvrir le menu"
          className="md:hidden p-2 rounded-lg border border-gray-300"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-5 h-[2px] bg-black mb-1" />
          <div className="w-5 h-[2px] bg-black mb-1" />
          <div className="w-5 h-[2px] bg-black" />
        </button>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="link-animated">Accueil</Link>
          <Link href="/services" className="link-animated">Prestations</Link>
          <Link href="/about" className="link-animated">À propos</Link>
          <Link href="/avis" className="link-animated">Avis clients</Link>
          <Link href="/contact" className="link-animated">Contact</Link>
        </nav>

        {/* CTA: ton bleu via ta classe btn btn-primary */}
        <Link href="/survey" className="btn btn-primary">
          Rénover mon bien
        </Link>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-fadeUp">
          <nav className="px-4 py-3 flex flex-col gap-3 text-base">
            <Link href="/" className="link-animated" onClick={() => setOpen(false)}>Accueil</Link>
            <Link href="/services" className="link-animated" onClick={() => setOpen(false)}>Prestations</Link>
            <Link href="/about" className="link-animated" onClick={() => setOpen(false)}>À propos</Link>
            <Link href="/avis" className="link-animated" onClick={() => setOpen(false)}>Avis clients</Link>
            <Link href="/contact" className="link-animated" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/survey" className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
              Rénover mon bien
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
