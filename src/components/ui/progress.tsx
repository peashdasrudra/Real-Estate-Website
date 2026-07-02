'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn('relative h-2 rounded-full bg-primary-900/5 overflow-hidden', className)}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-y-0 left-0 rounded-full bg-gradient-gold"
      />
    </div>
  );
}
