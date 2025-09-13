import { useState } from 'react';

const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'ok' | 'error'>(null);

  const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!endpoint) return;
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('ok');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={compact ? '' : 'rounded-xl border border-border p-4 md:p-6 bg-card'}>
      {!compact && (
        <>
          <h3 className="font-semibold">Get product drops and dev-only perks</h3>
          <p className="text-sm text-muted-foreground mt-1">We send the good stuff, not noise.</p>
        </>
      )}
      <div className={`mt-3 flex ${compact ? '' : 'gap-2'}`}>
        <input
          type="email"
          required
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={!endpoint || loading}
          className="ml-2 rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm disabled:opacity-50"
        >
          {loading ? 'Submitting…' : 'Subscribe'}
        </button>
      </div>
      {!endpoint && (
        <p className="mt-2 text-xs text-muted-foreground">Email capture not configured. Set VITE_FORMSPREE_ID in your environment.</p>
      )}
      {status === 'ok' && <p className="mt-2 text-xs text-green-600">Thanks! Please check your inbox.</p>}
      {status === 'error' && <p className="mt-2 text-xs text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}

