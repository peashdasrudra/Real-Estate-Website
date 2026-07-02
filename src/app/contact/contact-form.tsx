'use client';

import { Input, Textarea, Select, Label } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success('Message sent', { description: 'We will respond within 24 hours.' });
        (e.target as HTMLFormElement).reset();
      }}
      className="space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>First Name *</Label>
          <Input required placeholder="First name" />
        </div>
        <div>
          <Label>Last Name *</Label>
          <Input required placeholder="Last name" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Email *</Label>
          <Input required type="email" placeholder="you@email.com" />
        </div>
        <div>
          <Label>Phone *</Label>
          <Input required type="tel" placeholder="+880 1XXX-XXXXXX" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>I am a</Label>
          <Select>
            <option>Home Buyer</option>
            <option>Investor</option>
            <option>NRB</option>
            <option>Corporate Buyer</option>
            <option>Seller</option>
            <option>Press / Media</option>
            <option>Other</option>
          </Select>
        </div>
        <div>
          <Label>Budget Range</Label>
          <Select>
            <option>Up to ৳1 Cr</option>
            <option>৳1 Cr - ৳2.5 Cr</option>
            <option>৳2.5 Cr - ৳5 Cr</option>
            <option>৳5 Cr - ৳10 Cr</option>
            <option>৳10 Cr+</option>
            <option>Not sure yet</option>
          </Select>
        </div>
      </div>
      <div>
        <Label>Message *</Label>
        <Textarea required placeholder="Tell us a bit about what you're looking for..." />
      </div>
      <div className="flex items-start gap-2 text-xs text-primary-900/60">
        <input type="checkbox" required className="mt-0.5" />
        <span>I agree to receive communications from Golden Heights Properties and accept the privacy policy.</span>
      </div>
      <Button variant="primary" size="lg" type="submit">Send Message</Button>
    </form>
  );
}
