import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20">
      <article className="container max-w-3xl prose prose-lg">
        <h1>Terms of Service</h1>
        <p className="text-sm text-primary-900/50">Last updated: 1 July 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the Golden Heights Properties website, you accept and agree to be bound by these Terms of Service.</p>

        <h2>2. Property Listings</h2>
        <p>All property listings, prices, and availability are subject to change without notice. While we strive for accuracy, Golden Heights does not warrant that all information is current or error-free.</p>

        <h2>3. Investment Disclaimer</h2>
        <p>Real estate investment involves risk. Past performance does not guarantee future results. Prospective investors should conduct their own due diligence and seek professional advice.</p>

        <h2>4. RAJUK Compliance</h2>
        <p>All our developments are RAJUK-approved. Buyers are advised to verify RAJUK approval independently before purchase.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Golden Heights Properties shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.</p>

        <h2>6. Governing Law</h2>
        <p>These terms shall be governed by the laws of the People's Republic of Bangladesh. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dhaka.</p>

        <h2>7. Contact</h2>
        <p>For questions regarding these terms, contact legal@goldenheights.com.bd.</p>
      </article>
    </main>
  );
}
