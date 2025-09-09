export default function Services(){
  const items = [
    {
      k: 'renov',
      t: 'Rénovation intérieure',
      img: '/services/renovation.jpg',
      pts: ['Cuisines & salles de bain','Cloisons, sols, menuiseries','Optimisation d’espace']
    },
    {
      k: 'plomberie',
      t: 'Plomberie',
      img: '/services/plomberie.jpg',
      pts: ['Recherche de fuite','Remplacement sanitaire','Urgences & dépannage']
    },
    {
      k: 'peinture',
      t: 'Peinture',
      img: '/services/peinture.jpg',
      pts: ['Préparation soignée','Enduits & ponçage','Peintures durables']
    },
    {
      k: 'elec',
      t: 'Électricité',
      img: '/services/electricite.jpg',
      pts: ['Mise aux normes','Éclairage & prises','Tableaux électriques']
    },
  ];

  return (
    <div className="space-y-8 pt-8">
      <h1 className="heading text-3xl font-semibold">Nos prestations</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map(s => (
          <div key={s.k} className="space-y-3">
            {/* IMAGE CADRÉE (style uniforme) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.img}
              alt={s.t}
              className="w-full h-64 object-cover rounded-2xl shadow-soft"
              loading="lazy"
            />

            {/* TEXTE */}
            <div className="tile p-6">
              <h2 className="text-xl font-semibold">{s.t}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {s.pts.map((p,i)=>(
                  <li key={i} className="p-3 bg-white rounded-xl border">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
