import {
  ArrowDown,
  BookOpen,
  MapPin,
  Sprout,
  GraduationCap,
  House,
  CalendarDays,
  Check,
} from "lucide-react";
import { business } from "../../data/business";
import { clientMedia } from "../../data/media";
import { ContactActions, ContactLink } from "../ui/ContactActions";
export function Hero() {
  return (
    <>
      <section id="home" className="hero section-anchor">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              SUPPORTING LEARNERS SINCE {business.founded}
            </p>
            <h1>
              Building strong foundations
              <br />
              <span className="heading-serif">in Mathematics</span>
              <br />
              <span className="underline-word">since 2017.</span>
            </h1>
            <p className="hero-description">
              Dedicated Mathematics tuition for Secondary and Higher Secondary
              students, with personalised guidance that builds clarity,
              confidence and strong academic foundations.
            </p>
            <ContactActions />
            <ContactLink kind="maps" className="text-link hero-directions">
              S. Alangulam, Madurai{" "}
              <span className="direction-label">· Get directions ↗</span>
            </ContactLink>
            <div className="hero-note">
              <span className="small-check">
                <Check size={12} />
              </span>
              A little guidance. A world of possibility.
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src={clientMedia.hero.src}
                sizes="(max-width: 600px) 92vw, 47vw"
                alt={clientMedia.hero.alt}
                width={clientMedia.hero.width}
                height={clientMedia.hero.height}
                fetchPriority="high"
              />
              <div className="image-shade" />
              <span className="image-label">
                <span />A SPACE TO LEARN & GROW
              </span>
              <div className="image-caption">
                <BookOpen size={27} strokeWidth={1.3} />
                <p>
                  Every learner has potential.
                  <br />
                  <strong>Let’s build on it.</strong>
                </p>
              </div>
            </div>
            <div className="hero-stamp">
              <span>ROOTED IN</span>
              <strong>{business.founded}</strong>
              <span>GROWING WITH YOU</span>
            </div>
            <div className="hero-location">
              <MapPin size={19} />
              <span>
                Your neighbourhood learning support
                <strong>S. Alangulam, Madurai</strong>
              </span>
              <span className="location-dot" />
            </div>
            <div className="photo-corner" aria-hidden="true" />
          </div>
        </div>
        <div className="container hero-bottom">
          <a href="#programs">
            Explore academic support <ArrowDown size={15} />
          </a>
          <span>
            School <span>·</span> Higher Secondary <span>·</span> College{" "}
            <span>·</span> Engineering
          </span>
        </div>
      </section>
      <section className="info-strip" aria-label="RLS at a glance">
        <div className="container info-grid">
          {[
            {
              icon: CalendarDays,
              title: `Since ${business.founded}`,
              detail: "Nine academic years of teaching",
            },
            {
              icon: Sprout,
              title: "Mathematics focus",
              detail: "Clear concepts and problem solving",
            },
            {
              icon: GraduationCap,
              title: "Secondary & Higher Secondary",
              detail: "Focused academic guidance",
            },
            {
              icon: House,
              title: "Award-recognized educator",
              detail: "Chennai · Madurai · Tuticorin",
            },
          ].map(({ icon: Icon, title, detail }) => (
            <div className="info-item" key={title}>
              <Icon size={24} strokeWidth={1.5} />
              <div>
                <h2>{title}</h2>
                <p>{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
