import {
  BookOpen,
  GraduationCap,
  DraftingCompass,
  ChartNoAxesCombined,
  FlaskConical,
  Atom,
  Sprout,
  Globe,
  Calculator,
  Sigma,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const schoolClasses = ["Class IX", "Class X", "Class XI", "Class XII"];
export const curricula = ["CBSE", "ICSE", "IGCSE"];
// Add other curricula only after confirmation.
export const higherEducationCourses = ["B.Sc", "M.Sc"];
export const schoolSubjects = [
  "Mathematics",
  "Chemistry",
  "Physics",
  "Science",
  "Social Studies",
  "Business Mathematics",
];
export const engineeringCourses = [
  "Engineering Mathematics",
  "Mathematics fundamentals",
];

export interface Course {
  title: string;
  label: string;
  icon: LucideIcon;
  description: string;
  details: { label: string; items: string[] }[];
  note?: string;
}
export const courses: Course[] = [
  {
    title: "School Tuition",
    label: "STRONG FOUNDATIONS",
    icon: BookOpen,
    description:
      "Focused support for school concepts, everyday learning and exam preparation.",
    details: [
      { label: "Classes", items: schoolClasses },
      { label: "Subjects", items: schoolSubjects },
      { label: "Curricula", items: curricula },
    ],
  },
  {
    title: "Higher Secondary",
    label: "READY FOR THE NEXT STEP",
    icon: ChartNoAxesCombined,
    description:
      "Build subject understanding and prepare thoughtfully for board examinations.",
    details: [
      { label: "Classes", items: ["Class XI", "Class XII"] },
      {
        label: "Subjects",
        items: ["Mathematics", "Business Mathematics", "Physics", "Chemistry"],
      },
      {
        label: "Learning focus",
        items: [
          "Concept learning",
          "Problem solving",
          "Revision",
          "Exam preparation",
          "Board exam preparation",
        ],
      },
    ],
  },
  {
    title: "College / Higher Education",
    label: "BEYOND SCHOOL ACADEMICS",
    icon: GraduationCap,
    description:
      "Academic assistance for college students, with a focus on Mathematics and clear conceptual understanding.",
    details: [
      { label: "Courses", items: higherEducationCourses },
      { label: "Subject focus", items: ["Mathematics"] },
    ],
    note: "Ask about Applied Mathematics and other relevant subjects for your course.",
  },
  {
    title: "Engineering Tuition",
    label: "ADVANCED IDEAS, CLEARLY EXPLAINED",
    icon: DraftingCompass,
    description:
      "Engineering Mathematics and academic assistance for engineering students, extending well beyond school tuition.",
    details: [
      { label: "Areas of support", items: engineeringCourses },
      {
        label: "Learning focus",
        items: [
          "Semester exam preparation",
          "Problem-solving sessions",
          "Concept clarification",
          "University exam preparation",
        ],
      },
    ],
    note: "Discuss your syllabus and the topics you need help with.",
  },
];
export const audiences = [
  { title: "School Students", detail: "Class IX – XII", icon: BookOpen },
  {
    title: "Higher Secondary Students",
    detail: "Science, Mathematics & Commerce-related Mathematics",
    icon: ChartNoAxesCombined,
  },
  {
    title: "College Students",
    detail: "B.Sc / M.Sc academic support",
    icon: GraduationCap,
  },
  {
    title: "Engineering Students",
    detail: "Engineering Mathematics & academic support",
    icon: DraftingCompass,
  },
];
export interface Subject {
  name: string;
  description: string;
  icon: LucideIcon;
  group: "school" | "higher";
}
export const subjects: Subject[] = [
  {
    name: "Mathematics",
    description: "Foundations, concepts and problem-solving practice.",
    icon: Calculator,
    group: "school",
  },
  {
    name: "Chemistry",
    description: "Clear explanations of chemical ideas and applications.",
    icon: FlaskConical,
    group: "school",
  },
  {
    name: "Physics",
    description: "Understand principles and work through numerical problems.",
    icon: Atom,
    group: "school",
  },
  {
    name: "Science",
    description: "Build understanding of the ideas behind everyday science.",
    icon: Sprout,
    group: "school",
  },
  {
    name: "Social Studies",
    description: "Make connections and revise key topics with clarity.",
    icon: Globe,
    group: "school",
  },
  {
    name: "Business Mathematics",
    description: "Practise mathematical concepts in a business context.",
    icon: ChartNoAxesCombined,
    group: "school",
  },
  {
    name: "Engineering Mathematics",
    description:
      "Mathematics fundamentals and advanced problem solving for engineering students.",
    icon: Sigma,
    group: "higher",
  },
  {
    name: "Engineering Academic Assistance",
    description:
      "Subject-specific concept clarification and exam preparation. Discuss your syllabus with us.",
    icon: DraftingCompass,
    group: "higher",
  },
];
export const academicSupport = [
  "Doubt clarification",
  "Individual attention",
  "Concept-focused teaching",
  "Regular revision",
  "Problem-solving practice",
  "Exam preparation",
  "Performance guidance",
];
export const benefits = [
  [
    "Concept-oriented teaching",
    "Understand the ideas behind each topic through clear explanations and doubt clarification.",
  ],
  [
    "Personal attention in a friendly environment",
    "Ask questions and work through challenging areas at the learner’s pace.",
  ],
  [
    "School to engineering academic support",
    "Guidance for school, higher-secondary, B.Sc, M.Sc and engineering learners.",
  ],
  [
    "Exam-focused, structured learning",
    "Prepare with regular revision, problem-solving practice and performance guidance.",
  ],
  [
    "A strong focus on Mathematics",
    "Build mathematical foundations and confidence with problems, from school to Engineering Mathematics.",
  ],
];
