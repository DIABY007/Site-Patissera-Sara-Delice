'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Accueil', href: '#' },
  { name: 'Produits', href: '#products' },
  { name: 'Processus', href: '#process' },
  { name: 'À propos', href: '#about' },
  { name: 'Avis', href: '#testimonials' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'h-16 bg-background/80 backdrop-blur-md border-b border-border'
          : 'h-[72px] bg-transparent'
      )}
    >
      <nav className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-bold italic text-primary"
        >
          Sara Délice
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://wa.me/224000000000"
            className={cn(
              buttonVariants({ variant: 'default' }),
              "rounded-full bg-primary hover:bg-berry text-white px-6 h-10 text-sm font-medium"
            )}
          >
            Commander
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="size-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="bg-background border-l-border p-0">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex flex-col h-full px-8 py-12">
                <div className="flex flex-col gap-8 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-2xl font-medium text-text-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <Link 
                  href="https://wa.me/22655305152"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    "rounded-full bg-primary hover:bg-berry text-white w-full py-7 mt-12 text-lg font-bold"
                  )}
                >
                  Commander maintenant
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
