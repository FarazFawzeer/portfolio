export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  expanded: boolean;
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Custom Web Application Development",
    description:
      "I build scalable, secure, and high-performance web applications tailored to business needs. From customer-facing websites to complex admin dashboards, I deliver complete full-stack solutions using modern technologies.",
    tags: [
      "Laravel",
      "React",
      "Next.js",
      "PHP",
      "MySQL",
      "REST APIs"
    ],
    images: [
      "/assets/images/section/service-11.jpg",
      "/assets/images/section/service-22.jpg",
    ],
    expanded: true,
  },

  {
    id: "service-2",
    title: "Enterprise Management Systems",
    description:
      "I develop custom business management systems that streamline operations, automate workflows, and improve productivity. Every solution is designed around the client's unique business processes.",
    tags: [
      "ERP",
      "CRM",
      "Inventory",
      "Admin Panels",
      "Automation",
      "Reporting"
    ],
    images: [
      "/assets/images/section/service-33.jpg",
      "/assets/images/section/service-444.jpg",
    ],
    expanded: false,
  },

  {
    id: "service-3",
    title: "E-Commerce & Business Platforms",
    description:
      "From online stores to complete business ecosystems, I build e-commerce platforms with inventory management, order processing, payment integration, and content management systems.",
    tags: [
      "E-Commerce",
      "CMS",
      "Payment Gateway",
      "Azure Storage",
      "Order Management"
    ],
    images: [
      "/assets/images/section/service-55.jpg",
      "/assets/images/section/service-66.jpg",
    ],
    expanded: false,
  },

  {
    id: "service-4",
    title: "API Integration & System Support",
    description:
      "I integrate third-party APIs, optimize application performance, resolve production issues, and provide long-term maintenance to keep business applications secure, reliable, and scalable.",
    tags: [
      "REST API",
      "Azure",
      "Docker",
      "Performance",
      "Maintenance",
      "Bug Fixing"
    ],
    images: [
      "/assets/images/section/service-77.jpg",
      "/assets/images/section/service-88.jpg",
    ],
    expanded: false,
  },
];