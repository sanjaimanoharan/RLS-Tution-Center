import founderImage from "../assets/founder-image.jpeg";
import familyImage from "../assets/tution-image-main.jpeg";
import celebrationImage from "../assets/tution-image.jpeg";
import gatheringImage from "../assets/tution-image1.jpeg";
import classroomImage from "../assets/tution-image2.jpeg";
import journeyVideo from "../assets/tution-video.mp4";

export const clientMedia = {
  founder: {
    src: founderImage,
    alt: "Sugumar R., Head of RLS Tuition Center",
    width: 1122,
    height: 1402,
  },
  family: {
    src: familyImage,
    alt: "Students and staff of RLS Tuition Center",
    width: 4096,
    height: 1848,
  },
  hero: {
    src: classroomImage,
    alt: "RLS Tuition Center students gathered for a learning event",
    width: 3024,
    height: 4032,
  },
  gallery: [
    {
      src: celebrationImage,
      alt: "Students celebrating together during the RLS Tuition Center journey",
      width: 4160,
      height: 1921,
    },
    {
      src: gatheringImage,
      alt: "RLS Tuition Center students taking part in a group gathering",
      width: 4032,
      height: 3024,
    },
  ],
  video: journeyVideo,
} as const;
