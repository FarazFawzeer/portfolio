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

            <form
                className="form-contact"
                id="contactform"
                onSubmit={handleSubmit}
                noValidate
            >
                {success && (
                    <div
                        className="flat-alert msg-success"
                        style={{ marginBottom: 20 }}
                    >
                        ✅ Thank you! Your message has been sent successfully.
                        I'll get back to you as soon as possible.
                    </div>
                )}

                {error && (
                    <div
                        className="flat-alert msg-error"
                        style={{ marginBottom: 20 }}
                    >
                         {error}
                    </div>
                )}

                <div className="form-content effectFade fadeUp no-div">

                    <fieldset className="field-ip">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name *"
                            required
                        />
                    </fieldset>

                    <fieldset className="field-ip">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            required
                        />
                    </fieldset>

                    <fieldset className="field-ip">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject *"
                            required
                        />
                    </fieldset>

                    <fieldset className="field-ip">
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Tell me about your project..."
                            required
                        />
                    </fieldset>

                </div>

                <div className="form-action effectFade fadeUp no-div">

                    <div className="send-wrap">
                        <button
                            type="submit"
                            className="tf-btn animate-btn animate-dark"
                            disabled={loading}
                        >
                            <span className="text-body-3">
                                {loading ? "Sending..." : "Send Message"}
                            </span>
                        </button>
                    </div>

                    <a
                        href={`mailto:${profile.email}`}
                        className="text-body-1 link letter-space--2 text-black-72"
                    >
                        {profile.email}
                    </a>

                </div>
            </form>
        </div>
    );
}