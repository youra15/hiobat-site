import { useState } from 'react';
const initial = { typeBien:'', surface:'', pieces:'', travaux:[], delai:'', codePostal:'', ville:'', prenom:'', nom:'', email:'', phone:'', budget:'', description:'' };
const steps = ['Votre bien','Votre projet','Localisation','Coordonnées','Récapitulatif'];

export default function Survey(){
  const [data, setData] = useState(initial);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const total = steps.length;

  const next = () => setStep(s => Math.min(s+1, total-1));
  const prev = () => setStep(s => Math.max(s-1, 0));
  const handle = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggle = (val) => setData(d => ({ ...d, travaux: d.travaux.includes(val) ? d.travaux.filter(x=>x!==val) : [...d.travaux, val]}));
  const progress = Math.round(((step+1)/total)*100);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        formData.append(k, Array.isArray(v) ? v.join(', ') : v);
      });
      // (facultatif) objet et redirection
      formData.append('_subject', 'Nouvelle demande — Formulaire Rénovation');
      // formData.append('_redirect', 'http://localhost:3007/merci');

      const res = await fetch('https://formspree.io/f/mgvlrdya', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        alert('Merci ! Votre demande a été envoyée.');
        // window.location.href = '/merci';
      } else {
        alert("Envoi impossible pour le moment. Vérifiez l'ID du formulaire.");
      }
    } catch (err) {
      alert('Erreur réseau. Réessayez.');
    }
    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto section">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="heading text-xl font-semibold">Rénover mon bien</h1>
          <span className="text-sm text-gray-700">{steps[step]}</span>
        </div>
        <div className="mt-3 w-full bg-white rounded-full h-2 overflow-hidden border" style={{borderColor:'#CBD5E1'}}>
          <div className="bg-accent h-2" style={{width: progress + '%'}}></div>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-6">
        {step===0 && (
          <section className="space-y-4">
            <div>
              <label className="label">Type de bien</label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {['Appartement','Maison','Local professionnel','Autre'].map(opt => (
                  <button type="button" key={opt} onClick={()=>handle('typeBien', opt)}
                    className={'px-4 py-3 rounded-xl border bg-white ' + (data.typeBien===opt ? 'border-accent' : 'border-[color:#CBD5E1]')}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><label className="label">Surface (m²)</label><input className="input" type="number" min="1" value={data.surface} onChange={e=>handle('surface', e.target.value)} placeholder="ex: 65" /></div>
              <div><label className="label">Nombre de pièces</label><input className="input" type="number" min="1" value={data.pieces} onChange={e=>handle('pieces', e.target.value)} placeholder="ex: 3" /></div>
            </div>
          </section>
        )}

        {step===1 && (
          <section className="space-y-4">
            <div>
              <label className="label">Travaux souhaités</label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {['Rénovation complète','Cuisine','Salle de bain','Peinture','Électricité','Plomberie','Sol / parquet','Isolation'].map(opt => (
                  <label key={opt} className={'border rounded-xl px-3 py-2 cursor-pointer bg-white ' + (data.travaux.includes(opt) ? 'border-accent' : 'border-[color:#CBD5E1]')}>
                    <input type="checkbox" className="mr-2" checked={data.travaux.includes(opt)} onChange={()=>toggle(opt)} />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="label">Budget estimé</label>
              <select className="input" value={data.budget} onChange={e=>handle('budget', e.target.value)}>
                <option value="">Sélectionner</option>
                <option>&lt; 10 000 €</option>
                <option>10 000 € – 30 000 €</option>
                <option>30 000 € – 60 000 €</option>
                <option>&gt; 60 000 €</option>
              </select>
            </div>
            <div>
              <label className="label">Délai souhaité</label>
              <select className="input" value={data.delai} onChange={e=>handle('delai', e.target.value)}>
                <option value="">Sélectionner</option>
                <option>Au plus vite</option>
                <option>1–3 mois</option>
                <option>3–6 mois</option>
                <option>+ de 6 mois</option>
              </select>
            </div>
            <div>
              <label className="label">Description</label>
              <textarea className="input" rows="3" value={data.description} onChange={e=>handle('description', e.target.value)} placeholder="Quelques détails utiles..."></textarea>
            </div>
          </section>
        )}

        {step===2 && (
          <section className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div><label className="label">Code postal</label><input className="input" value={data.codePostal} onChange={e=>handle('codePostal', e.target.value)} placeholder="ex: 75017" /></div>
              <div><label className="label">Ville</label><input className="input" value={data.ville} onChange={e=>handle('ville', e.target.value)} placeholder="ex: Paris" /></div>
            </div>
          </section>
        )}

        {step===3 && (
          <section className="space-y-4">
            <div className="grid md:grid-cols-2 gap-3">
              <div><label className="label">Prénom</label><input className="input" value={data.prenom} onChange={e=>handle('prenom', e.target.value)} placeholder="Votre prénom" /></div>
              <div><label className="label">Nom</label><input className="input" value={data.nom} onChange={e=>handle('nom', e.target.value)} placeholder="Votre nom" /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div><label className="label">Email</label><input className="input" type="email" value={data.email} onChange={e=>handle('email', e.target.value)} placeholder="vous@email.com" /></div>
              <div><label className="label">Téléphone</label><input className="input" type="tel" value={data.phone} onChange={e=>handle('phone', e.target.value)} placeholder="06..." /></div>
            </div>
          </section>
        )}

        {step===4 && (
          <section className="space-y-3 text-sm">
            <p className="text-gray-700">Merci, voici votre récapitulatif :</p>
            <ul className="grid grid-cols-1 gap-2">
              {Object.entries(data).map(([k,v]) => (
                <li key={k} className="tile px-3 py-2">
                  <strong className="capitalize">{k}</strong> : {Array.isArray(v) ? v.join(', ') : v || '-'}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex items-center justify-between pt-2">
          <button type="button" onClick={prev} disabled={step===0} className="btn btn-outline disabled:opacity-50">Retour</button>
          {step < total - 1 ? (
            <button type="button" onClick={next} className="btn btn-primary">Suivant</button>
          ) : (
            <button type="submit" disabled={submitting} className="btn btn-primary">{submitting ? 'Envoi…' : 'Envoyer ma demande'}</button>
          )}
        </div>
      </form>
    </div>
  );
}
