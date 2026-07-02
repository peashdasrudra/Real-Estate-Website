import Link from 'next/link';
import { Container } from '@/components/ui/layout';
import { ChevronRight } from 'lucide-react';

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  image?: string;
}) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-950 text-white overflow-hidden">
      {image && (
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/80 to-primary-950/95" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(212,175,55,0.15) 0%, transparent 50%)' }} />
      <Container className="relative">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? <Link href={b.href} className="hover:text-white">{b.label}</Link> : <span className="text-white">{b.label}</span>}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">
            <span className="h-px w-8 bg-secondary-500" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-heading text-display-lg mt-4 text-balance max-w-3xl">{title}</h1>
        {description && <p className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">{description}</p>}
      </Container>
    </section>
  );
}
