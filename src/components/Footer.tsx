// Footer.tsx
import { skillIcons } from "../data/icons";

const Footer = () => (
    <footer id="footer" className="text-center py-6 text-sm bg-black border-t border-gray-800 text-light">
        <p className="opacity-75">© 2026 Abraham Orestes. All rights reserved.</p>
        <div className="d-flex flex-row justify-content-center gap-4">
            <a href="https://github.com/AbrahamRuizP" target="_blank" rel="noopener noreferrer" className="px-1 py-1 d-flex text-decoration-none text-light justify-content-center align-items-center project-link gap-1">
                <span className="icon">{skillIcons["GitHub"]}</span>
            </a>
            <a href="https://linkedin.com/in/abrahamruizp" target="_blank" rel="noopener noreferrer" className="px-1 py-1 d-flex text-decoration-none text-light justify-content-center project-link gap-1">
                <span className="icon">{skillIcons["LinkedIn"]}</span>
            </a>
        </div>
    </footer>
)

export default Footer;