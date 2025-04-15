import { InfoBlock, InfoGeneralBlock, InfoTextsBlocks } from "./styled";
import { ButtonPlayConsole } from "../../utils/styled";

const Info = () => {
  return (
    <InfoGeneralBlock>
      {/* here need when click button go to page  example google */}
      <ButtonPlayConsole>PLAY CONSOLE NOW </ButtonPlayConsole>

      <InfoTextsBlocks>
        <InfoBlock>Farming & Invest to boost your trading volume</InfoBlock>
        <InfoBlock>Play and earn points for each friend you invite</InfoBlock>
      </InfoTextsBlocks>
      <InfoTextsBlocks>
        <InfoBlock>Claim daily rewards & airdrops from top projects</InfoBlock>
        <InfoBlock>
          Join the decentralized ecosystem of the Console Protocol
        </InfoBlock>
      </InfoTextsBlocks>
    </InfoGeneralBlock>
  );
};

export default Info;
