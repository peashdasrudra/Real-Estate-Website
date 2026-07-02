import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20">
      <article className="container max-w-3xl prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-primary-900/50">Last updated: 1 July 2026</p>
        <p>
          Golden Heights Properties ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or otherwise interact with us.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide, including:</p>
        <ul>
          <li>Name, email, phone number, and postal address</li>
          <li>Property preferences, budget, and buying intent</li>
          <li>Government-issued identification for transactions (KYC)</li>
          <li>Financial information for mortgage and investment services</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain our services</li>
          <li>Process property transactions and registrations</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Bangladesh Bank and regulatory authorities (as required)</li>
          <li>Banking partners (for mortgage and financing)</li>
          <li>Government agencies (RAJUK, NBR) for property registration</li>
          <li>Service providers (legal, accounting, marketing)</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@goldenheights.com.bd to exercise these rights.</p>

        <h2>6. Contact Us</h2>
        <p>For privacy questions, contact our Data Protection Officer at privacy@goldenheights.com.bd or by post at our Gulshan 1 headquarters.</p>
      </article>
    </main>
  );
}
