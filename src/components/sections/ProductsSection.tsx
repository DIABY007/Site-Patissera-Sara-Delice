'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { SectionWave } from '@/components/ui/section-wave';
import { cn } from '@/lib/utils';

const categories = ['Tout', 'Crêpes', 'Pancakes', 'Gâteaux', 'Salé'];

const products = [
  {
    id: 1,
    name: 'Crêpe au chocolat & confettis',
    category: 'Crêpes',
    price: '25.000 FG',
    image: '/images/Crepe au chocolat et confetis.jpg',
    description: 'Une crêpe généreuse nappée de chocolat fondant et saupoudrée de confettis colorés.',
  },
  {
    id: 2,
    name: 'Pancake au chocolat',
    category: 'Pancakes',
    price: '20.000 FG',
    image: '/images/Pancake au chocolat.jpg',
    description: 'Pancakes moelleux servis with une onctueuse sauce au chocolat.',
  },
  {
    id: 3,
    name: 'Gâteau d\'anniversaire Premium',
    category: 'Gâteaux',
    price: '250.000 FG',
    image: '/images/Gateau d\'aniversaire 2.jpg',
    description: 'Un gâteau d\'exception pour vos moments les plus spéciaux, personnalisable sur commande.',
  },
  {
    id: 4,
    name: 'Biscuits Sablés Maison',
    category: 'Tout',
    price: '15.000 FG',
    image: '/images/Biscuit Sable.jpg',
    description: 'Petits biscuits croquants au bon goût de beurre et de vanille.',
  },
  {
    id: 5,
    name: 'Crêpe Nature Classique',
    category: 'Crêpes',
    price: '10.000 FG',
    image: '/images/Creppe Nature.jpg',
    description: 'La simplicité d\'une crêpe traditionnelle, légère et parfumée.',
  },
  {
    id: 6,
    name: 'Croissant au Chocolat',
    category: 'Tout',
    price: '12.000 FG',
    image: '/images/Croissant au Chocolat.jpg',
    description: 'Viennoiserie pur beurre with des barres de chocolat noir intense.',
  },
  {
    id: 7,
    name: 'Nems à la viande hachée',
    category: 'Salé',
    price: '30.000 FG',
    image: '/images/Nems a la viande hacher et vermicelle.jpg',
    description: 'Nems croustillants farcis à la viande hachée et vermicelles.',
  },
  {
    id: 8,
    name: 'Croquettes Croquantes',
    category: 'Salé',
    price: '15.000 FG',
    image: '/images/Croquette.jpg',
    description: 'Petites bouchées salées idéales pour l\'apéritif ou un petit creux.',
  },
  {
    id: 9,
    name: 'Gâteau Fris Traditionnel',
    category: 'Gâteaux',
    price: '20.000 FG',
    image: '/images/Gateau fris.jpg',
    description: 'Spécialité locale revisitée with une touche de modernité.',
  },
];

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Tout');

  const filteredProducts = products.filter(
    (product) => activeCategory === 'Tout' || product.category === activeCategory
  );

  return (
    <section id="products" className="relative py-24 md:py-32 bg-background">
      <SectionWave color="fill-background" position="top" className="opacity-100" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-title text-text-dark mb-4"
          >
            Nos Créations Gourmandes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="italic text-text-medium opacity-70"
          >
            Chaque pièce est unique, préparée le jour même pour une fraîcheur garantie.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={cn(
                'rounded-full px-6 py-2 h-auto text-sm font-medium transition-all',
                activeCategory === category
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-blush/20 text-text-medium border-transparent hover:bg-blush/40'
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group overflow-hidden border-blush/40 bg-surface-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-[20px]">
                  <div className="relative w-full h-[240px] overflow-hidden rounded-t-[12px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="mt-2">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-display text-xl font-bold text-text-dark">
                          {product.name}
                        </h3>
                        <span className="font-body font-bold text-primary whitespace-nowrap">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted mt-2 line-clamp-2">
                        {product.description}
                      </p>
                      <Link
                        href={`https://wa.me/22655305152?text=Je souhaiterais commander : ${product.name}`}
                        className={cn(
                          buttonVariants({ variant: 'ghost' }),
                          "w-full mt-6 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all group-hover:border-primary font-bold"
                        )}
                      >
                        Commander
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
