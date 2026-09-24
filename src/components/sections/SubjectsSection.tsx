import { subjects } from "../../data/academics";
import { SubjectCard } from "../ui/SubjectCard";
import { SectionHeading } from "../ui/SectionHeading";
export function SubjectsSection() {
  return (
    <section className="section subjects-section" id="subjects">
      <div className="container">
        <SectionHeading
          eyebrow="CONCEPTS INTO CLARITY"
          description="Focused academic assistance across eight subject areas, with Mathematics connecting every stage of learning."
        >
          Subjects <em>We Teach</em>
        </SectionHeading>
        <div className="subject-group">
          <h3>School & Higher Secondary</h3>
          <div className="subject-grid">
            {subjects
              .filter((s) => s.group === "school")
              .map((subject) => (
                <SubjectCard key={subject.name} subject={subject} />
              ))}
          </div>
        </div>
        <div className="subject-group higher-subjects">
          <div>
            <h3>College & Engineering</h3>
            <p>
              Mathematics support for B.Sc and M.Sc learners, alongside
              dedicated assistance for engineering students.
            </p>
          </div>
          <div className="subject-grid">
            {subjects
              .filter((s) => s.group === "higher")
              .map((subject) => (
                <SubjectCard key={subject.name} subject={subject} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
