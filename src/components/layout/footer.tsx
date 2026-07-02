import Link from 'next/link';
import { Container } from '@/components/ui/layout';
import { Logo } from './header';
import { SITE, NAV, DIVISIONS } from '@/lib/site';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(212,175,55,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(29,78,216,0.15) 0%, transparent 50%)",
        }}
      />
      <Container className="relative">
        {/* Newsletter */}
        <div className="grid lg:grid-cols-2 gap-10 py-16 border-b border-white/10 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">Newsletter</span>
            <h3 className="font-heading text-3xl md:text-4xl mt-3 text-balance">
              First access to new projects, investment insights, and off-market opportunities.
            </h3>
          </div>
          <form className="flex gap-2 max-w-lg lg:ml-auto w-full">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 h-14 rounded-xl bg-white/5 border border-white/10 px-5 text-sm text-white placeholder:text-white/40 focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500/20 focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="h-14 px-7 rounded-xl bg-secondary-500 text-primary-950 font-semibold hover:bg-secondary-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 py-16">
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <Logo inverted />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-lg font-bold">Golden Heights</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">Properties</span>
              </div>
            </div>
            <p className="mt-5 text-white/60 leading-relaxed text-sm max-w-sm">
              {SITE.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: SITE.social.facebook, Icon: Facebook },
                { href: SITE.social.instagram, Icon: Instagram },
                { href: SITE.social.youtube, Icon: Youtube },
                { href: SITE.social.linkedin, Icon: Linkedin },
                { href: SITE.social.twitter, Icon: Twitter },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary-500 hover:border-secondary-500 hover:text-primary-950 transition-all"
                  aria-label={Icon.displayName}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-white">About Us</Link></li>
              <li><Link href="/about#team" className="text-white/70 hover:text-white">Our Team</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-white/70 hover:text-white">Projects</Link></li>
              <li><Link href="/career" className="text-white/70 hover:text-white">Career</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold mb-5">Buy</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/properties?type=apartment" className="text-white/70 hover:text-white">Apartments</Link></li>
              <li><Link href="/properties?type=penthouse" className="text-white/70 hover:text-white">Penthouses</Link></li>
              <li><Link href="/properties?type=villa" className="text-white/70 hover:text-white">Villas</Link></li>
              <li><Link href="/properties?type=land" className="text-white/70 hover:text-white">Land</Link></li>
              <li><Link href="/properties?type=commercial" className="text-white/70 hover:text-white">Commercial</Link></li>
              <li><Link href="/investment" className="text-white/70 hover:text-white">Investment</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold mb-5">Tools</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/emi-calculator" className="text-white/70 hover:text-white">EMI Calculator</Link></li>
              <li><Link href="/mortgage-calculator" className="text-white/70 hover:text-white">Mortgage</Link></li>
              <li><Link href="/loan-eligibility" className="text-white/70 hover:text-white">Loan Eligibility</Link></li>
              <li><Link href="/property-management" className="text-white/70 hover:text-white">Property Management</Link></li>
              <li><Link href="/book-visit" className="text-white/70 hover:text-white">Book Site Visit</Link></li>
              <li><Link href="/schedule-meeting" className="text-white/70 hover:text-white">Schedule Meeting</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-secondary-500" />
                <span>House 24, Road 11, Gulshan 1, Dhaka 1212</span>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-white/70 hover:text-white">
                  <Phone className="h-4 w-4 text-secondary-500" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white/70 hover:text-white">
                  <Mail className="h-4 w-4 text-secondary-500" />
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/40">
              {SITE.hours}
            </p>
          </div>
        </div>

        {/* Areas */}
        <div className="border-t border-white/10 py-10">
          <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold mb-5">Projects by Division</h4>
          <div className="flex flex-wrap gap-2">
            {DIVISIONS.map((d) => (
              <Link
                key={d.slug}
                href={`/properties?division=${d.slug}`}
                className="px-3 py-1.5 text-xs text-white/70 hover:text-white border border-white/10 rounded-full hover:border-secondary-500 hover:bg-secondary-500/10 transition-all"
              >
                {d.name} <span className="text-white/40">({d.count})</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved. RAJUK Registered.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
