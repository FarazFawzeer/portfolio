import { ShowcaseMedia } from "@/components/ShowcaseMedia";
import { profile } from "@/data/profile";
import { showcase, showcaseModules } from "@/data/showcase";

function demoLoginUrl() {
    const text = `Hi Faraz, I'd like a demo login for your ${showcase.demoName} management system.`;
    return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`;
}

function ActionButton({
    href,
    label,
    white = false,
}: {
    href: string;
    label: string;
    white?: boolean;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`tf-btn-action${white ? " style-white" : ""}`}
        >
            <span className="ic-wrap">
                <i className="icon icon-arrow-right-top" />
            </span>
            <span className="text text-body-3 letter-space--05 fw-medium">{label}</span>
            <span className="ic-wrap">
                <i className="icon icon-arrow-right-top" />
            </span>
        </a>
    );
}

export function Showcase() {
    return (
        <div id="systems" className="section-showcase flat-spacing">
            <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
                <i className="icon icon-gear" />
                {showcase.tagline}
            </div>

            <h4 className="s-title letter-space--2 text-black-72 effectFade fadeUp no-div">
                {showcase.headline}
            </h4>

            <p className="showcase-pitch text-black-56 effectFade fadeUp no-div">
                {showcase.pitch}
            </p>

            <div className="effectFade fadeUp no-div">
                <ShowcaseMedia
                    url={showcase.liveUrl}
                    poster={showcase.previewImage}
                    video={showcase.video}
                    alt={`${showcase.demoName} admin dashboard demo`}
                />
            </div>

            <div className="showcase-facts effectFade fadeUp no-div">
                {showcase.facts.map((f) => (
                    <span key={f} className="text-caption fw-medium text-black-56">
                        {f}
                    </span>
                ))}
            </div>

            <ul className="showcase-modules effectFade fadeUp no-div">
                {showcaseModules.map((m, i) => (
                    <li className="showcase-module" key={m.title}>
                        <span className="num text-caption text-black-50">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="title text-body-2 fw-medium text-black-72">
                            {m.title}
                        </span>
                        <span className="built text-caption text-black-50">{m.builtFor}</span>
                    </li>
                ))}
            </ul>

            <div className="showcase-actions effectFade fadeUp no-div">
                <ActionButton href={showcase.liveUrl} label="Open Live Demo" />
                <ActionButton href={demoLoginUrl()} label="Request Demo Login" white />

                {showcase.sampleSiteUrl && (
                    <a
                        href={showcase.sampleSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-text-link text-body-3 fw-medium text-black-72"
                    >
                        View sample website
                        <i className="icon icon-arrow-right-top" />
                    </a>
                )}

                {showcase.caseStudyUrl && (
                    <a
                        href={showcase.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-text-link text-body-3 fw-medium text-black-72"
                    >
                        Read case study
                        <i className="icon icon-arrow-right-top" />
                    </a>
                )}
            </div>

            <p className="showcase-note text-caption text-black-50">{showcase.note}</p>
        </div>
    );
}
