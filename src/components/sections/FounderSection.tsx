import { ArrowRight, MapPin } from "lucide-react";
import { founder } from "../../data/founder";
import { founderHighlights, founderStory } from "../../data/journey";
import { SectionHeading } from "../ui/SectionHeading";

export function FounderSection() {
  return (
    <section className="section founder-section section-anchor" id="founder">
      <div className="container">
        <div className="founder-grid">
          <figure className="founder-portrait reveal">
            <img
              src={founder.photo.src}
              alt={founder.photo.alt}
              width={founder.photo.width}
              height={founder.photo.height}
              loading="lazy"
            />
            <figcaption className="founder-since-badge">
              <span>Since</span>
              <strong>2017</strong>
            </figcaption>
          </figure>

          <div className="founder-copy">
            <SectionHeading eyebrow="FOUNDER & HEAD">
              {founder.name}
            </SectionHeading>

            <div className="founder-identity">
              <span className="founder-qualification">
                {founder.qualification}
              </span>
              <span className="founder-designation">{founder.designation}</span>
              <span className="founder-location">
                <MapPin aria-hidden="true" size={14} strokeWidth={1.8} />
                {founder.location}
              </span>
            </div>

            <p className="founder-intro">{founder.introduction}</p>
            <p className="founder-preview">{founder.storyPreview}</p>

            <a className="founder-journey-link" href="#founder-story">
              Read My Journey
              <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>

            <dl className="founder-highlights">
              {founderHighlights.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="founder-philosophy">
              <p>“{founder.philosophy}”</p>
              <cite>Founder philosophy</cite>
            </blockquote>
          </div>
        </div>

        <div className="founder-story section-anchor" id="founder-story">
          <p className="eyebrow">
            <span />
            THE STORY BEHIND RLS
          </p>
          <div className="founder-story-copy">
            {founderStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
