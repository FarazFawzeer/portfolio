"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
    children: React.ReactNode;
};

/**
 * Drives the CURRENT Lenis instance from GSAP's ticker and updates ScrollTrigger
 * on every Lenis scroll, so both share one clock. useLenis() re-runs when Lenis
 * re-creates its instance (e.g. React StrictMode's double mount in dev).
 */
function LenisGsapBridge() {
    const lenis = useLenis(() => ScrollTrigger.update());

    useEffect(() => {
        if (!lenis) return;
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        return () => gsap.ticker.remove(tick);
    }, [lenis]);

    return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                lerp: 0.1,
                smoothWheel: true,
                syncTouch: false,
                // Smoothly scroll in-page links (#work, #systems, ...) through Lenis
                anchors: true,
            }}
        >
            <LenisGsapBridge />
            {children}
        </ReactLenis>
    );
}
