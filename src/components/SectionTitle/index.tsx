export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-5 flex items-center justify-center gap-4 ${className ?? ""}`}>
      <span className="h-px w-7 bg-primary" />
      <h2 className="font-display text-xl font-extrabold sm:text-2xl">{children}</h2>
      <span className="h-px w-7 bg-primary" />
    </div>
  );
}
