import { audiences } from "../../data/academics";
import { SectionHeading } from "../ui/SectionHeading";
export function WhoCanJoinSection() {
  return (
    <section className="section audience-section" id="who-can-join">
      <div className="container">
        <SectionHeading
          eyebrow="SUPPORT AT EVERY STAGE"
          description="From school fundamentals to college courses and Engineering Mathematics, there’s a place for your next step."
        >
          Who Can Join <em>RLS?</em>
        </SectionHeading>
        <div className="audience-grid">
          {audiences.map(({ title, detail, icon: Icon }, index) => (
            <div className="audience-item reveal" key={title}>
              <div className="audience-top">
                <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
