"use client";

import Image from "next/image";
import { ImageSwitch } from "./ImageSwitch";
import { profile } from "@/data/profile";
import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

type UserSidebarProps = {
    variant?: "v1" | "v2" | "v3";
};

export function UserSidebar({ variant = "v1" }: UserSidebarProps) {
    const showMetaLeft = variant !== "v2";
    const dotIsInline = variant === "v2";
    const socialIcons = {
    github: <FaGithub />,
    linkedin: <FaLinkedinIn />,
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
};

    return (
        <div className="sidebar-user">
            <div className="wrap">
                {/* Avatar */}
                <div className="user-image">
                    <div className="image">
                        <Image
                            src="/assets/images/avatar/faraz.png"
                            alt={profile.fullName}
                            width={468}
                            height={856}
                            priority
                        />
                    </div>

                    {showMetaLeft && (
                        <div className="meta-left d-none d-sm-block">
                            <div className="bg-item-svg">
                                <ImageSwitch
                                    light="/assets/images/item/vector-user.svg"
                                    dark="/assets/images/item/vector-user_dark.svg"
                                    width={32}
                                    height={227}
                                />
                            </div>

                            <p className="avaiable-dot vertical text-body-3 text-black-72 fw-medium">
                                <span className="text-vertical">
                                    Available for Work
                                </span>
                                <span className="dot" />
                            </p>
                        </div>
                    )}
                </div>

                {/* Logo */}
                <div className="user-logo d-none d-lg-block">
                    <ImageSwitch
                        light="/assets/images/logo/faraz-logo.svg"
                        dark="/assets/images/logo/faraz-logo-dark.svg"
                        width={40}
                        height={40}
                    />
                </div>

                {/* Social Icons */}
                <ul className="tf-social-icon-2 user-social d-grid">
                    {profile.socials.map((social) => (
                        <li key={social.label}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                            >
{socialIcons[social.platform as keyof typeof socialIcons]}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* User Info */}
                <div className="user-info">
                    <p
                        className={
                            dotIsInline
                                ? "avaiable-dot text-body-3 text-white-72 fw-medium"
                                : "avaiable-dot text-body-3 fw-medium d-sm-none"
                        }
                    >
                        <span className="dot" />
                        <span>Available for Work</span>
                    </p>

                    <h5 className="greeting letter-space--2 text-white animationtext clip">
                        Hey, I'm{" "}
                        <span className="cd-words-wrapper">
                            {profile.rotatingNames.map((name, index) => (
                                <span
                                    key={name}
                                    className={`item-text ${
                                        index === 0
                                            ? "is-visible"
                                            : "is-hidden"
                                    }`}
                                >
                                    {name}
                                </span>
                            ))}
                        </span>
                    </h5>

                    <p className="introduce text-white-56 letter-space--05 text-body-3">
                        {profile.introBio}
                    </p>

                    <div className="br-line" />

                    <div className="action-group">

                        {/* Contact */}
                     <a
    href="https://wa.me/94771448278?text=Hi%20Faraz,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="tf-btn-action"
>
    <span className="ic-wrap">
        <i className="icon icon-arrow-right-top" />
    </span>

    <span className="text text-body-3 letter-space--05 fw-medium">
        Let's Talk
    </span>

    <span className="ic-wrap">
        <i className="icon icon-arrow-right-top" />
    </span>
</a>
                        {/* Download CV */}
                        <a
                            href="/assets/files/Faraz_Fawzeer_CV.pdf?v=2026-11"
                            download
                            className="action-down"
                        >
                            <i className="icon icon-download" />
                            <span className="text-body-3">
                                Download CV
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}