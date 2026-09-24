import { ArrowUpRight, MessageCircle, Phone, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { business } from "../../data/business";
type ContactKind = keyof typeof business.links;
export function ContactLink({
  kind,
  children,
  className = "",
  arrow = false,
}: {
  kind: ContactKind;
  children?: ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  const Icon =
    kind === "whatsapp" ? MessageCircle : kind === "phone" ? Phone : MapPin;
  return (
    <a
      href={business.links[kind]}
      className={className}
      {...(kind !== "phone"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <Icon size={17} aria-hidden="true" />
      <span>
        {children ||
          (kind === "whatsapp"
            ? "Enquire on WhatsApp"
            : kind === "phone"
              ? "Call RLS"
              : "Get Directions")}
      </span>
      {arrow && <ArrowUpRight size={17} aria-hidden="true" />}
    </a>
  );
}
export function ContactActions({ light = false }: { light?: boolean }) {
  return (
    <div className="contact-actions">
      <ContactLink
        kind="whatsapp"
        className={`button ${light ? "button-cream" : "button-primary"}`}
        arrow
      >
        {light ? "WhatsApp Us" : "Enquire on WhatsApp"}
      </ContactLink>
      <ContactLink
        kind="phone"
        className={`button ${light ? "button-outline-light" : "button-outline"}`}
      >
        {light ? "Call Now" : "Call RLS"}
      </ContactLink>
    </div>
  );
}
