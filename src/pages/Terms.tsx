import { Link } from 'react-router-dom';

export default function Terms() {
  const updated = 'September 2025';
  return (
    <div className="align-element py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="prose prose-neutral dark:prose-invert mt-8">
          <p>
            Thanks for visiting SyntaxThreadsCo. We keep things simple: clean designs, clear info,
            and a straightforward path to purchase on Etsy. By using this site, you agree to these terms.
          </p>

          <h2>1. Overview</h2>
          <p>
            SyntaxThreadsCo provides product information and links to our Etsy store where checkout is completed.
            This website is informational and does not process payments directly.
          </p>

          <h2>2. Products & Ordering</h2>
          <p>
            Product details, pricing, availability, and fulfillment are managed on Etsy. Orders are subject to Etsy’s
            terms and policies. Please review all details on the Etsy product page before purchasing.
          </p>

          <h2>3. Pricing & Taxes</h2>
          <p>
            Prices shown here are for reference and may change. The final price, taxes, and shipping costs are displayed
            during Etsy checkout and govern the transaction.
          </p>

          <h2>4. Shipping, Returns & Support</h2>
          <p>
            Shipping timelines, returns, exchanges, and support are handled via Etsy per the listing and shop policies.
            If you have questions, reach us through Etsy messages or at <a href="mailto:hello@syntaxthreads.com">hello@syntaxthreads.com</a>.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this site, including branding, copy, and imagery, is owned by SyntaxThreadsCo and protected by
            applicable laws. Please don’t copy or reuse without permission.
          </p>

          <h2>6. Acceptable Use</h2>
          <p>
            Don’t misuse the site, attempt to break security, or disrupt other users. Play nice—like a good linter.
          </p>

          <h2>7. Disclaimers</h2>
          <p>
            We aim for accuracy but can’t guarantee the site will always be error-free or available. If something looks off,
            check the Etsy listing for the source of truth.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, SyntaxThreadsCo is not liable for indirect, incidental, or consequential
            damages arising from your use of this site.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the site means you accept the latest version.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions? Email <a href="mailto:hello@syntaxthreads.com">hello@syntaxthreads.com</a> or visit our
            <Link to="/"> homepage</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

