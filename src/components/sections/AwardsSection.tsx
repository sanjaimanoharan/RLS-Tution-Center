import { Award } from "lucide-react";
import { awards, awardsIntroduction } from "../../data/journey";
import { SectionHeading } from "../ui/SectionHeading";

export function AwardsSection() {
  return (
    <section className="section awards-section">
      <div className="container">
        <div className="awards-intro">
          <SectionHeading eyebrow="HONOURS THAT INSPIRE THE JOURNEY">
            Awards & <em>Recognition</em>
          </SectionHeading>
          <div className="awards-copy">
            {awardsIntroduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="award-grid">
          {awards.map((award, index) => (
            <article className="award-card" key={award.title}>
              <div className="award-card-top">
                <span className="award-icon">
                  <Award size={24} strokeWidth={1.4} />
                </span>
                <span>0{index + 1}</span>
              </div>
              {award.year && <p className="award-year">{award.year}</p>}
              <h3>{award.title}</h3>
              {award.organization && (
                <p className="award-organization">{award.organization}</p>
              )}
              <p>{award.recognition}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
