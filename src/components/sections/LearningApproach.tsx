import { learningSteps } from "../../data/programs";
import { SectionHeading } from "../ui/SectionHeading";
export function LearningApproach() {
  return (
    <section className="section approach-section">
      <div className="container">
        <SectionHeading
          eyebrow="A THOUGHTFUL LEARNING JOURNEY"
          className="centered"
          description="Good guidance starts with listening and grows with every lesson."
        >
          Small steps. <em>Meaningful understanding.</em>
        </SectionHeading>
        <div className="timeline">
          <div className="timeline-track" aria-hidden="true">
            <span className="timeline-progress" />
          </div>
          <ol>
            {learningSteps.map((step, index) => (
              <li className="timeline-step reveal" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
