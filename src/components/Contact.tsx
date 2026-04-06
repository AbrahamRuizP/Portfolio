// Contact.tsx

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {

    type FormData = {
        name: string;
        email: string;
        message: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });
    const limits: Record<string, number> = {
        name: 20,
        email: 50,
        message: 100
    }
    const [isSubmitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleFormDataChanges = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = ev.target;
        const limit = limits[name];
        if (limit) value = truncateOver(value, limits[name]);

        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    }

    const truncateOver = (word: string, position: number): string => {
        return word.slice(0, position);
    }

    const onSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault();

        setSubmitting(true);
        setStatus("idle");

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus("error");
            return;
        }

        try {

            await emailjs.send(
                "service_8r6ibh4",
                "template_k0yr46w",
                formData,
                "shqad3d0Bz27LKUZd"
            );

            // sending email
            setStatus("success");

            // clean form fields
            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            setStatus("error");
        } finally {
            setSubmitting(false);
        }

        useEffect(() => {
            if (status === "success" || status === "error") {
                const timer = setTimeout(() => setStatus("idle"), 3000);
                return () => clearTimeout(timer);
            }

        }, [status]);
    }

    return (
        <section id="contact" className="py-5 bg-black bg-dots text-light">
            <div className="container">
                <h2 className="fw-bold mb-4 text-center">Contact Me</h2>

                <div className="row justify-content-center">
                    <div className="col-md-8">

                        <form onSubmit={onSubmit} className="">
                            {/* Name Column */}
                            <div className="mb-3 text-start">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input name="name" id="name" type="text" className="form-input" placeholder="Type your name here" value={formData.name} onChange={(ev) => handleFormDataChanges(ev)} />
                            </div>

                            {/* Email Column */}
                            <div className="mb-3 text-start">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input name="email" id="email" type="email" className="form-input" placeholder="name@example.com" required value={formData.email} onChange={ev => handleFormDataChanges(ev)} />
                            </div>

                            {/* Message Column */}
                            <div className="mb-3 text-start">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" id="message" className="form-input" rows={5} placeholder="Type your message here" required value={formData.message} onChange={ev => handleFormDataChanges(ev)}></textarea>

                            </div>

                            <div className="">
                                <button type="submit" className="btn btn-light submit-btn" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Submit"}
                                </button>
                                {
                                    status === "success" && (
                                        <p aria-live="polite" className="status-message text-success mt-3 small">
                                            Message sent successfully.
                                        </p>
                                    )
                                }
                                {
                                    status === "error" && (
                                        <p aria-live="polite" className="status-message text-danger mt-3 small">
                                            Something went wrong. Try again.
                                        </p>
                                    )
                                }
                            </div>

                        </form>

                    </div>
                </div>



            </div>
        </section>
    );
}

export default Contact;