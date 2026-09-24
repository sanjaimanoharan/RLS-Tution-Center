import { ArrowUpRight, BookOpen } from "lucide-react";
import { ContactActions, ContactLink } from "../ui/ContactActions";
export function ContactCTA() {
  return (
    <section className="section enquiry-section">
      <div className="container">
        <div className="enquiry-card reveal">
          <div className="enquiry-art" aria-hidden="true">
            <BookOpen strokeWidth={0.7} />
            <span />
          </div>
          <div className="enquiry-copy">
            <p className="eyebrow">
              <span />
              LET’S TALK ABOUT LEARNING
            </p>
            <h2>
              Looking for the right
              <br />
              <em>academic support?</em>
            </h2>
            <p>
              Speak directly with RLS Tuition Center to discuss the learner’s
              class, course, subjects and preferred coaching mode.
            </p>
            <ContactActions light />
            <ContactLink kind="maps" className="text-link light-link" />
          </div>
          <div className="enquiry-side">
            <span>
              EVERY NEXT CHAPTER
              <br />
              STARTS WITH A CONVERSATION.
            </span>
            <ArrowUpRight size={65} strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
