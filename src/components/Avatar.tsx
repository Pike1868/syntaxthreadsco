export default function Avatar({
  name,
  initials,
  src,
  size = 28,
}: {
  name: string;
  initials: string;
  src?: string;
  size?: number;
}) {
  const dimension = `${size}px`;
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} avatar`}
        width={size}
        height={size}
        className="rounded-full object-cover border border-border"
      />
    );
  }
  return (
    <div
      aria-label={`${name} avatar`}
      style={{ width: dimension, height: dimension }}
      className="rounded-full border border-border bg-gradient-to-br from-muted to-card text-[11px] flex items-center justify-center text-foreground"
      title={name}
    >
      {initials}
    </div>
  );
}

