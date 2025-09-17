"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("idle");     // idle | loading | ok | error

  async function onSubmit(e) {
    e.preventDefault();            // ⛔️ empêche la navigation vers Formspree
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mgvlrdya", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("ok");           // ✅ on passe en mode “merci”
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 relative">
      {/* Colonne 1 : texte + formulaire */}
      <section className="section pt-10">
        <h1 className="heading text-3xl font-semibold mb-4">Contactez-nous</h1>

        <div className="text-gray-700 leading-relaxed mb-6">
          <p>
            Vous avez un projet de rénovation, une question ou besoin d’un devis ?{" "}
            L’équipe <strong>HIOBAT</strong> est à votre disposition pour vous accompagner dans toutes vos démarches.
          </p>
          <p className="mt-2">
            Basés en Île-de-France, nous répondons rapidement à vos demandes et vous conseillons pour concrétiser vos travaux
            dans les meilleures conditions. N’hésitez pas à nous écrire via le formulaire ci-dessous, ou à nous joindre directement
            par téléphone ou par email.
          </p>
        </div>

        {/* === Formulaire (AJAX) === */}
        {status !== "ok" ? (
          <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4 max-w-lg">
            <input type="hidden" name="_subject" value="Nouvelle demande de devis HIOBAT" />

            <input type="text" name="name" placeholder="Nom" className="input" required />
            <input type="email" name="email" placeholder="Email" className="input" required />
            <input type="tel" name="phone" placeholder="Téléphone" className="input" required />
            <textarea name="message" placeholder="Décrivez votre projet" className="input" rows="4" required />
            <input type="file" name="attachment" className="w-full" />

            <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
              {status === "loading" ? "Envoi..." : "Envoyer"}
            </button>

            {status === "error" && (
              <p className="text-red-700 text-sm">
                Oups, échec de l’envoi. Réessayez ou écrivez à <a className="underline" href="mailto:hiobatfr@gmail.com">hiobatfr@gmail.com</a>.
              </p>
            )}
          </form>
        ) : (
          // === Bloc de confirmation inline (pas de nouvelle page) ===
          <div className="max-w-lg p-4 rounded-lg bg-green-50 border border-green-200">
            <h2 className="text-green-800 font-semibold mb-1">Merci, votre demande a bien été envoyée ✅</h2>
            <p className="text-green-800/90 text-sm">
              L’équipe <strong>HIOBAT</strong> vous recontactera rapidement. Vous pouvez aussi nous joindre au{" "}
              <a className="underline" href="tel:+33611533681">06 11 53 36 81</a>.
            </p>
          </div>
        )}

        <p className="text-sm mt-4">
          Contact direct :{" "}
          <a href="mailto:hiobatfr@gmail.com" className="underline">hiobatfr@gmail.com</a>{" "}—{" "}
          <a href="tel:+33611533681" className="underline">06 11 53 36 81</a>
        </p>
      </section>

      {/* Colonne 2 : coordonnées + réseaux */}
      <aside className="space-y-6">
        <div className="tile p-6">
          <h2 className="font-semibold mb-2">Coordonnées</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Email : <a className="underline" href="mailto:hiobatfr@gmail.com">hiobatfr@gmail.com</a></li>
            <li>Téléphone : <a className="underline" href="tel:+33611533681">06 11 53 36 81</a></li>
          </ul>
        </div>

        <div className="tile p-6">
          <h2 className="font-semibold mb-3">Réseaux sociaux</h2>
          <div className="flex items-center gap-6">
            <Link href="https://www.instagram.com/hiobat.fr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#0F172A" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="#0F172A" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="#0F172A" />
              </svg>
              <span>@hiobat</span>
            </Link>

            <Link href="https://www.facebook.com/hiobat" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:opacity-80">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#0F172A" strokeWidth="1.6" />
                <path d="M14.2 8.2h1.7V6h-1.7c-1.8 0-3 1.2-3 3v1.4H9.3V12h1.9v6h2.2v-6h2l.3-1.6h-2.3V9c0-.6.2-.8.8-.8Z" fill="#0F172A" />
              </svg>
              <span>HIOBAT</span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
