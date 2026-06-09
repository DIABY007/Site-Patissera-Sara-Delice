'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { SectionWave } from '@/components/ui/section-wave';
import { cn } from '@/lib/utils';

export const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
      <SectionWave color="fill-primary" position="top" />

      {/* Decorative Dots Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-title text-white mb-6"
          >
            Prêt pour une pause gourmande ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 mb-10 leading-relaxed"
          >
            N'attendez plus pour goûter à l'authenticité de nos créations artisanales. Livraison rapide à domicile pour tous vos moments de bonheur.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="https://wa.me/22655305152"
              className={cn(
                buttonVariants({ variant: 'default' }),
                "rounded-full bg-white text-primary hover:bg-white/90 px-10 py-8 text-lg font-bold shadow-xl transition-all hover:scale-105"
              )}
            >
              Commander maintenant
            </Link>
            <p className="text-white/60 text-sm mt-6">
              Réponse rapide garantie via WhatsApp
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
