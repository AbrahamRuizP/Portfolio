// TitleTag.tsx

import { motion } from "framer-motion"

type Props = {
    title: string
}

export const TitleTag = ({ title }: Props) => {

    return (<motion.h2
        className="fw-bold mb-4 text-center"

        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
    >
        {title}
    </motion.h2>);

}