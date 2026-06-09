'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Heart, Truck } from 'lucide-react';
import { SectionWave } from '@/components/ui/section-wave';

const steps = [
  {
    number: '01',
    title: 'Tu commandes',
    description: 'Sélectionne tes douceurs et envoie ta commande directement via WhatsApp.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Elle prépare',
    description: 'Chaque pâtisserie est confectionnée avec soin, passion et des ingrédients frais.',
    icon: Heart,
  },
  {
    number: '03',
    title: 'Tu reçois',
    description: 'Tes gourmandises sont livrées directement à ton domicile, prêtes à être dégustées.',
    icon: Truck,
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-destructive overflow-hidden">
      <SectionWave color="fill-destructive" position="top" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-title text-white mb-4"
          >
            Comment ça marche ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="italic text-white/70"
          >
            Trois étapes simples pour une pause gourmande réussie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px border-t-2 border-dashed border-white/20 -translate-y-1/2 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              
              {/* Wrapper cercle + chiffre */}
              <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                
                {/* Chiffre décoratif — centré derrière le cercle */}
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '7rem',
                    fontFamily: '"Playfair Display", serif',
                    fontStyle: 'italic',
                    fontWeight: 900,
                    color: 'rgba(255, 255, 255, 0.12)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                    zIndex: 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Cercle icône — par-dessus le chiffre */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <step.icon style={{ width: '32px', height: '32px', color: '#A8284A' }} />
                </div>

              </div>

              {/* Texte du step */}
              <h3 style={{ marginTop: '24px', marginBottom: '12px', color: '#ffffff', fontWeight: 'bold', fontSize: '1.25rem' }}>
                {step.title}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '280px', lineHeight: '1.6' }}>{step.description}</p>

            </div>
          ))}
        </div>
      </div>

      <SectionWave color="fill-destructive" position="bottom" />
    </section>
  );
};
