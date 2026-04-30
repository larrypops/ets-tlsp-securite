'use client';

import { motion } from 'motion/react';
import { Shield, Target, Eye, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <Shield className="w-[500px] h-[500px] text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white"
          >
            À propos de <span className="text-accent">ETS TLSP</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            L'excellence opérationnelle au service de votre sécurité à Douala.
          </motion.p>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/images/image-02.jpg" 
                  alt="Équipe ETS TLSP" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-accent/20 rounded-[50px] blur-2xl -z-10 group-hover:bg-accent/40 transition-colors" />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-3xl shadow-2xl space-y-2 hidden md:block"
              >
                <p className="text-accent font-black text-4xl">10+</p>
                <p className="text-white font-bold text-sm">Années d'expertise<br/>cumulées</p>
              </motion.div>
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-primary leading-tight">Garantir la sécurité par l'engagement et la rigueur</h2>
                <p className="text-slate-600 leading-relaxed">
                  ETS TLSP Sécurité Privée est une agence spécialisée dans la protection des biens et des personnes à Douala. Notre mission est de garantir la sécurité de nos clients grâce à des solutions fiables, modernes et adaptées à chaque situation.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Offrir un service de sécurité professionnel accessible à tous, avec un haut niveau de rigueur et de confiance. Tel est notre engagement quotidien.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Notre Vision</h4>
                    <p className="text-xs text-slate-500">Devenir la référence premium de la sécurité privée au Cameroun.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Notre Mission</h4>
                    <p className="text-xs text-slate-500">Prévenir les risques et garantir la tranquillité totale de nos clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-6">Nos agents font la différence</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Un personnel d'élite, sélectionné pour sa probité et formé rigoureusement aux situations critiques.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target />, title: "Technique", desc: "Formés aux techniques de sécurité moderne et intervention." },
              { icon: <Shield />, title: "Discipline", desc: "Rigueur militaire et professionnalisme exemplaire." },
              { icon: <Eye />, title: "Réactivité", desc: "Capacité d'analyse rapide et discrétion absolue." }
            ].map((prop, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all space-y-6">
                <div className="text-accent">{prop.icon}</div>
                <h3 className="text-2xl font-bold">{prop.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-primary">Une approche personnalisée</h2>
                    <p className="text-slate-500">Chaque client est unique. Nous analysons vos besoins pour proposer une solution adaptée et efficace.</p>
                </div>
                
                <div className="space-y-8 text-left">
                    {[
                      "Audit initial du site et analyse des risques",
                      "Recrutement et affectation d'agents spécifiques selon le profil requis",
                      "Mise en place de protocoles de communication 24h/24",
                      "Rapports réguliers et ajustement constant du dispositif"
                    ].map((step, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-surface rounded-3xl border border-slate-100 hover:border-accent/30 transition-colors cursor-default"
                        >
                            <span className="text-4xl font-black text-accent/20">0{i+1}</span>
                            <p className="font-bold text-primary">{step}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-white p-6 sm:p-12 md:p-20 rounded-3xl md:rounded-[60px] shadow-xl border border-slate-100 space-y-8">
                    <div className="w-20 h-20 bg-accent rounded-3xl mx-auto flex items-center justify-center text-primary shadow-xl shadow-accent/20">
                        <MapPin className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-primary">Localisation stratégique</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Basée à <span className="font-bold text-primary">Douala (carrefour Tiff)</span>, notre équipe intervient rapidement dans toute la ville et ses environs.
                    </p>
                    <div className="flex justify-center gap-8 pt-4">
                        <div className="text-center">
                            <p className="font-black text-primary text-xl">Douala</p>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Siège Social</p>
                        </div>
                        <div className="w-px bg-slate-200" />
                        <div className="text-center">
                            <p className="font-black text-primary text-xl">Littoral</p>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Zone d'action</p>
                        </div>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-black hover:bg-slate-800 transition-all shadow-xl shadow-primary/10">
                        Nous contacter
                        <ArrowRight className="w-5 h-5 text-accent" />
                    </Link>
                </div>
          </div>
      </section>
    </div>
  );
}
