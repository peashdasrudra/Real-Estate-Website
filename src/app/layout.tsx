import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/site';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingCTA } from '@/components/layout/floating-cta';
import { ExitIntentPopup } from '@/components/layout/exit-intent';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'luxury apartments Bangladesh',
    'Dhaka real estate',
    'Gulshan apartment for sale',
    'Bashundhara flat',
    'Purbachal plot',
    'Bangladesh NRB property investment',
    'commercial space Dhaka',
    'Golden Heights Properties',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    creator: '@goldenheights',
    images: ['/og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B2545',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'RealEstateAgent',
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/logo.svg`,
              image: `${SITE.url}/og.jpg`,
              description: SITE.description,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'House 24, Road 11, Gulshan 1',
                addressLocality: 'Dhaka',
                postalCode: '1212',
                addressCountry: 'BD',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 23.7925, longitude: 90.4078 },
              openingHours: 'Sa-Th 09:00-19:00',
              sameAs: Object.values(SITE.social),
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '842' },
            }),
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCTA />
        <ExitIntentPopup />
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
