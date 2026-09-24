import type { Subject } from "../../data/academics";
export function SubjectCard({ subject }: { subject: Subject }) {
  const Icon = subject.icon;
  return (
    <article className="subject-card reveal">
      <span className="program-icon">
        <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <div>
        <h4>{subject.name}</h4>
        <p>{subject.description}</p>
      </div>
    </article>
  );
}
