export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  features?: string[];
  image: string;
  logo: string;
  liveUrl?: string;
  githubUrl?: string;
  /**
   * Walkthrough video of the admin side (e.g. an unlisted YouTube or Loom link).
   * Record it on a demo copy with sample data, never the client's live system.
   * When set, a "Watch Demo" button appears on the project card.
   */
  demoVideoUrl?: string;
};

export const works: Work[] = [
  {
    title: "Mazz Laptop Hub",
    description:
      "E-commerce storefront for a Negombo laptop retailer selling business-grade Dell, HP and Lenovo laptops, upgrades and accessories, with an interactive setup builder and WhatsApp-based ordering.",
    year: "2026",
    role: "Full Stack",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "E-Commerce"],
    features: [
      "Laptop catalog with real photos and full specs",
      "Build-your-setup configurator with live price totals",
      "Parts and accessories store",
      "WhatsApp enquiry and order flow",
      "Live stock status for each unit",
      "Admin panel for products and inventory",
    ],
    image: "/assets/images/section/mazzlaptop.jpg",
    logo: "/assets/images/brand/mazzlaptop.png",
    liveUrl: "https://mazzlaptop.lk/",
    // demoVideoUrl: "https://youtu.be/your-unlisted-video",
  },

  {
    title: "VacayGuider",
    description:
      "Full-stack tourism platform with a powerful admin dashboard to manage tour packages, vehicle rentals, visa services, ticket bookings, content management, and customer inquiries.",
    year: "2025",
    role: "Full Stack ",
    tags: ["Laravel", "PHP", "MySQL", "Azure", "JavaScript"],
    features: [
      "Tour package management system",
      "Vehicle rental booking module",
      "Visa & ticket booking workflows",
      "Admin dashboard with role-based access",
      "Customer inquiry management",
      "Content management system (CMS)",
    ],
      image: "/assets/images/section/vacay.jpg",
    logo: "/assets/images/brand/vacayguider.png",
    liveUrl: "https://www.vacayguider.com/",

  },

 {
  title: "DigiHub Courses",
  description:
    "Online course selling platform where users can browse, explore, and purchase courses across different categories. The system allows customers to directly buy or inquire about courses through the website, while the admin manages all course content and sales through a powerful backend dashboard.",
  year: "2025",
  role: "Full Stack",
  tags: ["Laravel", "React", "REST API", "MySQL", "Bootstrap"],
  features: [
    "Course catalog with category-based browsing",
    "Course purchase and inquiry system",
    "Admin dashboard for course management",
    "Dynamic course content upload (videos, files, materials)",
    "Customer inquiry and communication system",
    "REST API integration for frontend consumption"
  ],
  image: "/assets/images/section/digihub-2026.jpg",
  logo: "/assets/images/brand/digihub-2026.png",
  liveUrl: "https://digihubcourses.com/",

},

  {
    title: "Fonivo.lk",
    description:
      "Mobile phone retail and business management system with inventory control, supplier tracking, installment plans, customer records, sales management, and financial reporting.",
    year: "2026",
    role: "Full Stack ",
    tags: ["Laravel", "MySQL", "Inventory", "Finance", "Admin Panel"],
    features: [
      "Inventory & stock management system",
      "Supplier and purchase tracking",
      "Installment payment system",
      "Customer management system",
      "Sales and revenue reporting",
      "Credit and payment tracking module",
    ],
     image: "/assets/images/section/fonivolk.jpg",
    logo: "/assets/images/brand/fonivo.png",
    liveUrl: "https://fonivo.lk/",

  },

  {
    title: "UPSWEP",
    description:
      "E-commerce platform with a custom CMS for managing products, collections, banners, homepage sections, inventory, and business content through an admin dashboard.",
    year: "2026",
    role: "Full Stack",
    tags: ["Laravel", "E-Commerce", "CMS", "MySQL", "JavaScript"],
    features: [
      "Product & category management",
      "Shopping cart system",
      "Order management workflow",
      "Custom CMS for homepage sections",
      "Promotional banner management",
      "Inventory control system",
    ],
    image: "/assets/images/section/upsweplk.jpg",
    logo: "/assets/images/brand/upswep.png",
    liveUrl: "https://upswep.lk/",

  },
];