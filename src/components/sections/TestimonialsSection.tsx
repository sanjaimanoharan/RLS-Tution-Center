import { testimonials, showPlaceholderFeedback } from "../../data/testimonials";
import { TestimonialCard } from "../ui/TestimonialCard";
import { SectionHeading } from "../ui/SectionHeading";
export function TestimonialsSection() {
  const visible = testimonials.filter(
    (t) => showPlaceholderFeedback || !t.isPlaceholder,
  );
  if (!visible.length) return null;
  const pending = visible.every((t) => t.isPlaceholder);
  return (
    <section className="section testimonials-section" id="student-feedback">
      <div className="container">
        <SectionHeading
          eyebrow="THE LEARNER’S PERSPECTIVE"
          description={
            pending
              ? "We look forward to sharing genuine feedback from our students. No student reviews have been published yet."
              : "First-hand experiences, shared by students with their permission."
          }
        >
          What Our <em>Students Say</em>
        </SectionHeading>
        <div className="testimonials-grid">
          {visible.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
