import Image from 'next/image';
import Link from 'next/link';

export default function Home(){
  return (
<div className="space-y-10 pt-10">

   {/* HERO */}
<section className="text-center">
  <h1 className="heading text-4xl font-semibold">N'ayez plus peur des travaux</h1>
  <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
    HIOBAT met à votre service des artisans spécialisés pour vos rénovations intérieures.
    De la salle de bain à l’électricité, chaque projet est réalisé dans les règles de l’art.
  </p>

  {/* IMAGE PLEINE LARGEUR, SANS CADRE */}
  <Image
    src="/hero.jpg"
    alt="Rénovation intérieure"
    width={1600}
    height={900}
    className="w-full max-w-5xl mx-auto my-8 object-cover"
    priority
  />

  <div className="mt-5 flex justify-center gap-3">
    <Link href="/survey" className="btn btn-primary">Rénover mon bien</Link>
    <Link href="/survey" className="btn btn-outline">Améliorer mon logement</Link>
  </div>
</section>

           {/* PROCESS */}
           <section className="section">
        <h2 className="heading text-2xl font-semibold mb-6">Comment ça marche ?</h2>
        <ol className="grid md:grid-cols-3 gap-4 text-sm">
          {[
            {
              title: '1. Décrivez votre projet',
              desc: 'Prenez rendez-vous avec nos experts qualifiés pour définir vos besoins et établir un contrat adapté.',
              img: '/process/projet.jpg'
            },
            {
              title: '2. Devis & planning',
              desc: 'Recevez un devis détaillé et un planning précis pour lancer vos travaux en toute confiance.',
              img: '/process/devis.jpg'
            },
            {
              title: '3. Réalisation suivie',
              desc: 'Nos artisans réalisent vos travaux avec un suivi rigoureux et une écoute attentive de la clientèle jusqu’à la livraison finale.',
              img: '/process/realisation.jpg'
            }
          ].map((step,i)=>(
            <li
              key={i}
              className="tile p-6 animate-fadeUp text-center flex flex-col items-center"
              style={{animationDelay:(i*0.06)+'s'}}
            >
              {/* IMAGE PLUS GRANDE (120x120) ARRONDIE */}
              <Image
                src={step.img}
                alt={step.title}
                width={880}
                height={880}
                className="mb-4 rounded-2xl object-cover"
              />

              <strong className="block text-base">{step.title}</strong>
              <p className="mt-2 text-gray-700">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6 text-center">
          <Link href="/survey" className="btn btn-primary">Lancer mon projet</Link>
        </div>
      </section>
      
      {/* QUI SOMMES-NOUS */}
      <section className="section">
        <h2 className="heading text-2xl font-semibold mb-4">Qui sommes-nous ?</h2>
        <div className="tile p-6 text-gray-700 leading-relaxed">
          <p>
            Créée en 2020, <strong>HIOBAT</strong> est une entreprise de rénovation intérieure.
          </p>
          <p>
            Forte de plus de 20 ans d’expérience dans le bâtiment, notre équipe
            met son savoir-faire au service des particuliers et des professionnels.
          </p>
          <p>
          La société a été fondée et est dirigée par Ahmed AGUERD, un professionnel passionné par le bâtiment et la rénovation intérieure.          </p>
          <p>
            Basés en Île-de-France, nous intervenons rapidement sur Paris et sa région
            avec des artisans qualifiés et sélectionnés pour leur sérieux.
          </p>
          <p>
            Notre objectif : des chantiers réussis, un accompagnement de confiance
            et des clients pleinement satisfaits.
          </p>
        </div>
      </section>

      {/* AVIS */}
<section className="section">
  <h2 className="heading text-2xl font-semibold mb-4">Ils nous ont fait confiance</h2>
  <ul className="grid md:grid-cols-3 gap-4">
    {[
      'Travail sérieux et soigné, je recommande vivement. — M. El Kharfan — Paris 17e',
      'Rénovation de ma salle de bain impeccable. — C. Martin — Boulogne',
      'Finitions de qualité et délais respectés. — L. Bernard — Paris',
      'Equipe réactive et très professionnelle. —     S. Leroy — Levallois',
      'Devis clair, prix tenus, résultat parfait. — A. Arabi — Clichy',
      'Excellent suivi du chantier, aucun souci. — J. Moreau — Courbevoie',
      'Artisans compétents et travail impeccable. — N. Fontaine — Paris 16e'
    ].map((txt,i)=>(
      <li key={i} className="tile p-5 text-sm animate-fadeUp" style={{animationDelay:(i*0.06)+"s"}}>
        {`“${txt}”`}
      </li>
    ))}
  </ul>
</section>

  {/* ZONES with unified map */}
<section className="section">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="w-full flex justify-center">
      <Image
        src="/map-france-unified.png"
        alt="Carte France avec Île-de-France"
        width={520}
        height={520}
      />
    </div>
    <div>
      <h2 className="heading text-2xl font-semibold">Nos zones d’intervention</h2>
      <h3 className="text-lg font-semibold mt-1">Où nous retrouver ?</h3>
      
      <p className="text-gray-700 mt-3">
        Basés en Île-de-France, nous mettons notre savoir-faire au service de vos projets partout en France. 
        De la première idée jusqu’à la dernière finition, nos techniciens vous accompagnent avec des conseils personnalisés, 
        des devis clairs et un suivi sur-mesure.
      </p>

      <p className="text-gray-700 mt-3">
        ✨ Qualité, réactivité et passion du travail bien fait : c’est notre engagement pour transformer vos envies en réalité, 
        où que vous soyez en France.
      </p>

      <div className="mt-5">
        <Link href="/survey" className="btn btn-primary">Lancer mon projet</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
