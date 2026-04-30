'use client';

import { motion } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="ETS TLSP Sécurité Privée"
              className="h-12 w-auto shrink-0 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl leading-none tracking-tight">ETS TLSP</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500">Sécurité Privée</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  isActive(link.path) ? 'text-accent' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:695438218"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-all active:scale-95 shadow-md shadow-primary/20"
            >
              <Phone className="w-4 h-4" />
              6 95 43 82 18
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold ${
                isActive(link.path) ? 'text-accent' : 'text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:695438218"
            className="flex items-center gap-3 text-lg font-bold text-primary mt-2"
          >
            <Phone className="w-5 h-5 text-accent" />
            6 95 43 82 18
          </a>
        </motion.div>
      )}
    </nav>
  );
}
