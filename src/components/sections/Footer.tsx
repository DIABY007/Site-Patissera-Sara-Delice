'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, MessageCircle, Phone, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-text-dark text-white/60 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="font-display text-2xl font-bold italic text-white"
            >
              Sara Délice
            </Link>
            <p className="max-w-xs leading-relaxed">
              L'excellence de la pâtisserie artisanale livrée chez vous. Des ingrédients de qualité pour des moments d'exception.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
              >
                <Camera className="size-5" />
              </Link>
              <Link
                href="https://wa.me/22655305152"
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
              >
                <MessageCircle className="size-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-bold text-white">Liens Rapides</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">Nos Produits</Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors">Comment ça marche</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">À propos</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-bold text-white">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <span>+226 55 30 51 52</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <span>Livraison partout à Bobo Dioulasso</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {new Date().getFullYear()} Sara Délice. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
