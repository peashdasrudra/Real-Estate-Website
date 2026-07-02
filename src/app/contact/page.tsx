import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Container } from '@/components/ui/layout';
import { Input, Textarea, Select, Label } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';
import { SITE } from '@/lib/site';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact — Visit Our Offices',
  description: 'Visit our Gulshan headquarters, our Chattogram office, or schedule a virtual meeting. We are here 6 days a week.',
};

const offices = [
  { city: 'Dhaka HQ', addr: 'House 24, Road 11, Gulshan 1, Dhaka 1212', phone: SITE.phone, hours: 'Sat-Thu 9AM-7PM' },
  { city: 'Chattogram', addr: '4th Floor, Sanmar Ocean City, GEC Circle', phone: '+880 1711-000111', hours: 'Sat-Thu 10AM-6PM' },
  { city: 'Sylhet', addr: '2nd Floor, Zindabazar Point, Zindabazar', phone: '+880 1711-000222', hours: 'Sat-Thu 10AM-6PM' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Visit our offices, schedule a virtual meeting, or send us a message. We respond within one business hour."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold">Send us a message</h2>
              <p className="mt-2 text-primary-900/60">Fill out the form and we will be in touch within 24 hours.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <aside className="space-y-6">
              <div className="bg-primary-950 text-white p-6 rounded-2xl">
                <p className="text-xs uppercase tracking-wider text-secondary-500 font-semibold">Quick Contact</p>
                <div className="mt-5 space-y-4">
                  <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-start gap-3 hover:text-secondary-500 transition-colors">
                    <Phone className="h-4 w-4 mt-0.5 text-secondary-500" />
                    <div>
                      <p className="text-xs text-white/60">Phone</p>
                      <p className="font-medium">{SITE.phone}</p>
                    </div>
                  </a>
                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-secondary-500 transition-colors">
                    <Mail className="h-4 w-4 mt-0.5 text-secondary-500" />
                    <div>
                      <p className="text-xs text-white/60">Email</p>
                      <p className="font-medium">{SITE.email}</p>
                    </div>
                  </a>
                  <a href={`https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-secondary-500 transition-colors">
                    <MessageCircle className="h-4 w-4 mt-0.5 text-secondary-500" />
                    <div>
                      <p className="text-xs text-white/60">WhatsApp</p>
                      <p className="font-medium">{SITE.whatsapp}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 text-secondary-500" />
                    <div>
                      <p className="text-xs text-white/60">Hours</p>
                      <p className="font-medium">Sat-Thu 9:00-19:00</p>
                      <p className="text-xs text-white/40">Emergency 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-primary-900/5 bg-white">
                <p className="font-heading font-semibold">Emergency Maintenance</p>
                <p className="text-sm text-primary-900/60 mt-1">For residents needing urgent support outside business hours.</p>
                <a href="tel:+8801711099999" className="mt-3 block text-accent-500 font-medium">+880 1711-099999</a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="py-20 md:py-28 bg-[#FAFAFA]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Offices
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">Visit us in person.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="group p-6 bg-white rounded-2xl border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all">
                <div className="h-10 w-10 rounded-xl bg-primary-900 flex items-center justify-center group-hover:bg-secondary-500 transition-colors">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mt-4">{o.city}</h3>
                <p className="mt-2 text-sm text-primary-900/70 leading-relaxed">{o.addr}</p>
                <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="block mt-3 text-sm font-medium text-accent-500">{o.phone}</a>
                <p className="text-xs text-primary-900/50 mt-2">{o.hours}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-primary-900 relative">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=90.39%2C23.77%2C90.43%2C23.81&layer=mapnik&marker=23.7925%2C90.4078"
          className="w-full h-full grayscale-[0.5]"
          style={{ border: 0 }}
          loading="lazy"
          title="Office location"
        />
      </section>
    </>
  );
}
