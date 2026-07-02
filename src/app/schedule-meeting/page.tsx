import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Input, Textarea, Select, Label } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { AGENTS } from '@/lib/agents';
import { toast } from 'sonner';

export const metadata: Metadata = {
  title: 'Schedule a Meeting',
  description: 'Book a virtual or in-person meeting with a senior property consultant at a time that suits you.',
};

export default function ScheduleMeetingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Schedule"
        title="Book a meeting with a senior advisor."
        description="Virtual or in-person. 30, 60, or 90 minutes. Choose what works for you."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Schedule Meeting' }]}
      />
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <form
              onSubmit={(e) => { e.preventDefault(); toast.success('Meeting scheduled', { description: 'Calendar invite sent.' }); }}
              className="lg:col-span-2 bg-white p-8 rounded-3xl border border-primary-900/5 shadow-premium space-y-5"
            >
              <h2 className="font-heading text-xl font-semibold">Meeting Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Full Name *</Label><Input required /></div>
                <div><Label>Email *</Label><Input required type="email" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Phone *</Label><Input required type="tel" /></div>
                <div>
                  <Label>Meeting Format *</Label>
                  <Select>
                    <option>In-person (Gulshan HQ)</option>
                    <option>Virtual (Zoom / Google Meet)</option>
                    <option>Phone call</option>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Preferred Consultant</Label>
                <Select>
                  <option>Any available</option>
                  {AGENTS.map((a) => <option key={a.id}>{a.name} · {a.role}</option>)}
                </Select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Date *</Label><Input required type="date" min={new Date().toISOString().split('T')[0]} /></div>
                <div>
                  <Label>Time *</Label>
                  <Select>
                    {['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((t) => <option key={t}>{t}</option>)}
                  </Select>
                </div>
              </div>
              <div>
                <Label>Topics to discuss</Label>
                <Textarea placeholder="What would you like to cover?" />
              </div>
              <Button variant="primary" size="lg" type="submit">Schedule Meeting</Button>
            </form>
            <aside className="space-y-4">
              <div className="p-6 bg-white border border-primary-900/5 rounded-2xl">
                <h3 className="font-heading text-lg font-semibold">Meeting Types</h3>
                <div className="mt-4 space-y-4 text-sm">
                  {[
                    { l: 'Buying Consultation', d: '60 min · property shortlisting & viewings' },
                    { l: 'Investment Review', d: '60 min · portfolio strategy & ROI analysis' },
                    { l: 'NRB Service', d: '60 min · end-to-end investment planning' },
                    { l: 'Property Management', d: '30 min · onboarding existing units' },
                  ].map((t, i) => (
                    <div key={i} className="pb-3 border-b border-primary-900/5 last:border-0">
                      <p className="font-medium">{t.l}</p>
                      <p className="text-xs text-primary-900/60 mt-0.5">{t.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
