import { Col } from 'antd';
import styled from 'styled-components';

export const AnimationGeneralBlock = styled(Col)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: calc(100vh - 150px);
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
