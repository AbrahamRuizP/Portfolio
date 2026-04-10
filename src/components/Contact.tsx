// Contact.tsx

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { TitleTag } from "./TitleTag";

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

    // To messages showing time
    useEffect(() => {
        if (status === "success" || status === "error") {
            const timer = setTimeout(() => setStatus("idle"), 3000);
            return () => clearTimeout(timer);
        }

    }, [status]);

    const handleFormDataChanges = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let { name, value } = ev.target;
        const limit = limits[name];
        if (limit) value = truncateOver(value, limit);

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
            setSubmitting(false);
            return;
        }

        try {

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
    }

    return (
        <section id="contact" className="py-5 bg-black bg-dots text-light">
            <div className="container">
                <TitleTag title={"Contact Me"} />

                <div
                    className="row justify-content-center"
                >
                    <div className="col-md-8">

                        <form onSubmit={onSubmit} className="">
                            {/* Name Column */}
                            <motion.div
                                className="mb-3 text-start"

                                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="name" className="form-label">Name</label>
                                <input name="name" id="name" type="text" className="form-input" placeholder="Type your name here" value={formData.name} onChange={(ev) => handleFormDataChanges(ev)} />
                            </motion.div>

                            {/* Email Column */}
                            <motion.div
                                className="mb-3 text-start"

                                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="email" className="form-label">Email</label>
                                <input name="email" id="email" type="email" className="form-input" placeholder="name@example.com" required value={formData.email} onChange={ev => handleFormDataChanges(ev)} />
                            </motion.div>

                            {/* Message Column */}
                            <motion.div
                                className="mb-3 text-start"

                                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" id="message" className="form-input" rows={5} placeholder="Type your message here" required value={formData.message} onChange={ev => handleFormDataChanges(ev)}></textarea>

                            </motion.div>

                            <motion.div

                                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
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
                            </motion.div>

                        </form>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;