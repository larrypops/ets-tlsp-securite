'use client';

import { motion } from 'motion/react';
import { Shield, Users, Calendar, Building2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Gardiennage & Surveillance",
    desc: "Surveillance de jour et de nuit pour maisons, bureaux et chantiers avec rondes régulières.",
    items: ["Surveillance 24h/24", "Protection résidentielle", "Rondes de sécurité"],
    image: "/images/image-01.jpg"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Sécurité Événementielle",
    desc: "Gestion complète des accès et contrôle des foules pour mariages, concerts et événements privés.",
    items: ["Gestion des accès", "Contrôle des foules", "Agents en tenue"],
    image: "/images/image-02.jpg"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Protection Rapprochée",
    desc: "Services VIP discrets et professionnels pour personnalités et délégations.",
    items: ["Protection VIP", "Discrétion absolue", "Équipe formée aux risques"],
    image: "/images/image-03.jpg"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Sécurité d’Entreprise",
    desc: "Solutions de sécurisation des locaux professionnels et prévention des intrusions.",
    items: ["Prévention des vols", "Sécurisation employés", "Audit de sécurité"],
    image: "/images/image-01.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-bold uppercase tracking-widest text-sm"
          >
            Nos Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary"
          >
            Solutions de sécurité complètes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-500 leading-relaxed"
          >
            Basée à Douala, ETS TLSP Sécurité Privée propose des services sur mesure pour garantir une protection efficace, discrète et continue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-surface rounded-3xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row h-full shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-square w-full overflow-hidden lg:h-auto lg:w-2/5 lg:aspect-auto">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors" />
                <div className="absolute top-4 left-4 bg-accent p-3 rounded-2xl text-primary shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-bold text-primary group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all">
                    Demander un devis
                    <ChevronRight className="w-4 h-4 text-accent" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
