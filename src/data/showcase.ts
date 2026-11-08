/**
 * Flagship admin-system demo: FaraX.
 *
 * One neutral-branded demo (built from my most complete client system) stands in
 * for all the custom management systems, since they share the same structure.
 * Never put a client's real name, logo or data here.
 *
 * Optional links: each button only appears once its URL is filled in.
 * Demo logins are NOT published here on purpose; visitors request them on WhatsApp.
 */
export const showcase = {
    demoName: "FaraX",
    tagline: "Custom Management Systems",

    headline: "FaraX: one platform, eight roles, every module I've built.",

    pitch:
        "Every business runs differently. I build admin systems around your workflow, with the modules you need, your roles and permissions, and reports that answer your real questions. FaraX brings them together in one live demo.",

    note: "FaraX is a working demo with fictional data. It resets every night. Each client system is built to order.",

    // Live demo (login screen) and the public sample website (no login)
    liveUrl: "https://demo.farazfawzeer.com",
    sampleSiteUrl: "https://demo.farazfawzeer.com/site",

    // Walkthrough video, played inline over the dashboard screenshot.
    // Loaded only when the visitor presses play (preload="none").
    video: {
        src: "/assets/videos/farax-walkthrough.mp4",
        durationLabel: "2 min walkthrough",
    },

    // Quick facts shown above the module list
    facts: ["8 roles", "6 modules", "Resets nightly"],

    // Case study page or document link
    caseStudyUrl: "",

    // Dashboard screenshots, switched automatically with the site theme
    previewImage: {
        light: "/assets/images/section/farax-dashboard-light.jpg",
        dark: "/assets/images/section/farax-dashboard-dark.jpg",
        width: 1279,
        height: 634,
    },
};

/** Modules already delivered across client projects, all included in the FaraX demo. */
export const showcaseModules: { title: string; builtFor: string }[] = [
    { title: "Maintenance & field technicians", builtFor: "Elevator service company" },
    { title: "Bookings & tours", builtFor: "VacayGuider" },
    { title: "Inventory & suppliers", builtFor: "Fonivo · Mazz" },
    { title: "Installments & credit", builtFor: "Fonivo" },
    { title: "Courses & students", builtFor: "DigiHub" },
    { title: "Website CMS", builtFor: "UPSWEP" },
];
