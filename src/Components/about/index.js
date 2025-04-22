import { ButtonPlayConsole } from "../../utils/styled";
import { AboutGeneralBlock, AboutTextsBlocks, ReadMoreSpan } from "./styled";
import { useState } from "react";
import { Typography } from "antd";
import { text } from "../../utils";

const { Paragraph } = Typography;

const About = () => {
  const handleRedirect = () => {
    window.location.href = "https://www.google.com";
  };

  const [expandedList, setExpandedList] = useState(
    Array(text.length).fill(false)
  );

  const toggleText = (index) => {
    setExpandedList((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <AboutGeneralBlock>
      <ButtonPlayConsole onClick={handleRedirect}>
        PLAY CONSOLE NOW
      </ButtonPlayConsole>

      <AboutTextsBlocks>
        {text.map((para, index) => {
          const isExpanded = expandedList[index];
          const shortText = para.slice(0, 70);

          return (
            <div key={index} className="paragraphGeneral">
              <Paragraph className="paragraph">
                {isExpanded || para.length <= 100 ? para : shortText + "..."}
                {para.length > 100 && (
                  <ReadMoreSpan
                    onClick={() => toggleText(index)}
                    className="more"
                  >
                    {isExpanded ? "Less" : "More"}
                  </ReadMoreSpan>
                )}
              </Paragraph>
            </div>
          );
        })}
      </AboutTextsBlocks>
    </AboutGeneralBlock>
  );
};

export default About;
