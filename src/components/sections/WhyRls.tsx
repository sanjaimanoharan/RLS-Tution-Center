import { Check, Sprout } from "lucide-react";
import { benefits } from "../../data/academics";
import { SectionHeading } from "../ui/SectionHeading";
export function WhyRls() {
  return (
    <>
      <section id="why-rls" className="section why-section section-anchor">
        <div className="container why-grid">
          <div>
            <SectionHeading eyebrow="THE RLS DIFFERENCE">
              Why Students
              <br />
              <em>Choose RLS</em>
            </SectionHeading>
            <p className="why-intro">
              Choosing academic support is a personal decision. We keep the
              focus where it belongs: on the learner.
            </p>
            <div className="why-quote reveal">
              <Sprout size={42} strokeWidth={1.2} />
              <p>
                Space to ask questions.
                <br />
                Time to understand.
                <br />
                <em>Support to keep going.</em>
              </p>
              <span>THE WAY WE APPROACH LEARNING</span>
            </div>
          </div>
          <div className="benefits">
            {benefits.map(([title, description]) => (
              <div className="benefit reveal" key={title}>
                <span>
                  <Check size={17} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
