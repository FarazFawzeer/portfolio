"use client";

import { useRef, useState } from "react";
import { ImageSwitch } from "@/components/ImageSwitch";

type Props = {
    url: string;
    poster: { light: string; dark: string; width: number; height: number };
    video?: { src: string; durationLabel: string };
    alt: string;
};

/** Browser-window frame: shows the dashboard screenshot, plays the walkthrough on click. */
export function ShowcaseMedia({ url, poster, video, alt }: Props) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

    const play = () => {
        setPlaying(true);
        // Start on the next frame, once the <video> is mounted
        requestAnimationFrame(() => videoRef.current?.play().catch(() => {}));
    };

    return (
        <div className="showcase-window">
            <div className="window-bar">
                <span className="window-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                </span>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="window-url text-caption"
                >
                    <span className="live-dot" aria-hidden="true" />
                    {host}
                </a>
            </div>

            <div className="window-body">
                {playing && video ? (
                    <video
                        ref={videoRef}
                        src={video.src}
                        controls
                        // The recording's bottom 48px is the Windows taskbar; it's cropped
                        // away in CSS, so fullscreen/PiP (which would show it) are disabled.
                        controlsList="nofullscreen nodownload noremoteplayback"
                        disablePictureInPicture
                        autoPlay
                        playsInline
                        preload="auto"
                        width={poster.width}
                        height={poster.height}
                    />
                ) : (
                    <>
                        <ImageSwitch
                            light={poster.light}
                            dark={poster.dark}
                            width={poster.width}
                            height={poster.height}
                            alt={alt}
                        />
                        {video && (
                            <button type="button" className="window-play" onClick={play}>
                                <span className="play-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="18" height="18">
                                        <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span className="text-body-3 fw-medium">{video.durationLabel}</span>
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
