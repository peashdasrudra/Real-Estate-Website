import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, ...props }: HTMLAttributes<HTMLInputElement> & { type?: string }) {
  return (
    <input
      className={cn(
        'h-12 w-full rounded-xl border border-primary-900/15 bg-white px-4 text-sm text-primary-900 placeholder:text-primary-900/40 transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none disabled:opacity-50',
        className
      )}
      {...(props as any)}
    />
  );
}

export function Textarea({ className, ...props }: HTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'w-full rounded-xl border border-primary-900/15 bg-white px-4 py-3 text-sm text-primary-900 placeholder:text-primary-900/40 transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none disabled:opacity-50 min-h-[120px] resize-y',
        className
      )}
      {...props}
    />
  );
}

export function Select({ className, children, ...props }: HTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'h-12 w-full appearance-none rounded-xl border border-primary-900/15 bg-white px-4 pr-10 text-sm text-primary-900 transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none disabled:opacity-50',
        className
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B2545' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 12px center',
        backgroundSize: '16px',
      }}
      {...(props as any)}
    >
      {children}
    </select>
  );
}

export function Label({ className, ...props }: HTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn('text-sm font-medium text-primary-900/80 mb-1.5 block', className)}
      {...props}
    />
  );
}
