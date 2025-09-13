import { Link } from 'react-router-dom';

export default function Privacy() {
  const updated = 'September 2025';
  return (
    <div className="align-element py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>

        <div className="prose prose-neutral dark:prose-invert mt-8">
          <p>
            We respect your privacy. This site is intentionally lightweight—no invasive trackers, no surprise popups,
            and checkout happens on Etsy. Here’s the short and honest version of what we collect and why.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              Basic analytics: We may use privacy-friendly analytics to understand page visits and performance (no
              personally invasive tracking).
            </li>
            <li>
              Contact info you choose to share: If you email us, we receive your email address and message.
            </li>
          </ul>

          <h2>2. What We Don’t Collect</h2>
          <p>
            We don’t handle payment information on this site. Orders and payments are processed on Etsy according to
            Etsy’s policies.
          </p>

          <h2>3. How We Use Information</h2>
          <ul>
            <li>Improve site performance and content.</li>
            <li>Respond to inquiries you send us.</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            If analytics are enabled, we may use minimal cookies or similar storage to measure visits. No ad tracking.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We keep data only as long as needed for the purposes described here. Emails you send may be retained for
            support and record-keeping.
          </p>

          <h2>6. Sharing</h2>
          <p>
            We don’t sell personal information. We may share limited data with service providers (e.g., analytics) who
            are bound by confidentiality and use it only to provide their services.
          </p>

          <h2>7. Your Choices</h2>
          <ul>
            <li>Contact us to request deletion of messages you’ve sent.</li>
            <li>Use browser controls to manage cookies.</li>
          </ul>

          <h2>8. Third-Party Links</h2>
          <p>
            Our product pages link to Etsy. Their privacy practices apply to checkout and order management. Please
            review Etsy’s privacy policy.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update this policy as we refine the site. We’ll update the “Last updated” date above when we do.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions or requests? Email <a href="mailto:hello@syntaxthreads.com">hello@syntaxthreads.com</a> or head back to the
            <Link to="/"> homepage</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

