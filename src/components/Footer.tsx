import { Clock, MapPin, Phone, Instagram, Facebook, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="ETS TLSP Sécurité Privée"
                className="h-14 w-auto rounded bg-white object-contain p-1"
              />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl leading-none tracking-tight">ETS TLSP</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-accent/80">Sécurité Privée</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Votre partenaire de confiance à Douala pour une sécurité sur mesure. Agents formés, intervention rapide et protection 24h/24.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'À Propos', href: '/a-propos' },
                { label: 'Nos Services', href: '/#services' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Gardiennage', 'Sécurité Événementielle', 'Protection Rapprochée', 'Sécurité Entreprise'].map((item) => (
                <li key={item} className="text-slate-400 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact direct</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Adresse</p>
                  <p className="text-slate-400">Carrefour Tiff, Douala, Cameroun</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Téléphone</p>
                  <a href="tel:695438218" className="text-slate-400 hover:text-white transition-colors">6 95 43 82 18</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Disponibilité</p>
                  <p className="text-slate-400">7j/7 - 24h/24</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} ETS TLSP Sécurité Privée. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
