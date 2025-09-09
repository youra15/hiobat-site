import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-180">
      <div className="max-w-6xl mx-auto px-4 py-3 animate-fadeUp">
        {/* NAV centrée */}
        <nav
          className="flex justify-center flex-wrap items-center gap-x-8 gap-y-2 text-sm font-semibold"
          aria-label="Navigation principale"
        >
          <Link href="/" className="link-animated">Accueil</Link>
          <Link href="/services" className="link-animated">Prestations</Link>
          <Link href="/about" className="link-animated">À propos</Link>
          <Link href="/avis" className="link-animated">Avis clients</Link>
          <Link href="/contact" className="link-animated">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
