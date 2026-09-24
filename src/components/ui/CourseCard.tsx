import { ArrowUpRight } from "lucide-react";
import type { Course } from "../../data/academics";
import { business } from "../../data/business";
export function CourseCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  const Icon = course.icon;
  return (
    <article className="program-card course-card">
      <div className="program-card-top">
        <span className={`program-icon icon-${index}`}>
          <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <span className="program-index">0{index + 1}</span>
      </div>
      <p className="program-label">{course.label}</p>
      <h3>{course.title}</h3>
      <p className="program-description">{course.description}</p>
      <dl className="course-details">
        {course.details.map((detail) => (
          <div key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>
              <ul>
                {detail.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
      {course.note && <p className="course-note">{course.note}</p>}
      <a
        href={business.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Enquire about ${course.title} on WhatsApp`}
      >
        Enquire <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </article>
  );
}
