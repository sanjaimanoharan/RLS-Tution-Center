export interface Testimonial {
  id: string;
  name: string;
  course: string;
  quote: string;
  isPlaceholder: boolean;
  rating?: number;
  avatar?: { src: string; alt: string };
  achievement?: string;
}
// Placeholder cards never render names, quotations, ratings or achievements as genuine feedback.
// Supply consented, approved feedback and set isPlaceholder: false to publish a real testimonial.
export const showPlaceholderFeedback = true;
export const testimonials: Testimonial[] = [
  {
    id: "school",
    name: "Student Name",
    course: "School & Higher Secondary",
    quote: "Student feedback will be updated",
    isPlaceholder: true,
  },
  {
    id: "college",
    name: "Student Name",
    course: "College / B.Sc / M.Sc",
    quote: "Student feedback will be updated",
    isPlaceholder: true,
  },
  {
    id: "engineering",
    name: "Student Name",
    course: "Engineering Mathematics",
    quote: "Student feedback will be updated",
    isPlaceholder: true,
  },
];
