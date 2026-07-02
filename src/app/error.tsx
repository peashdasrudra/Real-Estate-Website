'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/layout';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home as HomeIcon } from 'lucide-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20">
      <Container className="text-center max-w-xl">
        <div className="h-16 w-16 rounded-full bg-red-50 mx-auto flex items-center justify-center">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold mt-6">Something went wrong</h1>
        <p className="mt-3 text-primary-900/60">
          We have been notified and are looking into it. Please try again, or return to the home page.
        </p>
        {process.env.NODE_ENV === 'development' && (
          <p className="mt-4 p-3 rounded-lg bg-red-50 text-red-900 text-xs font-mono text-left overflow-auto max-w-md mx-auto">
            {error.message}
          </p>
        )}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Button variant="primary" size="lg" onClick={reset}>
            <RefreshCw className="h-4 w-4" /> Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg">
              <HomeIcon className="h-4 w-4" /> Go Home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
