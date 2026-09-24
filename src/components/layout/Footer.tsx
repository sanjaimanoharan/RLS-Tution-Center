import { ArrowUp } from "lucide-react";
import { business, navigation } from "../../data/business";
import { Wordmark } from "./Header";
import { ContactLink } from "../ui/ContactActions";
export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <Wordmark />
              <p>
                Clearer concepts. Stronger foundations.
                <br />
                Support for every next step.
              </p>
              <span className="footer-established">
                Teaching since {business.founded} · Madurai
              </span>
            </div>
            <div>
              <h3>Explore</h3>
              <nav aria-label="Footer navigation">
                {navigation.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3>Let’s connect</h3>
              <ContactLink kind="phone">{business.phone}</ContactLink>
              <ContactLink kind="whatsapp">WhatsApp us</ContactLink>
              <p className="footer-address">{business.address}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <a href="#home">
              Back to top <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </footer>
      <div className="mobile-contact-bar">
        <ContactLink kind="phone">Call RLS</ContactLink>
        <ContactLink kind="whatsapp">WhatsApp us</ContactLink>
      </div>
    </>
  );
}
