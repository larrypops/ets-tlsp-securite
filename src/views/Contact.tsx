'use client';

import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Send, Shield, CheckCircle2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'gardiennage',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    setTimeout(() => {
      setStatus('success');
      // Reset form could go here if real
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary pt-24 pb-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6"
            >
              Contactez <span className="text-accent">ETS TLSP</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg md:text-xl font-medium"
            >
              Besoin de sécuriser vos biens immédiatement ? Notre équipe est prête à intervenir.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="bg-white p-6 sm:p-8 rounded-3xl sm:rounded-[40px] shadow-xl border border-slate-100 flex flex-col gap-8 h-full">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-black text-primary">Informations de contact</h3>
                  <p className="text-slate-500 text-sm">Passez nous voir ou appelez-nous directement. Nous sommes à votre écoute.</p>
                </div>

                <div className="space-y-8">
                  {[
                    { icon: <MapPin />, title: "Adresse", value: "Carrefour Tiff, Douala, Cameroun", color: "bg-accent" },
                    { icon: <Phone />, title: "Téléphone", value: "6 95 43 82 18", color: "bg-primary", isLink: true, href: "tel:695438218" },
                    { icon: <Clock />, title: "Disponibilité", value: "Ouvert 7j/7 - 24h/24", color: "bg-slate-100" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-start gap-4"
                    >
                      <div className={`p-4 ${item.color} ${item.color === 'bg-primary' ? 'text-white' : 'text-primary'} rounded-2xl shadow-lg shadow-black/5`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold text-primary">{item.title}</p>
                        {item.isLink ? (
                          <a href={item.href} className="text-accent font-black text-lg hover:underline">{item.value}</a>
                        ) : (
                          <p className="text-slate-500 text-sm">{item.value}</p>
                        )}
                        {item.title === 'Téléphone' && <p className="text-slate-500 text-xs mt-1 leading-none">Disponible 24h/24</p>}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100">
                    <div className="bg-primary/5 p-6 rounded-3xl flex items-center gap-4">
                        <Shield className="w-10 h-10 text-primary opacity-20" />
                        <p className="text-xs text-slate-600 font-bold leading-tight">
                            Votre sécurité est notre priorité absolue. Intervention en moins de 30 min.
                        </p>
                    </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl sm:rounded-[40px] shadow-2xl border border-slate-100 h-full">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
                        <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-display font-black text-primary">Demande envoyée !</h2>
                        <p className="text-slate-500 mt-2">Un conseiller sécurité vous contactera dans les plus brefs délais.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-primary font-black underline"
                    >
                      Envoyer une autre demande
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl sm:text-3xl font-display font-black text-primary">Formulaire de demande</h2>
                      <p className="text-slate-500">Remplissez ce formulaire pour obtenir un devis gratuit et personnalisé.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-2">
                        <label className="font-bold text-slate-700">Nom complet</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Votre nom"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-bold text-slate-700">Téléphone</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="6 XX XX XX XX"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-bold text-slate-700">Email (optionnel)</label>
                        <input 
                          type="email" 
                          placeholder="votre@email.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-bold text-slate-700">Type de service</label>
                        <select 
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-colors appearance-none"
                          value={formData.service}
                          onChange={e => setFormData({...formData, service: e.target.value})}
                        >
                          <option value="gardiennage">Gardiennage & Surveillance</option>
                          <option value="evenement">Sécurité événementielle</option>
                          <option value="vip">Protection VIP / Rapprochée</option>
                          <option value="entreprise">Sécurité d'entreprise</option>
                          <option value="autre">Autre service</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <label className="font-bold text-slate-700">Votre message</label>
                      <textarea 
                        rows={4}
                        required
                        placeholder="Décrivez vos besoins en sécurité..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-6 outline-none focus:border-accent transition-colors resize-none"
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-800 transition-all disabled:opacity-50 text-lg shadow-xl shadow-primary/20"
                    >
                      {status === 'sending' ? 'Envoi en cours...' : (
                        <>
                          Envoyer la demande
                          <Send className="w-5 h-5 text-accent" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full h-[320px] sm:h-[400px] bg-slate-100 rounded-3xl sm:rounded-[50px] relative overflow-hidden border border-slate-200 shadow-inner group">
                <img 
                    src="/images/image-03.jpg" 
                    alt="Carte Douala" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[20s] linear"
                />
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
                    <div className="relative inline-block">
                        <div className="w-16 h-16 bg-accent rounded-full animate-ping absolute inset-0 opacity-40" />
                        <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-accent shadow-2xl border-4 border-white">
                            <Shield className="w-8 h-8" />
                        </div>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-2xl shadow-2xl">
                        <p className="font-black text-primary leading-tight">Retrouvez-nous au</p>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Carrefour Tiff, Douala</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Quick Call Banner */}
      <section className="py-12 bg-accent">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-xl sm:text-2xl font-display font-black text-primary flex flex-wrap items-center justify-center gap-4">
                  Besoin d’une intervention rapide ? 
                  <a href="tel:695438218" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:scale-105 transition-all">
                    <Phone className="w-5 h-5 text-accent" />
                    Appeler maintenant
                  </a>
              </h2>
          </div>
      </section>
    </div>
  );
}
