// Rotate.tsx

import { useEffect, useState } from "react";
import { rotatingPhrases } from "../data/rotatingPhrases";
import { motion } from "framer-motion";

type Props = {
    speed?: number
}

const Rotate = ({speed = 2000} : Props) => {
    const [index, setIndex] = useState(0);
    const [isFading, setFading] = useState(false);
    const fadeDuration = 500;

    useEffect(() => {
        const mainTimeout = setTimeout(() => {
            // 1. Fade OUT
            setFading(true);

            // 2. Wait until the fade is done
            const fadeTimeout = setTimeout(() => {
                // 3. Updating index
                setIndex((prev) => (prev + 1) % rotatingPhrases.length);

                // 4. Fade IN
                setFading(false);

                return () => clearTimeout(fadeTimeout);
            }, fadeDuration);

            return () => clearTimeout(mainTimeout);
        }, speed);

    }, [index, speed]);

    return (
        <motion.p
          className={`transition-opacity ${isFading ? "opacity-0" : "opacity-100"} lead`}
          style={{ transition: `opacity ${fadeDuration}ms ease` }}

          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
        >
          {rotatingPhrases[index]}
        </motion.p>
      );
}

export default Rotate;