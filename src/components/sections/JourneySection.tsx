import { journeyMilestones } from "../../data/journey";
import { SectionHeading } from "../ui/SectionHeading";

export function JourneySection() {
  return (
    <section id="journey" className="section journey-section section-anchor">
      <div className="container">
        <SectionHeading
          eyebrow="FROM TWO STUDENTS TO A STATEWIDE REACH"
          description="A concise look at the milestones that continue to shape RLS Tuition Center."
        >
          The RLS <em>Journey</em>
        </SectionHeading>
        <ol className="journey-list">
          {journeyMilestones.map((milestone, index) => (
            <li className="journey-item" key={milestone.period}>
              <span className="journey-index">0{index + 1}</span>
              <p className="journey-period">{milestone.period}</p>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
