import { GraduationCap } from "lucide-react";
import { schools } from "../../data/journey";
import { SectionHeading } from "../ui/SectionHeading";

export function SchoolsSection() {
  return (
    <section className="section schools-section">
      <div className="container schools-grid">
        <SectionHeading
          eyebrow="STUDENTS GUIDED FROM"
          description="In Madurai, RLS has had the privilege of guiding students who study at these reputed institutions and many more."
        >
          Students From <em>Reputed Schools</em>
        </SectionHeading>
        <ul className="school-list">
          {schools.map((school) => (
            <li className="school-item" key={school}>
              <GraduationCap size={18} strokeWidth={1.5} aria-hidden="true" />
              {school}
            </li>
          ))}
          <li className="school-item school-more">
            And many more reputed institutions
          </li>
        </ul>
      </div>
    </section>
  );
}
