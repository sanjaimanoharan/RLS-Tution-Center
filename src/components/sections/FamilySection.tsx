import { clientMedia } from "../../data/media";
import { SectionHeading } from "../ui/SectionHeading";

export function FamilySection() {
  return (
    <section className="section family-section">
      <div className="container">
        <SectionHeading
          eyebrow="GROWING TOGETHER THROUGH EDUCATION"
          description="RLS Tuition Center has grown through the continued trust of students and parents, creating a supportive environment focused on learning, confidence and academic development."
        >
          More Than Tuition — <em>A Learning Community</em>
        </SectionHeading>
        <figure className="family-media">
          <img
            src={clientMedia.family.src}
            alt={clientMedia.family.alt}
            width={clientMedia.family.width}
            height={clientMedia.family.height}
            loading="lazy"
          />
          <figcaption>Our RLS Family</figcaption>
        </figure>
      </div>
    </section>
  );
}
