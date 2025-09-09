import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-180">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4 animate-fadeUp">
     
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="link-animated">Accueil</Link>
          <Link href="/services" className="link-animated">Prestations</Link>
          <Link href="/about" className="link-animated">À propos</Link>
          <Link href="/avis" className="link-animated">Avis clients</Link>
          <Link href="/contact" className="link-animated">Contact</Link>
        </nav>

        {/* CTA BLEU */}
        <div className="flex items-center gap-3">
          <Link href="/survey" className="btn btn-primary">
            Rénover mon bien
          </Link>
        </div>
      </div>
    </header>
  );
}
