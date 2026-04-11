// Experience.tsx
import { motion } from "framer-motion";

export const Experience = () => (
    <section className="py-5 bg-black bg-dots text-light">
        <div className="container">

            {/* ROW */}
            <div className="d-flex flex-column align-items-center">

                {/* COLUMN */}
                <div className="col-md-8 offset-md-2 col-lg-6 max-auto mb-5">

                    <div className="experience-card py-4">

                        {/* WRAPPER */}
                        <motion.div className="w-100 h-100">

                            {/* COMPANY NAME */}
                            <div className="text-start fw-semibold small">
                                — "Abax"
                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>

        </div>
    </section>
);