import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { FadeUp } from '@/components/ui/motion';
import { Building2, Wrench, FileText, Users, Shield, BarChart3, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Property Management Services',
  description: 'Comprehensive property management for owners and investors — tenant sourcing, rent collection, maintenance, and tax filing. 6% management fee.',
};

const features = [
  { Icon: Users, t: 'Tenant Sourcing', d: 'Rigorous verification, including background, employment, and credit checks. Avg. vacancy: 14 days.' },
  { Icon: Wrench, t: 'Maintenance', d: '24/7 maintenance support, vetted vendor network, and proactive preventive maintenance schedule.' },
  { Icon: Building2, t: 'Rent Collection', d: 'Automated monthly collection, late-payment management, and direct deposit to your account.' },
  { Icon: Shield, t: 'Security Oversight', d: 'Routine property inspections, security audit, and emergency response coordination.' },
  { Icon: FileText, t: 'Legal & Tax', d: 'Lease drafting, tax filing, and compliance with all relevant Bangladeshi regulations.' },
  { Icon: BarChart3, t: 'Reporting', d: 'Monthly statements, quarterly performance reviews, and annual tax documentation.' },
];

export default function PropertyManagementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Property Management"
        title="Own the property, not the headaches."
        description="A 6% management fee for total peace of mind. We currently manage 320+ units on behalf of owners across Bangladesh."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Property Management' }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="group h-full p-7 bg-white rounded-2xl border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all">
                  <div className="h-12 w-12 rounded-xl bg-primary-900/5 flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                    <f.Icon className="h-6 w-6 text-primary-900 group-hover:text-primary-950 transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mt-5">{f.t}</h3>
                  <p className="mt-2 text-sm text-primary-900/70 leading-relaxed">{f.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
                <span className="h-px w-8 bg-secondary-500" /> Our Fee
              </div>
              <h2 className="font-heading text-display-md mt-4 text-balance">Transparent pricing. No surprises.</h2>
              <p className="mt-5 text-lg text-primary-900/70 leading-relaxed">
                A flat 6% of monthly rent collected, paid monthly. No setup fees, no hidden charges, no extras. If we don't collect rent, we don't get paid.
              </p>
              <div className="mt-8 p-6 rounded-2xl bg-white border border-primary-900/5">
                <p className="font-heading text-5xl font-bold gradient-text">6%</p>
                <p className="text-sm text-primary-900/60 mt-1">of monthly rent collected</p>
              </div>
              <div className="mt-8">
                <Link href="/contact"><Button variant="primary" size="lg">Onboard your property</Button></Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-primary-950 text-white p-8 rounded-3xl">
                <h3 className="font-heading text-2xl font-bold">What's included</h3>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    'Tenant sourcing & verification',
                    'Lease drafting & registration',
                    'Monthly rent collection & disbursement',
                    '24/7 maintenance & emergency support',
                    'Quarterly property inspections',
                    'Annual tax filing & documentation',
                    'Annual market rent review',
                    'Detailed monthly owner statements',
                  ].map((it) => (
                    <li key={it} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-secondary-500 flex-shrink-0" />
                      <span className="text-white/80">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
