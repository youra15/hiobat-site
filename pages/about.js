export default function Apropos() {
  return (
<div className="space-y-10 pt-10">
    <h1 className="heading text-3xl font-semibold mb-6">À propos de HIOBAT</h1>

      {/* Introduction */}
      <p className="text-gray-700 leading-relaxed">
        Fondée en 2020, la société <strong>HIOBAT</strong> s’est rapidement imposée comme un acteur de confiance dans le domaine de la rénovation intérieure en Île-de-France.
        Si notre entreprise est jeune, notre savoir-faire, lui, s’appuie sur plus de <strong>20 ans d’expérience</strong> dans les métiers du bâtiment. 
        Notre ambition est simple : offrir aux particuliers et aux professionnels des prestations de qualité, réalisées dans les règles de l’art, avec un suivi transparent et rigoureux.
      </p>

      {/* Nos valeurs */}
      <section>
        <h2 className="heading text-2xl font-semibold mb-4">Nos valeurs</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Chez HIOBAT, nous croyons que la réussite d’un chantier repose sur trois piliers : 
          la <strong>qualité</strong>, la <strong>confiance</strong> et la <strong>proximité</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Qualité :</strong> nous sélectionnons des matériaux durables et appliquons des méthodes éprouvées pour garantir des finitions irréprochables.</li>
          <li><strong>Confiance :</strong> des devis clairs, sans surprise, et un accompagnement du début à la fin.</li>
          <li><strong>Proximité :</strong> une équipe locale, réactive et à l’écoute, prête à intervenir rapidement partout en Île-de-France.</li>
        </ul>
      </section>

      {/* Notre savoir-faire */}
      <section>
        <h2 className="heading text-2xl font-semibold mb-4">Notre savoir-faire</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Avec plus de deux décennies d’expérience cumulée, nos artisans et techniciens couvrent l’ensemble des besoins en rénovation intérieure : 
        </p>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
          <li>🔧 <strong>Plomberie</strong> : installations sanitaires, réparations de fuites, dépannages rapides.</li>
          <li>🎨 <strong>Peinture</strong> : préparation soignée, application professionnelle, finitions modernes.</li>
          <li>⚡ <strong>Électricité</strong> : mise aux normes, création de circuits, tableaux électriques.</li>
          <li>🏠 <strong>Rénovation globale</strong> : cuisines, salles de bain, sols, cloisons et aménagements divers.</li>
        </ul>
      </section>

      {/* Engagement client */}
      <section>
        <h2 className="heading text-2xl font-semibold mb-4">Un accompagnement sur-mesure</h2>
        <p className="text-gray-700 leading-relaxed">
          Nous savons que rénover son logement ou ses locaux peut être une source de stress. 
          C’est pourquoi nous plaçons la <strong>communication et l’écoute</strong> au centre de notre démarche. 
          Chaque client bénéficie d’un interlocuteur unique, d’un suivi personnalisé et de conseils adaptés à ses contraintes et à son budget. 
          Notre objectif n’est pas seulement de réaliser vos travaux, mais de construire une relation de confiance durable.
        </p>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="heading text-2xl font-semibold mb-4">Pourquoi choisir HIOBAT ?</h2>
        <p className="text-gray-700 leading-relaxed">
          Choisir HIOBAT, c’est choisir une entreprise locale, sérieuse et passionnée, 
          capable de conjuguer <strong>expérience traditionnelle</strong> et <strong>techniques modernes</strong>. 
          Depuis 2020, de nombreux clients en Île-de-France nous ont déjà fait confiance pour leurs projets de rénovation, petits ou grands. 
          Nous serons ravis de mettre notre expertise à votre service pour transformer vos idées en réalité.
        </p>
      </section>
    </div>
  );
}
