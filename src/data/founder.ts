import { clientMedia } from "./media";

export const founder: FounderProfile = {
  name: "Sugumar R.",
  qualification: "M.Sc., M.Ed.",
  designation: "Head – RLS Tuition Center",
  location: "Madurai",
  introduction:
    "Dedicated to building strong mathematical foundations through concept-focused teaching, personalized attention, and consistent academic guidance.",
  storyPreview:
    "My journey began in March 2017 as a home tutor for two students from Mahatma School, CBSE. What started as a humble beginning has grown into a trusted tuition service supporting students across Tamil Nadu.",
  philosophy:
    "Helping students understand Mathematics with confidence, clarity, and strong fundamentals.",
  photo: clientMedia.founder,
};

export interface FounderProfile {
  name: string;
  qualification: string;
  designation: string;
  location: string;
  introduction: string;
  storyPreview: string;
  philosophy: string;
  photo: typeof clientMedia.founder;
}
