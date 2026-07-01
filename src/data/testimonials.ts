export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
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
];