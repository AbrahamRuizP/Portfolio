// SkillCard.tsx
import { motion } from "framer-motion";
import { skillIcons } from "../data/icons";

type Props = {
    category: string,
    items: string[]
}

export const SkillCard = ({ category, items }: Props) => {
    const reveal = {
        initial: { opacity: 0, y: 30, filter: "blur(4px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.9, ease: "easeOut" as const },
        viewport: { once: true }
    }

    const revealWrapper = {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true }
    }

    // SkillCard
    return (
        <div className="p-4 bg-black rounded shadow-sm h-100 text-center skill-card" style={{ border: "1px solid rgba(255, 255, 255, 0.3" }}>

            {/* Wrapper */}
            <motion.div className="w-100 h-100" {...revealWrapper}>

                {/* Title */}
                <motion.h5 className="fw-semibold mb-3" {...reveal}>
                    {category}
                </motion.h5>

                {/* Items by Title */}
                <div className="d-flex flex-wrap justify-content-center gap-2">
                    {items.map((item) => (
                        <span
                            key={item}
                            className={`badge rounded-pill bg-black px-3 py-2 d-flex align-items-center gap-2`}
                            style={{ fontSize: '1rem' }}
                        >
                            {skillIcons[item] && <span>{skillIcons[item]}</span>}
                            {item}
                        </span>
                    ))}
                </div>

            </motion.div>

        </div>
    );
}