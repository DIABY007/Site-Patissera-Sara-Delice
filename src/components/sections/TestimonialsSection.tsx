'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const testimonials = [
  {
    id: 1,
    author: 'Mariama B.',
    text: 'Le gâteau d\'anniversaire était tout simplement magnifique et délicieux ! Pas trop sucré, exactement comme on aime. Merci Sara !',
    stars: 5,
  },
  {
    id: 2,
    author: 'Jean-Pierre K.',
    text: 'Les nems et les croquettes sont une tuerie. Parfaits pour nos apéros entre amis. Je recommande vivement le service de livraison.',
    stars: 5,
  },
  {
    id: 3,
    author: 'Fatoumata D.',
    text: 'Les crêpes au chocolat sont le goûter préféré de mes enfants. La pâte est légère et le chocolat de super qualité.',
    stars: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-title text-text-dark mb-4"
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="italic text-text-medium opacity-70"
          >
            Leur satisfaction est notre plus belle récompense.
          </motion.p>
        </div>

        {/* Mobile: Horizontal Scroll Area */}
        <div className="md:hidden -mx-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 px-4 pb-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-[85vw] flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <Card className="h-full border-blush/40 bg-surface-card rounded-[20px] relative overflow-hidden group hover:shadow-lg transition-all">
    <CardContent className="p-8 pt-12">
      {/* Quote Mark Decoration */}
      <span className="font-display text-8xl italic text-blush opacity-20 absolute -top-4 -left-2 pointer-events-none">
        &ldquo;
      </span>
      
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="size-4 fill-primary text-primary" />
        ))}
      </div>

      <p className="font-body text-text-medium italic leading-relaxed mb-6 relative z-10 whitespace-normal">
        &quot;{testimonial.text}&quot;
      </p>

      <div className="mt-auto">
        <p className="font-body font-bold text-text-dark">
          {testimonial.author}
        </p>
        <p className="text-xs text-text-muted">Client Vérifié</p>
      </div>
    </CardContent>
  </Card>
);
