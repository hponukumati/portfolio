import { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function BentoCard({ children, className = "", id }: BentoCardProps) {
  return (
    <section
      id={id}
      className={`rounded-2xl border border-black/10 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg hover:shadow-accent/10 ${className}`}
    >
      {children}
    </section>
  );
}
