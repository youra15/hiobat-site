import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-180">
      <div className="max-w-6xl mx-auto px-4 py-3 animate-fadeUp">
        <nav
          aria-label="Navigation principale"
          className="
            flex items-center justify-center
            gap-4 md:gap-8 font-semibold
            text-[15px] md:text-sm
            whitespace-nowrap             /* pas de retour à la ligne */
            overflow-x-auto               /* scroll horizontal si ça dépasse */
            scrollbar-none                /* cache la barre si tu as la util */
            -mx-4 px-4                    /* bord à bord pour mieux swiper */
          "
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
