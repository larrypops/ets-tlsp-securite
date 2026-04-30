'use client';

import { motion } from 'motion/react';
import { Shield, Clock, Zap, MapPin, CheckCircle, ArrowRight, Phone, Users } from 'lucide-react';
import Link from 'next/link';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent rounded-l-[100px] blur-3xl opacity-20" />
          <div className="grid grid-cols-12 h-full w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/5 h-full" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-accent text-xs sm:text-sm font-bold tracking-wide"
              >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Sécurité Privée à Douala
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1]"
              >
                Protégez vos biens, vos équipes <span className="text-accent">et vos événements</span> 24h/24
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
              >
                ETS TLSP Sécurité Privée vous accompagne avec des solutions de surveillance, gardiennage et protection rapprochée adaptées à vos besoins spécifiques.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-accent text-primary px-8 py-4 rounded-full font-black flex items-center gap-3 hover:bg-white transition-all shadow-xl shadow-accent/10"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:695438218"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-black flex items-center gap-3 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  Appeler maintenant
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-8 pt-8"
              >
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-primary bg-slate-800 overflow-hidden shadow-lg">
                      <img src={`/images/image-0${(i % 3) + 1}.jpg`} alt="Client ETS TLSP" className="h-full w-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-primary bg-accent flex items-center justify-center text-primary font-black text-xs shadow-lg">
                    +50
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-white font-bold">Confiance de 50+ clients</p>
                  <p className="text-slate-400">à travers tout le Cameroun</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/5 aspect-[4/5]">
                <img 
                  src="/images/image-01.jpg" 
                  alt="ETS TLSP Sécurité" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent rounded-2xl">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-black">Certifié & Fiable</h4>
                      <p className="text-slate-300 text-xs">Une protection intégrale pour vos chantiers et résidences.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-accent font-black uppercase text-sm">Nos Atouts</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary">Une agence de sécurité fiable à Douala</h2>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  Notre réputation repose sur la rigueur de notre recrutement et la qualité de notre formation technique. Nous ne laissons rien au hasard.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Clock />, title: "Disponible 24h/24", desc: "Une veille constante pour votre tranquillité." },
                  { icon: <Users />, title: "Agents Formés", desc: "Personnel expert et hautement qualifié." },
                  { icon: <Zap />, title: "Intervention Rapide", desc: "Délai de réponse minimal en cas d'alerte." },
                  { icon: <CheckCircle />, title: "Solutions Sur Mesure", desc: "Plan de sécurité adapté à votre site." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-4 group cursor-default"
                  >
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-accent rounded-3xl md:rounded-[60px] overflow-hidden shadow-2xl relative">
                <img 
                  src="/images/image-02.jpg" 
                  alt="Équipe TLSP" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                />
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-8 sm:bottom-8 p-5 sm:p-10 bg-white rounded-3xl sm:rounded-[40px] shadow-2xl space-y-4">
                  <div className="flex items-center gap-2 text-accent font-black text-4xl">
                    <Users className="w-8 h-8" />
                    100%
                  </div>
                  <p className="text-slate-900 font-bold text-lg leading-tight">
                    Satisfaction client garantie sur toutes nos missions à Douala.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention Area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl md:rounded-[50px] p-6 sm:p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 transform translate-x-1/2" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-3xl sm:text-4xl font-display font-black text-white">Nous intervenons à Douala et ses environs</h2>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                  Nous couvrons les quartiers de <span className="text-white font-bold">Bonamoussadi, Bonanjo, Akwa, Deido</span> ainsi que Yaoundé et les zones à proximité.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Bonamoussadi', 'Bonanjo', 'Akwa', 'Deido', 'Yaoundé'].map(q => (
                    <span key={q} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm font-semibold">{q}</span>
                  ))}
                </div>
              </div>
              <div className="relative h-64 lg:h-80 bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="/images/image-03.jpg" 
                  alt="Zone d'intervention"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 bg-accent rounded-full animate-ping absolute -top-0 -left-0" />
                    <MapPin className="w-12 h-12 text-accent relative z-10 fill-accent/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-black text-primary">Ils nous font confiance</h2>
            <p className="text-slate-500">Des entreprises et particuliers qui dorment sur leurs deux oreilles.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock logos or icons */}
             {['BTP', 'Banque', 'Logistique', 'Hôtel', 'Event'].map(brand => (
               <div key={brand} className="flex flex-col items-center gap-2">
                 <Shield className="w-12 h-12" />
                 <span className="font-bold text-xs">{brand} Cameroun</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary mb-6 md:mb-8 px-4">
            Besoin d'un service de sécurité fiable ?
          </h2>
          <p className="text-primary/70 text-base sm:text-lg md:text-xl font-bold mb-8 md:mb-12">
            Contactez-nous dès maintenant pour sécuriser vos biens et vos proches avec une équipe professionnelle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a 
              href="tel:695438218" 
              className="bg-primary text-white w-full sm:w-auto px-10 py-5 rounded-full font-black flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all text-lg md:text-xl"
            >
              <Phone className="w-6 h-6" />
              6 95 43 82 18
            </a>
            <Link 
              href="/contact" 
              className="bg-white text-primary w-full sm:w-auto px-10 py-5 rounded-full font-black border-2 border-primary/10 hover:bg-slate-50 transition-all text-lg md:text-xl"
            >
              Demander un devis
            </Link>
          </div>
          <p className="mt-8 font-extrabold text-primary flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            Disponible 24h/24
          </p>
        </div>
      </section>
    </div>
  );
}
