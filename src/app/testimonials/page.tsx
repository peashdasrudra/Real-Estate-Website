import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { TESTIMONIALS } from '@/lib/testimonials';
import { TestimonialsSlider } from '@/components/testimonials-slider';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Hear from our clients — 12,500+ families, investors, and businesses who trust Golden Heights.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Trusted by 12,500+ families."
        description="Hear from the people who have made Golden Heights part of their lives — and their portfolios."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <TestimonialsSlider testimonials={TESTIMONIALS} />
        </Container>
      </section>
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Stories
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">Long-form stories from owners.</h2>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <StaggerItem key={t.id}>
                <div className="p-8 bg-white rounded-3xl border border-primary-900/5 shadow-premium">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image src={t.photo} alt={t.name} fill sizes="64px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-semibold">{t.name}</p>
                      <p className="text-xs text-primary-900/60">{t.role}{t.company ? `, ${t.company}` : ''}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-primary-900/80 leading-relaxed italic">"{t.quote}"</p>
                  <p className="mt-4 text-xs text-primary-900/50">{t.property}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>
    </>
  );
}
