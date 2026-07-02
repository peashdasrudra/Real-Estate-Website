'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const button = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-luxury disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 select-none whitespace-nowrap',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-900 text-white shadow-premium hover:bg-primary-800 hover:shadow-premium-lg hover:-translate-y-0.5',
        secondary:
          'bg-secondary-500 text-primary-950 shadow-gold hover:bg-secondary-400 hover:shadow-premium-lg hover:-translate-y-0.5',
        outline:
          'border border-primary-900/20 text-primary-900 hover:bg-primary-900 hover:text-white',
        ghost: 'text-primary-900 hover:bg-primary-900/5',
        gold:
          'bg-gradient-gold text-primary-950 shadow-gold hover:shadow-premium-lg hover:-translate-y-0.5 font-semibold',
        light: 'bg-white text-primary-900 shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5',
        glass:
          'backdrop-blur-xl bg-white/10 text-white border border-white/20 hover:bg-white/20',
        link: 'text-primary-900 underline-offset-4 hover:underline px-0',
        whatsapp: 'bg-[#25D366] text-white hover:bg-[#1ea952] shadow-premium hover:-translate-y-0.5',
        call: 'bg-accent-500 text-white hover:bg-accent-600 shadow-premium hover:-translate-y-0.5',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-lg',
        md: 'h-11 px-6 text-sm rounded-xl',
        lg: 'h-14 px-8 text-base rounded-xl',
        xl: 'h-16 px-10 text-lg rounded-2xl',
        icon: 'h-10 w-10 rounded-xl',
        'icon-sm': 'h-9 w-9 rounded-lg',
        'icon-lg': 'h-12 w-12 rounded-xl',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(button({ variant, size }), className)} {...props} />
  )
);
Button.displayName = 'Button';
