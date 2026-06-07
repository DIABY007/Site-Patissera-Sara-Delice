'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
          {/* Image Side */}
          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full max-w-[420px] mx-auto"
            >
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-blush rounded-[30px] rotate-3 -z-10 opacity-40" />
              
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl -rotate-2 border-8 border-white">
                <Image
                  src="/images/owner.jpg"
                  alt="Sara, notre pâtissière passionnée"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Float Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[180px]"
              >
                <p className="text-sm font-body font-medium text-text-dark leading-snug">
                  "Chaque recette a une histoire, chaque gâteau est un cadeau."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">
                Notre Histoire
              </span>
              <h2 className="text-section-title text-text-dark leading-tight">
                Passionnée de saveurs, <br />
                <span className="italic text-primary">pâtissière par amour.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 text-text-medium leading-relaxed"
            >
              <p className="text-lg">
                Bienvenue dans mon univers sucré. Je suis Sara, et ma mission est simple : transformer vos moments du quotidien en souvenirs extraordinaires grâce à des créations artisanales d'exception.
              </p>
              <p>
                Tout a commencé dans ma petite cuisine, avec l'envie de partager le vrai goût du "fait-maison". Aujourd'hui, je continue de sélectionner personnellement chaque ingrédient — beurre de qualité, chocolat fin, fruits de saison — pour vous garantir une fraîcheur et un goût inégalés.
              </p>
              <p className="font-display text-2xl italic text-primary mt-4">
                L'authenticité se goûte à chaque bouchée.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4"
            >
              <Badge variant="outline" className="rounded-full border-primary text-primary px-4 py-2 text-sm">
                📍 Fait avec ❤️ à Conakry
              </Badge>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
