import {
  ArrowUpRight,
  MapPin,
  Clock3,
  Phone,
  Navigation,
  BookOpen,
} from "lucide-react";
import { business } from "../../data/business";
import { ContactLink } from "../ui/ContactActions";
import { SectionHeading } from "../ui/SectionHeading";
export function Contact() {
  return (
    <>
      <section id="contact" className="section contact-section section-anchor">
        <div className="container contact-grid">
          <div>
            <SectionHeading eyebrow="COME SAY HELLO">
              Your next step
              <br />
              <em>starts here.</em>
            </SectionHeading>
            <p className="contact-intro">
              RLS Tuition Center is located in S. Alangulam, Madurai, providing
              a comfortable and focused learning environment for school,
              higher-secondary, college and engineering students.
            </p>
            <div className="contact-details">
              <div>
                <MapPin size={21} />
                <div>
                  <h3>Visit RLS Tuition Center</h3>
                  <address>{business.address}</address>
                </div>
              </div>
              <div>
                <Phone size={20} />
                <div>
                  <h3>Speak with us</h3>
                  <a href={business.links.phone}>{business.phone}</a>
                  <ContactLink
                    kind="whatsapp"
                    className="text-link contact-whatsapp"
                  >
                    Or start a conversation on WhatsApp{" "}
                    <ArrowUpRight size={14} />
                  </ContactLink>
                </div>
              </div>
              <div>
                <Clock3 size={20} />
                <div>
                  <h3>Plan your visit</h3>
                  <p>{business.hours}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="location-card reveal">
            <div className="map-art" aria-hidden="true">
              <span className="map-block block-one" />
              <span className="map-block block-two" />
              <span className="map-block block-three" />
              <span className="map-block block-four" />
              <span className="map-road road-one" />
              <span className="map-road road-two" />
              <span className="map-road road-three" />
              <span className="map-park" />
              <div className="map-pin">
                <BookOpen size={26} />
              </div>
              <span className="map-place">S. ALANGULAM</span>
              <span className="map-disclaimer">Illustrative location view</span>
            </div>
            <div className="location-card-content">
              <p className="eyebrow">FIND US IN MADURAI</p>
              <h3>A local place to learn.</h3>
              <p>
                S. Alangulam, Madurai – 625017
                <br />
                Tamil Nadu
              </p>
              <a
                className="button button-primary"
                href={business.links.maps}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={17} />
                Open in Google Maps <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
