import { ArrowUpRight, Check } from "lucide-react";
import { academicSupport } from "../../data/academics";
import { business } from "../../data/business";
import { clientMedia } from "../../data/media";
import { SectionHeading } from "../ui/SectionHeading";
export function About() {
  return (
    <section id="about" className="section section-anchor">
      <div className="container about-grid">
        <div className="about-visual reveal">
          <div className="about-photo">
            <img
              src={clientMedia.gallery[1].src}
              alt={clientMedia.gallery[1].alt}
              width={clientMedia.gallery[1].width}
              height={clientMedia.gallery[1].height}
              loading="lazy"
            />
          </div>
          <div className="about-tag">
            <span className="about-tag-line" />
            <p>
              Learning begins with
              <br />
              <strong>understanding.</strong>
            </p>
          </div>
          <span className="photo-footnote">
            THOUGHTFUL GUIDANCE. EVERY STEP OF THE WAY.
          </span>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="A LITTLE ABOUT RLS">
            More than a lesson.
            <br />
            <em>A foundation for what’s next.</em>
          </SectionHeading>
          <p>
            Every learner sees the world a little differently. At RLS Tuition
            Center, academic support starts with understanding those individual
            learning needs.
          </p>
          <p>
            Since {business.founded}, our Madurai centre has provided focused
            assistance for school, higher-secondary, college and engineering
            learners. From Classes IX–XII to B.Sc, M.Sc and Engineering
            Mathematics, the focus is on making concepts clearer and developing
            problem-solving skills.
          </p>
          <h3 className="academic-support-title">Academic Support</h3>
          <div className="about-points">
            {academicSupport.map((item) => (
              <div key={item}>
                <Check size={16} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="#programs" className="text-link">
            Find the right academic support <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
