// pages/avis.js
export default function Avis(){
  const avis = [
    'Travail sérieux et soigné, je recommande vivement. — M. El Kharfan — Paris 17e',
    'Rénovation de ma salle de bain impeccable. — C. Martin — Boulogne',
    'Finitions de qualité et délais respectés. — L. Bernard — Paris',
    'Equipe réactive et très professionnelle. — S. Leroy — Levallois',
    'Devis clair, prix tenus, résultat parfait. — A. Arabi — Clichy',
    'Excellent suivi du chantier, aucun souci. — J. Moreau — Courbevoie',
    'Artisans compétents et travail impeccable. — N. Fontaine — Paris 16e',
    'Travail impeccable du début à la fin, je referai appel sans hésiter. — P. Durand — Nanterre',
    'Une équipe sérieuse et ponctuelle, chantier livré dans les délais. — E. Robert — Saint-Denis',
    'Devis transparent et aucun dépassement, résultat parfait. — M. Dubois — Argenteuil',
    'Super communication et respect du planning annoncé. — C. Lefèvre — Boulogne-Billancourt',
    'Rénovation complète réussie, finitions propres et durables. — H. Garnier — Versailles',
    'Intervention rapide pour une fuite, service efficace. — T. Morel — Colombes',
    'Excellent rapport qualité/prix, très satisfait du résultat. — V. Laurent — Créteil'
  ];

  return (
    <div className="section pt-10">
      <h1 className="heading text-3xl font-semibold mb-6">Avis clients</h1>
      <ul className="grid md:grid-cols-3 gap-4">
        {avis.map((txt,i)=>(
          <li key={i} className="tile p-5 text-sm">
            {`“${txt}”`}
          </li>
        ))}
      </ul>
    </div>
  );
}
