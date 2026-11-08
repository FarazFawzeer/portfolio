export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  /** Optional photo. Without one, the author's initials are shown instead. */
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "Faraz delivered our tourism platform professionally and on schedule. The system is reliable, easy to manage, and has greatly improved our daily operations.",
    authorName: "Atheek Zuhair",
    authorRole: "Founder, VacayGuider",
    image: "/assets/images/section/vacay-client.jpeg",
  },


  {
    text: "Quickly understood our business requirements and delivered a robust management system. Professional, responsive, and committed to delivering quality solutions.",
    authorName: "Shafan Moulana",
    authorRole: "Owner, Fonivo.lk",
    image: "/assets/images/section/fonivo-client.jpeg",
  },

  {
    // PLACEHOLDER: replace with Ammar's real feedback before (or soon after) going live,
    // and get his OK on the wording since it's published under his name.
    text: "Faraz built our online store exactly the way we sell: real photos, clear specs and a setup builder that sends orders straight to WhatsApp. Customers find what they need faster now.",
    authorName: "Ammar Sahier",
    authorRole: "Founder, Mazz Laptop Hub",
  },
];