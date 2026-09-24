import { MessageSquareQuote, Star } from "lucide-react";
import type { Testimonial } from "../../data/testimonials";
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { isPlaceholder, name, quote, course, rating, avatar, achievement } =
    testimonial;
  return (
    <article className="program-card testimonial-card reveal">
      <MessageSquareQuote
        className="feedback-icon"
        size={27}
        strokeWidth={1.4}
        aria-hidden="true"
      />
      {isPlaceholder ? (
        <>
          <p className="placeholder-label">Feedback coming soon</p>
          <h3>{course}</h3>
          <p className="program-description">
            Genuine student experiences will be shared here with their
            permission.
          </p>
          <span className="feedback-pending">Student feedback awaited</span>
        </>
      ) : (
        <>
          {rating !== undefined &&
            Number.isFinite(rating) &&
            rating >= 1 &&
            rating <= 5 && (
              <div
                className="feedback-rating"
                aria-label={`${rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={14}
                    aria-hidden="true"
                    fill={i < Math.round(rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
            )}
          <blockquote>{quote}</blockquote>
          <div className="feedback-author">
            {avatar && (
              <img
                src={avatar.src}
                alt={avatar.alt}
                width="42"
                height="42"
                loading="lazy"
              />
            )}
            <div>
              <h3>{name}</h3>
              <p>{course}</p>
            </div>
          </div>
          {achievement && <p className="feedback-achievement">{achievement}</p>}
        </>
      )}
    </article>
  );
}
