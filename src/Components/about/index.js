import { ButtonPlayConsole } from "../../utils/styled";
import { AboutGeneralBlock, AboutTextsBlocks, ReadMoreSpan } from "./styled";
import { useState } from "react";
import { Typography, Button } from "antd";
import { text } from "../../utils";

const { Paragraph } = Typography;

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleRedirect = () => {
    // Redirect to Google
    window.location.href = "https://www.google.com";
  };

  const toggleText = () => {
    setExpanded((prev) => !prev);
  };

  const paragraphs = text
    .trim()
    .split(/\n\s*\n/)
    .map((para, index) => (
      <Paragraph key={index} className="paragraph">
        {para}
      </Paragraph>
    ));
  return (
    <AboutGeneralBlock>
      {/* Button to redirect to another page */}
      <ButtonPlayConsole onClick={handleRedirect}>
        PLAY CONSOLE NOW
      </ButtonPlayConsole>

      <AboutTextsBlocks>
        {/* Read More / Less logic */}
        <div className="paragraph">
          {expanded ? paragraphs : paragraphs.slice(0, 1)}
          <ReadMoreSpan onClick={toggleText} className="more">
            {expanded ? "Less" : "More"}
          </ReadMoreSpan>
        </div>
      </AboutTextsBlocks>
    </AboutGeneralBlock>
  );
};

export default About;
