import { works } from "@/data/works";
import Image from "next/image";

export function Work() {
    return (
        <div id="work" className="section-work flat-spacing">
            <div className="sect-tag text-caption fw-medium">
                <i className="icon icon-high-light" />
      Featured Projects
            </div>

            <div className="work-list element-sticky">
                {works.map((w, i) => (
                    <div className="sticky-item" key={w.title}>
                        <div className="wg-work">

                            {/* Main image */}
                            <div className="work-image">
                                <Image
                                    width={700}
                                    height={427}
                                    src={w.image}
                                    alt={w.title}
                                />
                            </div>

                            <div className="wrap">
                                <div className="work-content">

                                    {/* Side image */}
                                    <div className="w-image">
                                        <Image
                                            width={468}
                                            height={856}
                                            src={w.image}
                                            alt={w.title}
                                        />
                                    </div>

                                    <div className="content">
                                        <div className="content-top">

                                            {/* Logo */}
                                            <div className="w-logo">
                                                <img
                                                    loading="lazy"
                                                    width={40}
                                                    height={40}
                                                    src={w.logo}
                                                    alt="logo"
                                                />
                                            </div>

                                            {/* Title */}
                                            <h4 className="w-title letter-space--2 text-white-72">
                                                {w.title}
                                            </h4>

                                            {/* Description */}
                                            <p className="w-desc text-white-56 text-body-3">
                                                {w.description}
                                            </p>

                                            {/* Year & Role */}
                                            <div className="w-highlight">
                                                <div className="box-high">
                                                    <p className="text-body-3 text-white-56">
                                                        Year
                                                    </p>
                                                    <p className="text-body-1 text-white-72">
                                                        {w.year}
                                                    </p>
                                                </div>

                                                <div className="box-high">
                                                    <p className="text-body-3 text-white-56">
                                                        Role
                                                    </p>
                                                    <p className="text-body-1 text-white-72">
                                                        {w.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Tags */}
                                            <div className="w-tag-list">
                                                {w.tags.map((tag) => (
                                                    <div className="tag" key={tag}>
                                                        <span className="text-body-3 fw-medium text-white-72">
                                                            {tag}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom section */}
                                        <div className="content-bottom">
                                            <div className="br-line" />

                                            {/* Project links */}
                                            {(w.liveUrl || w.githubUrl) && (
                                                <div className="project-links">
                                                    {w.liveUrl && (
                                                        <a
                                                            href={w.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="project-link"
                                                        >
                                                            Live Demo
                                                        </a>
                                                    )}

                                                    {w.githubUrl && (
                                                        <a
                                                            href={w.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="project-link"
                                                        >
                                                            GitHub
                                                        </a>
                                                    )}
                                                </div>
                                            )}

                                            <div className="group-action">

                                                {/* Keep your CTA (optional) */}
                                                <a
                                                     href="https://wa.me/94771448278"
    target="_blank"
    rel="noopener noreferrer"
    className="tf-btn-action style-white"
                                                >
                                                    <span className="ic-wrap">
                                                        <i className="icon icon-arrow-right-top" />
                                                    </span>
                                                    <span className="text text-body-3 letter-space--05 fw-medium">
                                              Chat on WhatsApp
                                                    </span>
                                                    <span className="ic-wrap">
                                                        <i className="icon icon-arrow-right-top" />
                                                    </span>
                                                </a>

                                                {/* Counter */}
                                                <p className="text-white-40">
                                                    <span className="text-white-72">
                                                        {String(i + 1).padStart(2, "0")}
                                                    </span>{" "}
                                                    /{" "}
                                                    {String(works.length).padStart(2, "0")}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}