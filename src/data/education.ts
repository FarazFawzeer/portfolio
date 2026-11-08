export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  /** Organisation logo. Without one, `initials` is shown in a small badge. */
  icon?: {
    light: string;
    dark?: string;
    width: number;
    height: number;
  };
  initials?: string;
};

// Kept in sync with the CV (public/assets/files/Faraz_Fawzeer_CV.pdf)
export const educationItems: TimelineItem[] = [
  {
    period: "Oct 2024 - Present",
    role: "Software Engineer • Xiteb (PVT) Ltd",
    description:
      "Designing and developing scalable, high-performance web applications with PHP and Laravel. Resolving production bugs, running unit, integration and regression tests, reviewing code, and documenting processes for the wider team.",
    icon: {
      light: "/assets/images/logo/xiteb.jpg",
      dark: "/assets/images/logo/xiteb.jpg",
      width: 32,
      height: 32,
    },
  },

  {
    period: "Oct 2023 - Oct 2024",
    role: "Trainee Associate Software Engineer • Stephen Innovations",
    description:
      "Joined as a Software Engineering Intern and was promoted to Trainee Associate Software Engineer in May 2024. Led a group of 5 intern developers with PR reviews, maintained 5 production projects, introduced test-driven development that cut bug troubleshooting time by 10%, and built Laravel, Vue.js and React sites serving 500-1,000 users.",
    icon: {
      light: "/assets/images/logo/stephen.jpg",
      dark: "/assets/images/logo/stephen.jpg",
      width: 32,
      height: 32,
    },
  },

  {
    period: "Jun 2022 - Oct 2023",
    role: "Junior Web Developer • Fennix Global",
    description:
      "Started as a Trainee Web Developer and was promoted to Junior Web Developer in December 2022. Wrote, tested and deployed PHP code, maintained client websites, shipped changes to customer requirements, and troubleshot products and databases.",
    icon: {
      light: "/assets/images/logo/fennix.jpg",
      dark: "/assets/images/logo/fennix.jpg",
      width: 32,
      height: 32,
    },
  },

  {
    period: "Aug 2021 - Mar 2022",
    role: "IT Administrator Assistant • Makers Pharma",
    description:
      "Supported IT asset management across the organisation, provided technical support to staff, and installed, configured and maintained software, operating systems and hardware.",
    initials: "MP",
  },

  {
    period: "2023 - Present",
    role: "BSc (Hons) Computer Science (Software Engineering)",
    description:
      "Studying at Kingston University (London, UK) alongside full-time work as a Software Engineer. Expected graduation: 2028.",
    icon: {
      light: "/assets/images/logo/kingston.png",
      dark: "/assets/images/logo/kingston.png",
      width: 32,
      height: 32,
    },
  },

  {
    period: "Completed",
    role: "Advanced Diploma in Software Engineering",
    description:
      "National Institute of Business Management (NIBM), Colombo, Sri Lanka.",
    initials: "NIBM",
  },
];
