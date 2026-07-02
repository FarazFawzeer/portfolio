"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);
        setSuccess(false);
        setError("");

        const form = e.currentTarget;

        const formData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Unable to send message.");
            }

            setSuccess(true);
            form.reset();
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="contact" className="section-contact flat-spacing">
            <div className="sect-tag text-caption fw-medium effectFade fadeUp no-div">
                <i className="icon icon-send" />
                Contact
            </div>

            <h4 className="s-title letter-space--2 split-text effect-blur-fade">
               Let's build something amazing together.
    <br className="d-none d-lg-block" />
    I'm available for full-time opportunities, freelance projects,
    <br className="d-none d-lg-block" />
    and custom software development.
            </h4>

           <div className="contact-options effectFade fadeUp no-div">

   

    <div className="mt-4">

        <p className="text-body-2">
            
            <a
                href={`mailto:${profile.email}`}
                className="link text-black-72"
            >
               -  {profile.email}
            </a>
        </p>

        <p className="text-body-2 mt-3">
            
            <a
                href="https://www.linkedin.com/in/faraz-fawzeer-768258237"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-black-72"
            >
               -  LinkedIn Profile
            </a>
        </p>

    </div>

</div>
        </div>
    );
}