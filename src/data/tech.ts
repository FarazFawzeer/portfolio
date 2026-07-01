export type TechItem = {
  name: string;
  duty: string;
  image: {
    light: string;
    dark?: string;
    width: number;
    height: number;
  };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Laravel",
    duty: "Backend Framework",
    image: {
      light: "/assets/images/tech/laravel.svg",
      width: 28,
      height: 28,
    },
    progress: 95,
  },

  {
    name: "PHP",
    duty: "Server-side Development",
    image: {
      light: "/assets/images/tech/php.svg",
      width: 28,
      height: 28,
    },
    progress: 95,
  },

  {
    name: "Vue.js",
    duty: "Interactive User Interfaces",
    image: {
      light: "/assets/images/tech/vue.svg",
      width: 28,
      height: 28,
    },
    progress: 90,
  },

  {
    name: "Next.js",
    duty: "Modern Web Applications",
    image: {
      light: "/assets/images/tech/next.svg",
      dark: "/assets/images/tech/next.svg",
      width: 28,
      height: 28,
    },
    progress: 85,
  },

 

   {
    name: "React",
    duty: "Frontend Development",
    image: {
      light: "/assets/images/tech/react.svg",
      width: 28,
      height: 28,
    },
    progress: 70,
  },
  {
    name: "JavaScript",
    duty: "Frontend & Backend",
    image: {
      light: "/assets/images/tech/javascript.svg",
      width: 28,
      height: 28,
    },
    progress: 90,
  },

  {
    name: "MySQL",
    duty: "Relational Database",
    image: {
      light: "/assets/images/tech/mysql.svg",
      width: 28,
      height: 28,
    },
    progress: 90,
  },

  {
    name: "Azure",
    duty: "Cloud Storage & Deployment",
    image: {
      light: "/assets/images/tech/azure.svg",
      width: 28,
      height: 28,
    },
    progress: 75,
  },
];