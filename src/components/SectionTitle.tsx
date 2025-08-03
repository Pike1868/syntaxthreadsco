interface SectionTitleProps {
  text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {text}
      </h2>
    </div>
  );
}