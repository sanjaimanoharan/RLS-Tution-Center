import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { clientMedia } from "../../data/media";
import { SectionHeading } from "../ui/SectionHeading";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage =
    activeIndex === null ? null : clientMedia.gallery[activeIndex];

  useEffect(() => {
    if (!activeImage) return;
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setActiveIndex(null);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [activeImage]);

  return (
    <section className="section gallery-section">
      <div className="container">
        <SectionHeading eyebrow="SHARED MOMENTS, LASTING MEMORIES">
          Moments From <em>Our Journey</em>
        </SectionHeading>
        <div className="gallery-grid">
          {clientMedia.gallery.map((image, index) => (
            <button
              className="gallery-item"
              type="button"
              key={image.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
              <span>
                <Maximize2 size={17} /> View image
              </span>
            </button>
          ))}
        </div>
      </div>
      {activeImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Journey image preview"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setActiveIndex(null)}
          >
            <X />
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            width={activeImage.width}
            height={activeImage.height}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
