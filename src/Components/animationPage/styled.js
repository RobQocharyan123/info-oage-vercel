import { Col } from "antd";
import styled from "styled-components";
import backgroundGif from "../../Assets/info/intro_pc.gif";

export const BackgroundBlock = styled(Col)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  background: url(${backgroundGif}) no-repeat center center fixed;
  background-size: cover;
  pointer-events: none;
`;

export const AnimationGeneralBlock = styled(Col)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 0 100px;

  @media screen and (max-width: 1100px) {
    padding: 0 50px;
  }
`;

export const AnimationLeftSectionBlock = styled(Col)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  img {
    width: 70px;
  }
`;

export const AnimationRightSectionBlock = styled(Col)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 150px;

  img {
    margin-top: 50px;
    width: 150px;
  }

  .consoleLogo {
    width: 90px;
    margin-top: 200px;
  }

  @media screen and (max-width: 1500px) {
    .consoleLogo {
      margin-left: 50px;
    }
  }
`;
