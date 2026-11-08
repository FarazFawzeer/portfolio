"use client";

import { useEffect } from "react";
import { BodyBackground } from "./BodyBackground";
import { SettingColorMenu } from "./SettingColorMenu";
import { MobileMenu } from "./MobileMenu";
import { DesktopSidebar } from "./DesktopSidebar";
import { HeaderClock } from "./HeaderClock";
import { UserSidebar } from "./UserSidebar";
import { Preloader } from "./Preloader";
import { Intro } from "./sections/Intro";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Work } from "./sections/Work";
import { Showcase } from "./sections/Showcase";
import { Services } from "./sections/Services";
import { Tech } from "./sections/Tech";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { useIsakAnimations } from "@/hooks/useIsakAnimations";
import { useClock } from "@/hooks/useClock";
import { useHeadlineRotate } from "@/hooks/useHeadlineRotate";
import { useInfiniteSlide } from "@/hooks/useInfiniteSlide";
import { useBodyThemeClass } from "@/hooks/useBodyThemeClass";

export type HomeShellProps = {
    defaultMode?: "dark" | "light";
    showCloudBg?: boolean;
    showVideoBg?: boolean;
    videoSrc?: string;
    bodyClass?: string;
    variant?: "v1" | "v2" | "v3";
    preloaderDark?: boolean;
};

export function HomeShell({
    defaultMode = "dark",
    showCloudBg = true,
    showVideoBg = false,
    videoSrc,
    bodyClass = "counter-scroll",
    variant = "v1",
    preloaderDark,
}: HomeShellProps) {
    useBodyThemeClass({ defaultMode });

    useEffect(() => {
        const body = document.body;
        const classes = bodyClass.split(" ").filter(Boolean);

        classes.forEach((c) => body.classList.add(c));

        return () => {
            classes.forEach((c) => body.classList.remove(c));
        };
    }, [bodyClass]);

    useClock();
    useInfiniteSlide();
    useHeadlineRotate();
    useIsakAnimations();

    const headerOutsideMain = variant === "v2";
    const showMobileMenu = variant !== "v2";
    const sidebarPositionClass = variant === "v2" ? "pst-v2" : "pst-v1";
    const leftBarPositionClass = variant === "v2" ? "pst-v2" : "";

    const preloadIsDark = preloaderDark ?? defaultMode === "dark";

    return (
        <>
            <Preloader bgDark={preloadIsDark} />

            <BodyBackground
                showCloudItem={showCloudBg}
                showVideo={showVideoBg}
                videoSrc={videoSrc}
            />

            <SettingColorMenu leftBarClass={leftBarPositionClass} />

            {showMobileMenu && <MobileMenu />}

            {headerOutsideMain && <HeaderClock variant={variant} />}

            <DesktopSidebar positionClass={sidebarPositionClass} />

            <main id="wrapper">
                {!headerOutsideMain && <HeaderClock variant={variant} />}

                <UserSidebar variant={variant} />

                <div className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8 ms-auto">
                                <div className="wrap-container">
                                    <Intro />
                                    <About />
                                    <Education />
                                    <Work />
                                    <Showcase />
                                    <Services />
                                    <Tech />
                                    <Testimonials />
                                    <Contact />
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}