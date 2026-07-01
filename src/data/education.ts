export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: {
    light: string;
    dark?: string;
    width: number;
    height: number;
  };
};

export const educationItems: TimelineItem[] = [
  {
    period: "Oct 2024 - Present",
    role: "Software Engineer • Xiteb (PVT) Ltd",
    description:
      "Developing scalable enterprise web applications using Laravel and modern web technologies. Collaborating with cross-functional teams, improving application performance, conducting testing, and maintaining clean, production-ready code.",
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
      "Progressed from Software Engineering Intern to Associate Software Engineer. Built full-stack applications with Laravel, Vue.js and React, maintained multiple production systems, reviewed code, mentored interns, and delivered scalable client solutions.",
    icon: {
      light: "/assets/images/logo/stephenjp.jpg",
      dark: "/assets/images/logo/stephen.jpg",
      width: 32,
      height: 32,
    },
  },

  {
    period: "Jun 2022 - Oct 2023",
    role: "Junior Web Developer • Fennix Global",
    description:
      "Started as a Trainee Web Developer before being promoted to Junior Web Developer. Developed and maintained PHP applications, created responsive websites, deployed client updates, and resolved backend and database issues.",
    icon: {
      light: "/assets/images/logo/fennix.jpg",
      dark: "/assets/images/logo/fennix.jpg",
      width: 32,
      height: 32,
    },
  },

  {
    period: "2023 - Present",
    role: "BSc (Hons) Computer Science (Software Engineering)",
    description:
      "Currently pursuing a Bachelor's degree at Kingston University while working full-time as a Software Engineer, continuously expanding knowledge in software architecture, engineering principles, and modern technologies.",
    icon: {
      light: "/assets/images/logo/kingston.png",
      dark: "/assets/images/logo/kingston.png",
      width: 32,
      height: 32,
    },
  },
];