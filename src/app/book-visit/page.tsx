import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Input, Textarea, Select, Label } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Calendar, Check, MapPin, Car, Phone } from 'lucide-react';
import { toast } from 'sonner';

export const metadata: Metadata = {
  title: 'Book a Site Visit',
  description: 'Schedule a free, chauffeured site visit to any of our properties. Pick a date, pick a time, and we will take care of the rest.',
};

export default function BookVisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a Visit"
        title="Experience it in person."
        description="Schedule a free, chauffeured site visit to any of our properties. We will arrange transport and accompany you throughout."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Book Site Visit' }]}
        image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=2400"
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-primary-900/5 shadow-premium">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success('Visit booked', { description: 'A consultant will confirm within 1 hour.' });
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Full Name *</Label><Input required /></div>
                  <div><Label>Phone *</Label><Input required type="tel" placeholder="+880 1XXX-XXXXXX" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Email *</Label><Input required type="email" /></div>
                  <div>
                    <Label>Number of Visitors *</Label>
                    <Select required>
                      {[1, 2, 3, 4, '5+'].map((n) => <option key={n}>{n}</option>)}
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Property Interest *</Label>
                  <Select required>
                    <option>Golden Skyline Tower (Gulshan)</option>
                    <option>The Obsidian (Banani)</option>
                    <option>Emerald Court (Bashundhara)</option>
                    <option>Purbachal Prime Plot</option>
                    <option>The Crescent Commercial Tower</option>
                    <option>Not sure yet — please recommend</option>
                  </Select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Preferred Date *</Label><Input required type="date" min={new Date().toISOString().split('T')[0]} /></div>
                  <div>
                    <Label>Preferred Time *</Label>
                    <Select required>
                      <option>10:00 AM</option>
                      <option>11:30 AM</option>
                      <option>1:00 PM</option>
                      <option>3:00 PM</option>
                      <option>4:30 PM</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Special Requests</Label>
                  <Textarea placeholder="Need specific accessibility, transport, or interpreter? Let us know." />
                </div>
                <div className="flex items-start gap-2 text-xs text-primary-900/60">
                  <input type="checkbox" required className="mt-0.5" />
                  <span>I confirm the details above and accept the privacy policy.</span>
                </div>
                <Button variant="primary" size="lg" type="submit">
                  <Calendar className="h-4 w-4" /> Confirm Visit
                </Button>
              </form>
            </div>
            <aside className="space-y-4">
              <div className="bg-primary-950 text-white p-6 rounded-2xl">
                <h3 className="font-heading text-lg font-semibold">What to expect</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    { Icon: Check, t: 'Free chauffeured transport from your home/office' },
                    { Icon: Check, t: 'Senior consultant accompanies you throughout' },
                    { Icon: Check, t: 'Show apartment, sample unit, and full amenity tour' },
                    { Icon: Check, t: 'Lunch at our on-site café' },
                    { Icon: Check, t: 'No obligation, no pressure' },
                  ].map((it, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <it.Icon className="h-4 w-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{it.t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-primary-900/5">
                <h3 className="font-heading text-lg font-semibold">Prefer to call?</h3>
                <p className="text-sm text-primary-900/60 mt-2">Speak to our booking team directly.</p>
                <a href="tel:+8801711000000" className="mt-3 block text-accent-500 font-semibold text-lg">+880 1711-000000</a>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
