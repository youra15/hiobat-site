import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-160">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8 text-sm">
        
        {/* Colonne 1 : Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p>
            Tél : <a href="tel:0611533681" className="text-blue-600">06 11 53 36 81</a><br/>
            Email : <a href="mailto:hiobatfr@gmail.com" className="text-blue-600">hiobatfr@gmail.com</a>
          </p>
        </div>

        {/* Colonne 2 : Réseaux */}
        <div>
          <h3 className="font-semibold">Réseaux</h3>
          <p>
            <Link href="https://instagram.com/hiobat.fr" className="text-blue-600">Instagram</Link><br/>
            <Link href="https://facebook.com/hiobat" className="text-blue-600">Facebook</Link>
          </p>
        </div>

        {/* Colonne 3 : Logo cliquable */}
        <div className="flex items-end justify-end">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Logo HIOBAT"
              width={140}
              height={70}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t">
        © 2025 HIOBAT — Tous droits réservés
      </div>
    </footer>
  );
}