import { ArrowUpRight } from "lucide-react";
import { courses } from "../../data/academics";
import { CourseCard } from "../ui/CourseCard";
import { business } from "../../data/business";
import { SectionHeading } from "../ui/SectionHeading";
export function Programs() {
  return (
    <section id="programs" className="section programs-section section-anchor">
      <div className="container">
        <div className="section-top">
          <SectionHeading eyebrow="FIND YOUR NEXT STEP">
            <mark className="course-heading-highlight">Courses & Classes</mark>
            <br />
            <em>We Offer</em>
          </SectionHeading>
          <p>
            Academic support from school fundamentals to advanced engineering
            mathematics.
          </p>
        </div>
        <div className="program-grid course-grid">
          {courses.map((course, index) => (
            <div className="course-reveal" key={course.title}>
              <CourseCard course={course} index={index} />
            </div>
          ))}
        </div>
        <p className="programs-note">
          Not sure where to begin?{" "}
          <a
            href={business.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tell us what you’re studying <ArrowUpRight size={14} />
          </a>
        </p>
      </div>
    </section>
  );
}
