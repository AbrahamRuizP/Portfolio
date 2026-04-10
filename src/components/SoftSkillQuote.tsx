// SoftSkillQuote.tsx
import { motion } from "framer-motion";

type Props = {
    title: string,
    quote: string
}

export const SoftSkillQuote = ({ title, quote }: Props) => {
    const reveal = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: "easeOut" as const },
        viewport: { once: true }
    }

    // SoftSkillQuote
    return (
        <div className="soft-card rounded pr-3 py-4">

            {/* WRAPPER */}
            <motion.div className="w-100 h-100" {...reveal}>

                {/* QUOTE */}
                <div className="fs-4 px-4 pt-4 pb-2 quote">
                    {quote}
                </div>

                {/* TITLE */}
                <div className="mt-3 me-4 text-end fw-semibold small text-light">
                    — {title}
                </div>

            </motion.div>
        </div>
    );
}
