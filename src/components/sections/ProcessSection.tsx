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
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative size-20 mb-8 flex items-center justify-center">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-7xl md:text-8xl font-black italic text-white/10 pointer-events-none group-hover:text-white/15 transition-colors z-0">
                  {step.number}
                </span>
                <div className="size-20 rounded-full bg-white flex items-center justify-center shadow-2xl relative z-10">
                  <step.icon className="size-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/80 max-w-[280px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <SectionWave color="fill-destructive" position="bottom" />
    </section>
  );
};
