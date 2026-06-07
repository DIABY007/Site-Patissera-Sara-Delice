'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWaveProps {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
}

export const SectionWave: React.FC<SectionWaveProps> = ({
  color = 'fill-background',
  position = 'top',
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute left-0 w-full leading-[0] z-10',
        position === 'top' ? 'top-0 -translate-y-[99%]' : 'bottom-0 translate-y-[99%] rotate-180',
        className
      )}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn('w-full h-[60px] md:h-[100px]', color)}
      >
        <path d="M0,0 C360,80 720,-40 1440,0 L1440,120 L0,120 Z" />
      </svg>
    </div>
  );
};
