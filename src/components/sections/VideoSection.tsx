import { clientMedia } from "../../data/media";
import { SectionHeading } from "../ui/SectionHeading";

export function VideoSection() {
  return (
    <section className="section video-section">
      <div className="container video-grid">
        <SectionHeading
          eyebrow="A GLIMPSE OF OUR COMMUNITY"
          description="Meet the people and shared moments behind the continuing RLS Tuition Center journey."
        >
          Watch Our <em>Journey</em>
        </SectionHeading>
        <div className="video-frame">
          <video
            controls
            preload="metadata"
            playsInline
            aria-label="RLS Tuition Center journey video"
          >
            <source src={clientMedia.video} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
      </div>
    </section>
  );
}
