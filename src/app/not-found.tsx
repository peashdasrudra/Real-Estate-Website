import Link from 'next/link';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAFAFA] py-20">
      <Container className="text-center max-w-2xl">
        <p className="text-display-2xl gradient-text font-extrabold">404</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mt-6 text-balance">
          The page you're looking for doesn't exist.
        </h1>
        <p className="mt-5 text-lg text-primary-900/60">
          The link may be broken, or the property has been sold or moved. Let's get you back on track.
        </p>
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <Link href="/">
            <Button variant="primary" size="lg"><HomeIcon className="h-4 w-4" /> Go Home</Button>
          </Link>
          <Link href="/properties">
            <Button variant="outline" size="lg"><Search className="h-4 w-4" /> Browse Properties</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
