import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { FadeUp } from '@/components/ui/motion';
import { TrendingUp, Globe, Shield, BarChart3, Building2, Wallet } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Investment — Real Estate Investment in Bangladesh',
  description: 'Why Bangladesh is one of Asia\'s most compelling real estate investment opportunities. Returns, risks, and our 2026 outlook.',
};

export default function InvestmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investment"
        title="An emerging market, maturing fast."
        description="Bangladesh is one of the most compelling real estate investment opportunities in Asia. Here is the data, the risks, and our 2026 outlook."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Investment' }]}
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=2400"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { v: '14%', l: '5-yr CAGR · capital appreciation' },
              { v: '5-7%', l: 'Gross rental yield (residential)' },
              { v: '7-9%', l: 'Gross rental yield (commercial)' },
              { v: '7.1%', l: 'Projected GDP growth 2026' },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="p-6 bg-white rounded-2xl border border-primary-900/5 shadow-premium text-center">
                  <p className="font-heading text-4xl md:text-5xl font-bold gradient-text">{s.v}</p>
                  <p className="text-xs text-primary-900/60 mt-2">{s.l}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
                <span className="h-px w-8 bg-secondary-500" /> Why Bangladesh
              </div>
              <h2 className="font-heading text-display-md mt-4 text-balance">
                Structural undersupply, accelerating demand.
              </h2>
              <p className="mt-5 text-lg text-primary-900/70 leading-relaxed">
                Bangladesh's urban housing deficit is estimated at 8.2 million units, growing by 200,000 units per year. Against this demand, supply of Grade-A inventory is structurally constrained.
              </p>
              <p className="mt-4 text-primary-900/70 leading-relaxed">
                The result: double-digit capital appreciation in prime Dhaka locations for the past decade — driven by demographics, urbanisation, and a young population entering their wealth-formation years.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: TrendingUp, l: 'GDP Growth', v: '7.1%' },
                  { Icon: Building2, l: 'Urban Housing Deficit', v: '8.2M' },
                  { Icon: Globe, l: 'NRB Remittances', v: '$23B' },
                  { Icon: BarChart3, l: 'Median Age', v: '28 yrs' },
                  { Icon: Shield, l: 'Land Tenure', v: 'Freehold' },
                  { Icon: Wallet, l: 'Mortgage Penetration', v: '< 5%' },
                ].map((s, i) => (
                  <div key={i} className="p-5 bg-white rounded-2xl border border-primary-900/5">
                    <s.Icon className="h-5 w-5 text-secondary-700" />
                    <p className="font-heading text-2xl font-bold mt-3">{s.v}</p>
                    <p className="text-xs text-primary-900/60 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> For NRB Investors
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">A complete NRB investment service.</h2>
            <p className="mt-5 text-lg text-primary-900/70">From selection to ongoing management, we handle everything — wherever you are in the world.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Consultation', body: 'A 60-minute video call with our NRB specialist to understand your goals, timeline, and budget.' },
              { step: '02', title: 'Selection & Due Diligence', body: 'We shortlist properties, conduct title searches, and prepare an investment memo for your review.' },
              { step: '03', title: 'Acquisition', body: 'We handle document preparation, registration, banking, and tax filing — entirely remotely.' },
              { step: '04', title: 'Ongoing Management', body: 'Tenant sourcing, rent collection, maintenance, and quarterly statements for as long as you own.' },
              { step: '05', title: 'Exit', body: 'When you are ready to sell, our resale team manages marketing, negotiation, and closing.' },
              { step: '06', title: 'Tax & Reporting', body: 'Annual tax filing, repatriation support, and compliance with Bangladesh Bank NRB rules.' },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="p-7 bg-white rounded-2xl border border-primary-900/5 h-full">
                  <p className="font-heading text-4xl font-bold gradient-text">{s.step}</p>
                  <h3 className="font-heading text-lg font-semibold mt-3">{s.title}</h3>
                  <p className="text-sm text-primary-900/70 mt-2 leading-relaxed">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-primary-950 text-white">
        <Container className="text-center">
          <h2 className="font-heading text-display-md text-balance max-w-2xl mx-auto">Speak to an NRB investment advisor.</h2>
          <p className="mt-4 text-white/70 text-lg">30-minute consultation. No commitment. Confidential.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/contact"><Button variant="gold" size="xl">Book a Call</Button></Link>
            <Link href="/book-visit"><Button variant="glass" size="xl">Schedule Site Visit</Button></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
