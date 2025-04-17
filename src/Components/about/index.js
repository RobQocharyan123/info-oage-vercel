import { ButtonPlayConsole } from "../../utils/styled";
import { AboutBlock, AboutGeneralBlock, AboutTextsBlocks } from "./styled";

const About = () => {
  return (
    <AboutGeneralBlock>
      {/* here need when click button go to page  example google */}
      <ButtonPlayConsole>PLAY CONSOLE NOW </ButtonPlayConsole>

      <AboutTextsBlocks>
        <AboutBlock>Farming & Invest to boost your trading volume</AboutBlock>
        <AboutBlock>Play and earn points for each friend you invite</AboutBlock>
      </AboutTextsBlocks>
      <AboutTextsBlocks>
        <AboutBlock>
          Claim daily rewards & airdrops from top projects
        </AboutBlock>
        <AboutBlock>
          Join the decentralized ecosystem of the Console Protocol
        </AboutBlock>
      </AboutTextsBlocks>
    </AboutGeneralBlock>
  );
};

export default About;
