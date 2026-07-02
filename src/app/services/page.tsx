import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { SERVICES } from '@/lib/content';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { FAQ } from '@/components/faq';

export const metadata: Metadata = {
  title: 'Real Estate Services in Bangladesh',
  description: 'Property buying, selling, management, investment consulting, interior design, construction, and more. End-to-end real estate services by Golden Heights.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="A complete property partner — for life."
        description="Beyond building Bangladesh's finest addresses, we buy, sell, manage, and consult across the entire real estate lifecycle."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="group h-full p-7 bg-white rounded-2xl border border-primary-900/5 shadow-premium hover:shadow-premium-lg hover:border-secondary-500/30 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-primary-900/5 flex items-center justify-center group-hover:bg-secondary-500 group-hover:text-primary-950 transition-all">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mt-5">{s.title}</h3>
                  <p className="mt-3 text-sm text-primary-900/70 leading-relaxed">{s.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="text-xs text-primary-900/60 flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-secondary-500" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
                <span className="h-px w-8 bg-secondary-500" /> Why us
              </div>
              <h2 className="font-heading text-display-md mt-4 text-balance">
                A team with the experience to deliver.
              </h2>
              <p className="mt-5 text-lg text-primary-900/70 leading-relaxed">
                We don't outsource any part of our service. From acquisition to management, every touchpoint is handled by a Golden Heights employee — trained, accountable, and motivated by something other than commission.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { v: '17+', l: 'Years operating' },
                  { v: '320+', l: 'Units managed' },
                  { v: '98%', l: 'Renewal rate' },
                  { v: '4.9/5', l: 'Customer rating' },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-heading text-4xl font-bold gradient-text">{s.v}</p>
                    <p className="text-xs text-primary-900/60 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-primary-950 text-white p-8 rounded-3xl">
                <h3 className="font-heading text-2xl font-bold">Get a free consultation</h3>
                <p className="mt-3 text-white/70">Speak to a senior advisor. No obligation. No pressure.</p>
                <div className="mt-6 space-y-3">
                  <Link href="/contact"><Button variant="gold" size="lg" className="w-full">Book a Call</Button></Link>
                  <Link href="/property-management"><Button variant="glass" size="lg" className="w-full">Property Management</Button></Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <FAQ />
    </>
  );
}
