"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Accueil */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          HIOBAT
        </Link>

        {/* Bouton burger (mobile) */}
        <button
          aria-label="Ouvrir le menu"
          className="md:hidden p-2 rounded-lg border border-gray-300"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icône simple (3 lignes) */}
          <div className="w-5 h-[2px] bg-black mb-1" />
          <div className="w-5 h-[2px] bg-black mb-1" />
          <div className="w-5 h-[2px] bg-black" />
        </button>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-600">Accueil</Link>
          <Link href="/services" className="hover:text-gray-600">Prestations</Link>
          <Link href="/about" className="hover:text-gray-600">À propos</Link>
          <Link href="/avis" className="hover:text-gray-600">Avis clients</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
        </nav>

        {/* CTA toujours visible (mobile + desktop) */}
        <Link
          href="/survey"
          className="ml-3 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold
                     bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Rénover mon bien
        </Link>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-3 text-base">
            <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Prestations</Link>
            <Link href="/about" onClick={() => setOpen(false)}>À propos</Link>
            <Link href="/avis" onClick={() => setOpen(false)}>Avis clients</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
