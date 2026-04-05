// Contact.tsx

import { useState } from "react";

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

    const handleFormDataChanges = (ev : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = ev.target;

        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    }

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault();

        console.log(formData);

        // clean form fields
        setFormData({
            name: "",
            email: "",
            message: ""
        });
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
                                <input name="name" id="name" type="text" className="form-input" placeholder="Abraham Orestes" value={formData.name} onChange={(ev) => handleFormDataChanges(ev)} />
                            </div>

                            {/* Email Column */}
                            <div className="mb-3 text-start">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input name="email" id="email" type="email" className="form-input" placeholder="name@example.com" required value = {formData.email} onChange={ev => handleFormDataChanges(ev)} />
                            </div>

                            {/* Message Column */}
                            <div className="mb-3 text-start">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" id="message" className="form-input" rows={5} placeholder="Type your message here" required value = {formData.message} onChange={ev => handleFormDataChanges(ev)}></textarea>

                            </div>

                            <div className="">
                                <button type="submit" className="btn btn-light submit-btn">
                                    Submit
                                </button>
                            </div>

                        </form>

                    </div>
                </div>



            </div>
        </section>
    );
}

export default Contact;