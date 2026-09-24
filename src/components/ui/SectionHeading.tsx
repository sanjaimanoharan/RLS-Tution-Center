import type { ReactNode } from "react";
export function SectionHeading({
  eyebrow,
  children,
  description,
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`section-heading reveal ${className}`}>
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
