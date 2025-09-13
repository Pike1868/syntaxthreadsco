import { ShieldCheck, Truck, RefreshCw, Sparkles } from 'lucide-react';

const benefits = [
  { icon: ShieldCheck, label: 'Secure checkout on Etsy' },
  { icon: Truck, label: 'Fast production & shipping' },
  { icon: RefreshCw, label: 'Easy returns via Etsy' },
  { icon: Sparkles, label: 'Premium materials & finish' },
];

export default function BenefitsStrip() {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4 md:p-5">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

