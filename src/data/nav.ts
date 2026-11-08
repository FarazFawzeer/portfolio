export type NavItem = {
  href: string;
  label: string;
  icon: string;
  separator?: "before" | "after";
};

export const navItems: NavItem[] = [
  { href: "#home", label: "Home", icon: "icon-home", separator: "after" },
  { href: "#about", label: "About", icon: "icon-user-circle" },
  { href: "#education", label: "Experience ", icon: "icon-edu" },
  { href: "#work", label: "Projects", icon: "icon-high-light" },
  { href: "#systems", label: "Demo", icon: "icon-gear" },
  { href: "#service", label: "Services", icon: "icon-service" },
  { href: "#tech", label: "Tech", icon: "icon-tech-stack" },
  { href: "#testimonial", label: "Testimonials", icon: "icon-tes", separator: "after" },
  { href: "#contact", label: "Contact", icon: "icon-send" },
];
