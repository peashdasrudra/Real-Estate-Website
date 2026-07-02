'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowRight, ArrowUpRight, MapPin, Play, Sparkles,
  ChevronDown, Star, Phone, Shield, Clock, CheckCircle2,
  Building2, Home as HomeIcon, Briefcase, Trees, TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/layout';
import { PropertyCard } from '@/components/property-card';
import { ProjectCard } from '@/components/project-card';
import { PROPERTIES } from '@/lib/properties';
import { PROJECTS } from '@/lib/projects';
import { STATS, VALUES, SERVICES, AWARDS } from '@/lib/content';
import { TESTIMONIALS } from '@/lib/testimonials';
import { POSTS } from '@/lib/posts';
import { SITE } from '@/lib/site';
import { formatBDT } from '@/lib/utils';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import {
  FadeUp, FadeIn, StaggerContainer, StaggerItem, ScaleIn, ScrollProgress,
} from '@/components/ui/motion';
import { SectionEyebrow, SectionTitle, SectionLead } from '@/components/ui/layout';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import { TestimonialsSlider } from '@/components/testimonials-slider';
import { SearchBox } from '@/components/search-box';
import { BlogCard } from '@/components/blog-card';

/* ═══════════════════════════════════════
   LANDING PAGE
   ═══════════════════════════════════════ */

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <QuickSearch />
      <FeaturedProperties />
      <LuxuryShowcase />
      <ProjectsShowcase />
      <StatsSection />
      <WhyChooseUs />
      <InvestmentOpportunity />
      <ServicesSection />
      <TestimonialsSection />
      <AwardsSection />
      <PartnersBar />
      <BlogSection />
      <FinalCTA />
      <MobileStickyBar />
    </>
  );
}

/* ═══════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════ */

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[700px] flex items-center pt-24 lg:pt-28 overflow-hidden bg-primary-950">
      {/* Background image with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[50px]">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2400&q=80"
          alt="Golden Heights luxury apartments skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/30 to-primary-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 via-transparent to-transparent" />
      </motion.div>

      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-secondary-500/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <Container className="relative z-10">
        <motion.div style={{ opacity: contentOpacity }} className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs uppercase tracking-[0.2em] font-semibold mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-secondary-500" />
            Est. 2008 · Bangladesh&apos;s Most Trusted Developer
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-2xl text-white font-extrabold leading-[0.95]"
          >
            Luxury living,
            <br />
            <span className="gradient-text-shimmer">crafted in Bangladesh.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
          >
            Premium apartments, commercial spaces, and investment opportunities
            in Dhaka, Chattogram, and beyond — built for those who settle for nothing less.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link href="/properties">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                Explore Properties <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/book-visit">
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                <Play className="h-4 w-4" /> Book Site Visit
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-6 inset-x-0 z-10"
      >
        <Container>
          <div className="flex items-center justify-between max-w-lg mx-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-3">
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Open today · 9 AM – 7 PM</span>
              <span className="sm:hidden">Open now</span>
            </div>
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-white text-sm font-semibold hover:text-secondary-500 transition-colors">
              {SITE.phone}
            </a>
          </div>
        </Container>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="h-5 w-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════
   2. QUICK SEARCH
   ═══════════════════════════════════════ */

function QuickSearch() {
  return (
    <section className="relative z-20 -mt-16 mb-8 md:mb-0">
      <Container>
        <FadeUp>
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-premium-lg p-5 md:p-8 border border-primary-900/5">
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary-700 font-semibold">Search</p>
                <h2 className="font-heading text-xl md:text-2xl font-bold mt-1">Find your next home</h2>
              </div>
              <Link href="/properties" className="text-sm font-medium text-accent-500 hover:text-accent-700 inline-flex items-center gap-1 transition-colors">
                Advanced <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <SearchBox />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   3. FEATURED PROPERTIES
   ═══════════════════════════════════════ */

function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="py-20 md:py-28">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <FadeUp>
            <SectionEyebrow>Featured</SectionEyebrow>
            <SectionTitle>Hand-picked properties</SectionTitle>
            <SectionLead>
              A curated selection of our finest available residences — from sky penthouses
              to family estates, each at the pinnacle of luxury in Bangladesh.
            </SectionLead>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex gap-2 flex-shrink-0">
              {['All', 'Ready', 'Ongoing', 'Upcoming'].map((f, i) => (
                <button
                  key={f}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-colors ${
                    i === 0
                      ? 'bg-primary-900 text-white'
                      : 'bg-primary-900/5 text-primary-900/70 hover:bg-primary-900/10'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Grid (desktop) */}
        <StaggerContainer className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <StaggerItem key={p.id}>
              <PropertyCard property={p} priority={i < 3} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Horizontal scroll (mobile) */}
        <div className="sm:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2" style={{ scrollSnapType: 'x mandatory' }}>
            {featured.map((p, i) => (
              <div key={p.id} className="flex-shrink-0 w-[80vw] max-w-[320px]" style={{ scrollSnapAlign: 'start' }}>
                <PropertyCard property={p} priority={i < 2} />
              </div>
            ))}
          </div>
        </div>

        {/* View all */}
        <FadeUp>
          <div className="mt-10 text-center">
            <Link href="/properties">
              <Button variant="outline" size="lg">
                View All Properties <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   4. LUXURY SHOWCASE
   ═══════════════════════════════════════ */

function LuxuryShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images */}
          <FadeUp>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
                  alt="The Obsidian Penthouse exterior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Inset image */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-40 md:w-56 aspect-square rounded-2xl overflow-hidden border-4 border-[#FAFAFA] shadow-premium-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600"
                  alt="Penthouse interior"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              {/* Price tag */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white rounded-xl p-3 md:p-4 shadow-premium">
                <p className="text-[10px] uppercase tracking-wider text-primary-900/50">From</p>
                <p className="font-heading text-lg md:text-xl font-bold text-primary-900">{formatBDT(85000000)}</p>
                <p className="text-[10px] text-primary-900/50 mt-0.5">Penthouse · Banani</p>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <div className="pt-6 lg:pt-0">
            <FadeUp>
              <SectionEyebrow>Luxury Living</SectionEyebrow>
              <h2 className="font-heading text-display-md mt-4 text-balance">
                The Obsidian — where Dhaka looks up to.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-5 text-lg text-primary-900/70 leading-relaxed">
                A triplex penthouse collection crowning one of Gulshan Avenue&apos;s most iconic addresses.
                Designed by the country&apos;s leading architects, with interiors by a Milan-based studio.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <ul className="mt-8 space-y-3">
                {[
                  'Private elevator access, dual-aspect living',
                  'Cantilevered infinity pool on the terrace',
                  'Italian Calacatta marble, hand-finished millwork',
                  'Bespoke kitchen with integrated Gaggenau appliances',
                  'Concierge, butler service, and 24/7 security',
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-900/80">{f}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/properties/the-obsidian-penthouse">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    View Penthouse <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Schedule Private Tour</Button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   5. PROJECTS SHOWCASE
   ═══════════════════════════════════════ */

function ProjectsShowcase() {
  return (
    <section className="py-20 md:py-28 bg-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.15) 0%, transparent 50%)' }} />

      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Latest Projects
            </div>
            <h2 className="font-heading text-display-md mt-4 text-white text-balance">
              New addresses shaping the skyline
            </h2>
            <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
              From Gulshan to Chattogram Bay — architecture that endures, a standard that is uncompromising.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link href="/projects">
              <Button variant="gold" size="lg">All Projects <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </FadeUp>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 4).map((p) => (
            <StaggerItem key={p.id}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   6. STATS
   ═══════════════════════════════════════ */

function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.4) 0%, transparent 70%)' }} />

      <Container className="relative">
        <FadeUp>
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> By the Numbers
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">
              Seventeen years of quietly building Bangladesh.
            </h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { v: 17, s: '+', l: 'Years of Excellence' },
            { v: 248, s: '', l: 'Projects Delivered' },
            { v: 12500, s: '+', l: 'Families Served' },
            { v: 38, s: '', l: 'Awards Won' },
            { v: 9, s: '', l: 'Divisions Covered' },
            { v: 320, s: '+', l: 'Units Managed' },
            { v: 96, s: '%', l: 'Customer Satisfaction' },
            { v: 30, s: '%', l: 'NRB Clients' },
          ].map((s, i) => (
            <StaggerItem key={i}>
              <div className="text-center py-4">
                <p className="font-heading text-4xl md:text-5xl font-bold gradient-text tabular-nums">
                  <AnimatedCounter end={s.v} suffix={s.s} />
                </p>
                <p className="mt-3 text-sm text-white/60 uppercase tracking-wider">{s.l}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   7. WHY CHOOSE US
   ═══════════════════════════════════════ */

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12">
          <FadeUp>
            <SectionEyebrow>Why Golden Heights</SectionEyebrow>
            <SectionTitle>Built to last. Crafted to be remembered.</SectionTitle>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg text-primary-900/70 leading-relaxed lg:mt-10">
              Seventeen years, 248 projects, and 12,500 families — every one a testament
              to our principle that the finest real estate is the result of a thousand
              considered decisions, all made in service of those who will inhabit them.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((v, i) => (
            <StaggerItem key={i}>
              <div className="group h-full p-6 md:p-7 bg-white rounded-2xl border border-primary-900/5 shadow-premium hover:shadow-premium-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-primary-900/5 flex items-center justify-center group-hover:bg-primary-900 transition-colors duration-300">
                  <Icon name={v.icon} className="h-6 w-6 text-primary-900 group-hover:text-secondary-500 transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold mt-5">{v.title}</h3>
                <p className="mt-2 text-sm text-primary-900/60 leading-relaxed">{v.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   8. INVESTMENT OPPORTUNITY
   ═══════════════════════════════════════ */

function InvestmentOpportunity() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeUp>
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200"
                alt="Investment in Bangladesh real estate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <Badge variant="gold" size="lg" className="bg-secondary-500 text-primary-950 mb-3">For NRB Investors</Badge>
                <h3 className="font-heading text-xl md:text-2xl font-bold">12–18% annual appreciation</h3>
                <p className="text-sm text-white/80 mt-1">in prime Dhaka locations (3-year average)</p>
              </div>
            </div>
          </FadeUp>

          <div>
            <FadeUp>
              <SectionEyebrow>Investment</SectionEyebrow>
              <SectionTitle>Build generational wealth, in Bangladesh.</SectionTitle>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-5 text-lg text-primary-900/70 leading-relaxed">
                Bangladesh is one of the world&apos;s most dynamic emerging real estate markets.
                With accelerating urbanisation and structural undersupply of Grade-A inventory,
                prime Dhaka real estate has outperformed every major asset class for a decade.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { v: '14%', l: 'CAGR · 5-year appreciation' },
                  { v: '4-6%', l: 'Gross rental yield (residential)' },
                  { v: '7-9%', l: 'Gross rental yield (commercial)' },
                  { v: '0%', l: 'Capital gains tax on 5+ years' },
                ].map((s, i) => (
                  <div key={i} className="p-4 md:p-5 rounded-xl bg-[#FAFAFA] border border-primary-900/5">
                    <p className="font-heading text-2xl md:text-3xl font-bold text-primary-900">{s.v}</p>
                    <p className="text-xs text-primary-900/50 mt-1 leading-relaxed">{s.l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/investment">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Read 2026 Outlook <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/book-visit">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Speak to NRB Advisor</Button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   9. SERVICES
   ═══════════════════════════════════════ */

function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-primary-950 text-white">
      <Container>
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Services
            </div>
            <h2 className="font-heading text-display-md mt-4 text-balance">A complete property partner.</h2>
            <p className="mt-5 text-lg text-white/60">
              Beyond building, we buy, sell, manage, and consult — across the entire real estate lifecycle.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.slice(0, 8).map((s) => (
            <StaggerItem key={s.title}>
              <div className="group h-full p-6 md:p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-secondary-500/30 transition-all duration-300">
                <Icon name={s.icon} className="h-7 w-7 text-secondary-500" />
                <h3 className="font-heading text-lg font-semibold mt-5">{s.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed line-clamp-3">{s.description}</p>
                <Link href="/services" className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-secondary-500 hover:text-secondary-400 transition-colors">
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   10. TESTIMONIALS
   ═══════════════════════════════════════ */

function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionEyebrow>Testimonials</SectionEyebrow>
            <h2 className="font-heading text-display-md mt-4 text-balance">Trusted by 12,500+ families.</h2>
            <p className="mt-5 text-lg text-primary-900/60">
              Every family has a story. Here are a few who found their home with us.
            </p>
          </div>
        </FadeUp>
        <TestimonialsSlider testimonials={TESTIMONIALS} />
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   11. AWARDS
   ═══════════════════════════════════════ */

function AwardsSection() {
  return (
    <section className="py-16 md:py-20 bg-primary-900 text-white">
      <Container>
        <FadeUp>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary-500 font-semibold">
              <span className="h-px w-8 bg-secondary-500" /> Recognition
            </div>
            <h2 className="font-heading text-3xl md:text-4xl mt-3">Recognised. Awarded. Independent.</h2>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {AWARDS.map((a, i) => (
            <StaggerItem key={i}>
              <div className="p-5 md:p-6 rounded-2xl border border-white/10 hover:border-secondary-500/30 transition-colors duration-300">
                <p className="font-heading text-2xl md:text-3xl font-bold text-secondary-500">{a.year}</p>
                <p className="mt-2 md:mt-3 font-semibold text-sm leading-snug">{a.title}</p>
                <p className="text-xs text-white/40 mt-1">{a.org}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   12. PARTNERS MARQUEE
   ═══════════════════════════════════════ */

function PartnersBar() {
  return (
    <section className="py-10 border-b border-primary-900/5">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-900/40 font-semibold whitespace-nowrap">Banking Partners</p>
          <div className="flex-1 overflow-hidden mask-fade-x">
            <div className="flex gap-12 animate-marquee">
              {['Dutch-Bangla Bank', 'BRAC Bank', 'Eastern Bank', 'City Bank', 'Prime Bank', 'IFIC Bank', 'HSBC Bangladesh', 'Standard Chartered', 'Mutual Trust Bank', 'AB Bank']
                .concat(['Dutch-Bangla Bank', 'BRAC Bank', 'Eastern Bank', 'City Bank', 'Prime Bank', 'IFIC Bank', 'HSBC Bangladesh', 'Standard Chartered', 'Mutual Trust Bank', 'AB Bank'])
                .map((p, i) => (
                  <span key={i} className="text-lg font-heading font-semibold text-primary-900/20 hover:text-primary-900/60 transition-colors whitespace-nowrap">
                    {p}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   13. BLOG
   ═══════════════════════════════════════ */

function BlogSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <FadeUp>
            <SectionEyebrow>Insights</SectionEyebrow>
            <SectionTitle>The Journal</SectionTitle>
            <SectionLead>
              Research, commentary, and analysis on the Bangladesh real estate market.
            </SectionLead>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link href="/blog">
              <Button variant="outline" size="lg">All Articles <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </FadeUp>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.slice(0, 3).map((p) => (
            <StaggerItem key={p.id}>
              <BlogCard post={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   14. FINAL CTA
   ═══════════════════════════════════════ */

function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-primary-950 text-white">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2400"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-primary-950/60" />
          </div>

          <div className="relative p-8 md:p-14 lg:p-20">
            <FadeUp>
              <div className="max-w-2xl">
                <SectionEyebrow className="text-secondary-500">Get Started</SectionEyebrow>
                <h2 className="font-heading text-display-md md:text-display-lg mt-4 text-balance">
                  Your next home deserves a serious conversation.
                </h2>
                <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
                  Book a private consultation with a senior property advisor. We&apos;ll discuss
                  your goals, shortlist the right properties, and arrange a chauffeured site visit.
                </p>

                {/* Trust signals */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-500 text-xs font-medium">
                    <Clock className="h-3 w-3" /> Limited units remaining
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs">
                    <Shield className="h-3 w-3" /> RAJUK Approved
                  </span>
                </div>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link href="/book-visit">
                    <Button variant="gold" size="xl" className="w-full sm:w-auto">
                      Book Site Visit <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/schedule-meeting">
                    <Button variant="glass" size="xl" className="w-full sm:w-auto">Schedule Meeting</Button>
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-3 text-white/40 text-sm">
                  <span>Or call:</span>
                  <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="font-semibold text-white hover:text-secondary-500 transition-colors inline-flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5" /> {SITE.phone}
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════
   MOBILE STICKY CTA
   ═══════════════════════════════════════ */

function MobileStickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-white/95 backdrop-blur-lg border-t border-primary-900/10 shadow-premium-lg safe-bottom"
          style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
        >
          <div className="flex gap-2">
            <Link href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex-1">
              <Button variant="primary" size="md" className="w-full text-sm">
                <Phone className="h-3.5 w-3.5" /> Call Now
              </Button>
            </Link>
            <Link href="/book-visit" className="flex-1">
              <Button variant="gold" size="md" className="w-full text-sm">
                Book Visit <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
