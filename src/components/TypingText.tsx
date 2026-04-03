import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

const TypingText = ({ text, speed = 50 }: Props) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className="typing">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingText;