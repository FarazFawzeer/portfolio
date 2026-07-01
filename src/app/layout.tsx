import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import "./globals.scss";

export const metadata: Metadata = {
    title: {
        default: "Faraz Fawzeer - Full Stack Developer",
        template: "%s - Faraz Fawzeer",
    },

    description:
        "Faraz Fawzeer is a Full Stack Developer specializing in Laravel, Next.js, Vue.js, React, WordPress, and enterprise web applications. Explore my portfolio, projects, and professional experience.",

    keywords: [
        "Faraz Fawzeer",
        "Full Stack Developer",
        "Software Engineer",
        "Laravel Developer",
        "Next.js Developer",
        "React Developer",
        "Vue.js Developer",
        "WordPress Developer",
        "PHP Developer",
        "Web Developer",
        "Portfolio",
        "Sri Lanka",
    ],

    authors: [
        {
            name: "Faraz Fawzeer",
        },
    ],

    creator: "Faraz Fawzeer",

    publisher: "Faraz Fawzeer",

    metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain

    openGraph: {
        title: "Faraz Fawzeer - Full Stack Developer",
        description:
            "Portfolio showcasing full stack development, Laravel applications, Next.js projects, enterprise systems, and modern web solutions.",
        url: "https://your-domain.com",
        siteName: "Faraz Fawzeer Portfolio",
        locale: "en_US",
        type: "website",

        images: [
            {
                url: "/assets/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Faraz Fawzeer Portfolio",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Faraz Fawzeer - Full Stack Developer",
        description:
            "Full Stack Developer specializing in Laravel, Next.js, Vue.js, React, WordPress, and scalable web applications.",
        images: ["/assets/images/og-image.jpg"],
    },

    icons: {
        icon: "/assets/images/logo/favicon.ico",
        shortcut: "/assets/images/logo/favicon.ico",
        apple: "/assets/images/logo/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <BootstrapClient />
                <SmoothScroll>
                    <ThemeProvider>{children}</ThemeProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}