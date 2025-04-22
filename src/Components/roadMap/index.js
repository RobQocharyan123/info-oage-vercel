import { ButtonPlayConsole } from "../../utils/styled";
import Typewriter from "./typeText/index";
import {
  RoadMapBlock,
  RoadMapContentBlock,
  RoadMapGeneralBlock,
  RoadMapListentingAndAirdropBlock,
  RoadMapSecondBlock,
  RoadMapTypeTextHeaderBlock
} from "./styled";

const RoadMap = () => {
  return (
    <RoadMapGeneralBlock>
      <ButtonPlayConsole>PLAY CONSOLE NOW </ButtonPlayConsole>

      <RoadMapContentBlock>
        <div className="section">
          <RoadMapBlock>
            <h2>
              Q2 <span>2025</span>
            </h2>
            <div className="content">
              Application launch Creation of community Task for rewards
            </div>
          </RoadMapBlock>
          <RoadMapBlock>
            <h2>
              Q3 <span>2025</span>
            </h2>
            <div className="content">
              Application launch Creation of community Task for rewards
            </div>
          </RoadMapBlock>
        </div>
        <div className="section">
          <RoadMapBlock>
            <h2>
              Q4 <span>2025</span>
            </h2>
            <div className="content">
              Application launch Creation of community Task for rewards
            </div>
          </RoadMapBlock>

          <RoadMapListentingAndAirdropBlock>
            <RoadMapTypeTextHeaderBlock>
              <div className="red"></div>
              <div className="orange"></div>
              <div className="green"></div>
            </RoadMapTypeTextHeaderBlock>
            <Typewriter />
          </RoadMapListentingAndAirdropBlock>
        </div>
      </RoadMapContentBlock>
    </RoadMapGeneralBlock>
  );
};

export default RoadMap;
