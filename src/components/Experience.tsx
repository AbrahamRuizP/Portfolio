// Experience.tsx
import { motion } from "framer-motion";
import { TitleTag } from "./TitleTag";

export const Experience = () => {
    const reveal = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" as const },
        viewport: { once: true }
    };

    return (
        <section className="py-5 bg-black bg-dots text-light">
            <div className="container">
                <TitleTag title="Experience" />

                {/* ROW */}
                <div className="d-flex flex-column align-items-center">

                    {/* COLUMN */}
                    <div className="col-md-10 offset-md-0 col-lg-6 mx-auto mb-5">

                        {/* CARD */}
                        <motion.div className="experience-card py-4 w-100" {...reveal}>

                            {/* COMPANY NAME */}
                            <div className="text-start fw-semibold fs-4">
                                Abax
                            </div>
                            <div className="text-start fs-6 opacity-75">
                                Java / FileMaker Developer
                            </div>
                            <div className="text-start small opacity-50 mb-2">
                                Jan 2023 — Jan 2026
                            </div>
                            <div>
                                <ul className="experience-list text-start fs-6 pt-3">
                                    <li>Developed business management applications using Java, Hilla, and FileMaker.</li>
                                    <li>Built and maintained solutions used by companies such as Ryptide Music and Alexander Valve.</li>
                                    <li>Improved operational efficiency by simplifying resource management workflows.</li>
                                    <li>Increased data reliability and consistency through robust system design and validation.</li>
                                </ul>
                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
};