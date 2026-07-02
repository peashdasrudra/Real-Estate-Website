import { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badge = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary-900/5 text-primary-900 border border-primary-900/10',
        gold: 'bg-secondary-500/10 text-secondary-700 border border-secondary-500/20',
        primary: 'bg-primary-900 text-white',
        accent: 'bg-accent-500/10 text-accent-700 border border-accent-500/20',
        success: 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20',
        outline: 'border border-primary-900/20 text-primary-900',
        glass: 'backdrop-blur-xl bg-white/10 text-white border border-white/20',
        solid: 'bg-secondary-500 text-primary-950',
      },
      size: {
        sm: 'h-6 px-2.5 text-xs',
        md: 'h-7 px-3 text-xs',
        lg: 'h-8 px-4 text-sm',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
);

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badge({ variant, size }), className)} {...props} />;
}
