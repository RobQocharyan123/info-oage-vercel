import React, { useEffect, useState } from "react";
import { TypeTextGeneralBlock } from "./styled";

const messages = [
  "Application launch,Creation of community",
  "Creation of community",
  "Task for rewards"
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    const timeout = setTimeout(() => {
      if (charIndex < currentMessage.length) {
        setText((prev) => prev + currentMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 2000); // pause after full message
      }
    }, 100); // typing speed

    return () => clearTimeout(timeout);
  }, [charIndex, messageIndex]);

  return <TypeTextGeneralBlock>{text}</TypeTextGeneralBlock>;
};

export default Typewriter;
