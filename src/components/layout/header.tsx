'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Search } from 'lucide-react';
import { NAV, SITE } from '@/lib/site';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const primaryNav = NAV.primary as readonly {
    label: string;
    href: string;
    children?: readonly { label: string; href: string }[];
  }[];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury',
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-primary-900/5 py-2 shadow-premium'
            : 'bg-transparent py-4'
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label={SITE.name}>
            <Logo inverted={!scrolled} />
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  'font-heading text-lg font-bold tracking-tight transition-colors',
                  scrolled ? 'text-primary-900' : 'text-white'
                )}
              >
                Golden Heights
              </span>
              <span
                className={cn(
                  'text-[10px] uppercase tracking-[0.18em] transition-colors',
                  scrolled ? 'text-primary-900/60' : 'text-white/70'
                )}
              >
                Properties
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      scrolled
                        ? active
                          ? 'text-primary-900 bg-primary-900/5'
                          : 'text-primary-900/80 hover:text-primary-900 hover:bg-primary-900/5'
                        : active
                          ? 'text-white bg-white/10'
                          : 'text-white/85 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                  </Link>
                  {item.children && activeMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full pt-2 w-56"
                    >
                      <div className="rounded-2xl bg-white shadow-premium-lg border border-primary-900/5 p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-3 py-2.5 text-sm text-primary-900/80 rounded-lg hover:text-primary-900 hover:bg-primary-900/5 transition-colors"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/properties?view=search"
              className={cn(
                'hidden md:inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
                scrolled ? 'text-primary-900 hover:bg-primary-900/5' : 'text-white hover:bg-white/10'
              )}
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Link>
            <Link
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="hidden md:inline-flex"
            >
              <Button variant={scrolled ? 'primary' : 'glass'} size="md">
                <Phone className="h-3.5 w-3.5" />
                {SITE.phone}
              </Button>
            </Link>
            <Link href="/contact" className="hidden lg:inline-flex">
              <Button variant="gold" size="md">
                Book Site Visit
              </Button>
            </Link>
            <button
              className={cn(
                'lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
                scrolled ? 'text-primary-900 hover:bg-primary-900/5' : 'text-white hover:bg-white/10'
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-24 overflow-y-auto"
          >
            <Container className="pb-12">
              <div className="space-y-1">
                {primaryNav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 px-2 text-2xl font-heading font-semibold text-primary-900 border-b border-primary-900/5"
                    >
                      {item.label}
                      {item.children && <ChevronDown className="h-4 w-4 opacity-50" />}
                    </Link>
                    {item.children && (
                      <div className="pl-4 py-2 space-y-1">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block py-2 text-base text-primary-900/70"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link href={`tel:${SITE.phone.replace(/\s/g, '')}`}>
                  <Button variant="call" size="lg" className="w-full">
                    <Phone className="h-4 w-4" /> Call {SITE.phone}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="gold" size="lg" className="w-full">
                    Book Site Visit
                  </Button>
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      className={cn(
        'h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300',
        inverted ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-primary-900 shadow-premium'
      )}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <path d="M3 21V9l9-6 9 6v12" stroke="#D4AF37" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 21v-7h6v7" stroke="#D4AF37" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 21h18" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
