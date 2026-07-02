import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/motion';
import { Input, Textarea, Select, Label } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock, Heart, GraduationCap, Plane } from 'lucide-react';
import { toast } from 'sonner';

export const metadata: Metadata = {
  title: 'Careers — Join Golden Heights',
  description: 'Build a career at one of Bangladesh\'s most respected luxury real estate companies.',
};

const positions = [
  { title: 'Senior Property Consultant', dept: 'Sales · Dhaka', type: 'Full-time' },
  { title: 'NRB Investment Advisor', dept: 'Sales · Remote', type: 'Full-time' },
  { title: 'Architect (Senior)', dept: 'Design · Dhaka', type: 'Full-time' },
  { title: 'Construction Project Manager', dept: 'Operations · Dhaka', type: 'Full-time' },
  { title: 'Marketing Manager', dept: 'Marketing · Dhaka', type: 'Full-time' },
  { title: 'Legal Counsel', dept: 'Legal · Dhaka', type: 'Full-time' },
];

const perks = [
  { Icon: Briefcase, t: 'Industry-Leading Compensation', d: 'Base + uncapped commission, with quarterly and annual bonuses.' },
  { Icon: GraduationCap, t: 'Continuous Learning', d: 'Annual L&D budget, international conference sponsorship, and sabbatical options.' },
  { Icon: Heart, t: 'Comprehensive Health', d: 'Full medical, dental, and vision for you and your family.' },
  { Icon: Plane, t: 'Annual Leave', d: '24 days of paid leave + 12 statutory holidays. Sabbaticals after 5 years.' },
  { Icon: Clock, t: 'Flexible Working', d: 'Hybrid work for office roles, and remote options for select positions.' },
  { Icon: MapPin, t: 'Premium Offices', d: 'A grade-A workspace in Gulshan 1 with on-site café, gym, and library.' },
];

export default function CareerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build with us."
        description="Join a team that takes craft seriously. We hire for talent, develop with intention, and reward generously."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Open Roles
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">We are hiring across the company.</h2>
          </div>
          <StaggerContainer className="space-y-3 max-w-3xl mx-auto">
            {positions.map((p, i) => (
              <StaggerItem key={i}>
                <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 bg-white rounded-2xl border border-primary-900/5 shadow-premium hover:shadow-premium-lg hover:border-secondary-500/30 transition-all">
                  <div>
                    <p className="font-heading text-lg font-semibold">{p.title}</p>
                    <p className="text-sm text-primary-900/60 mt-1">{p.dept} · {p.type}</p>
                  </div>
                  <Button variant="primary" size="md">Apply</Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Why us
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">A great place to do the best work of your career.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="p-7 bg-white rounded-2xl border border-primary-900/5">
                <div className="h-12 w-12 rounded-xl bg-primary-900/5 flex items-center justify-center">
                  <p.Icon className="h-6 w-6 text-primary-900" />
                </div>
                <h3 className="font-heading text-lg font-semibold mt-5">{p.t}</h3>
                <p className="text-sm text-primary-900/70 mt-2 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-primary-900/5 shadow-premium">
            <h2 className="font-heading text-2xl font-bold">Spontaneous application</h2>
            <p className="mt-2 text-primary-900/60">Don't see your role? Send us your CV.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); toast.success('Application received'); }}
              className="mt-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Full Name *</Label><Input required /></div>
                <div><Label>Email *</Label><Input required type="email" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Phone</Label><Input type="tel" /></div>
                <div>
                  <Label>Area of Interest *</Label>
                  <Select>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Operations</option>
                    <option>Design</option>
                    <option>Legal</option>
                    <option>Finance</option>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Tell us about yourself</Label>
                <Textarea />
              </div>
              <Button variant="primary" size="lg" type="submit">Submit Application</Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
