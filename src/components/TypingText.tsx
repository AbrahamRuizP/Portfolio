import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  highlight: string;
};

const TypingText = ({ text, speed = 50, highlight }: Props) => {
  const wholeText : string = text + highlight;
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const showingHighlight = displayedText.length > text.length;
  const normalPart = displayedText.slice(0, text.length);
  const highlightPart = displayedText.slice(text.length);

  useEffect(() => {
    if (index < wholeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + wholeText[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, wholeText, speed]);

  return (
    <span className="typing">
    {normalPart}
    {showingHighlight && (
      <span className="text-primary">
      {highlightPart}
    </span>
    )}
    <span className="cursor">|</span> 
    </span>
  );
};

export default TypingText;