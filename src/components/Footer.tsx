// Footer.tsx
import { skillIcons } from "../data/icons";
import { motion } from "framer-motion";

const Footer = () => (
    <footer id="footer" className="text-center py-6 text-sm bg-black border-t border-gray-800 text-light">
        <motion.p

            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 0.75, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="opacity-75"
        >
            © 2026 Abraham Orestes. All rights reserved.
        </motion.p>
        <div className="d-flex flex-row justify-content-center gap-4">
            <a href="https://github.com/AbrahamRuizP" target="_blank" rel="noopener noreferrer" className="px-1 py-1 d-flex text-decoration-none text-light justify-content-center align-items-center project-link gap-1">
                <span className="icon">{skillIcons["GitHub"]}</span>
            </a>
            <a
                href="https://linkedin.com/in/abraham-ruiz-pestana"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 py-1 d-flex text-decoration-none text-light justify-content-center project-link gap-1"
            >
                <span className="icon">{skillIcons["LinkedIn"]}</span>
            </a>
        </div>
    </footer>
)

export default Footer;