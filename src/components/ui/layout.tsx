import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container', className)} {...props} />;
}

export function Section({ className, ...props }: HTMLAttributes<HTMLElement> & { id?: string }) {
  return <section className={cn('py-20 md:py-28 lg:py-32', className)} {...(props as any)} />;
}

export function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold',
        className
      )}
    >
      <span className="h-px w-8 bg-secondary-500" />
      {children}
    </div>
  );
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        'font-heading font-bold text-primary-900 text-display-md mt-4',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('mt-5 text-lg text-primary-900/70 max-w-2xl leading-relaxed', className)}>
      {children}
    </p>
  );
}
