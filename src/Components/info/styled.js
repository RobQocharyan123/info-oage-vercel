import { Col } from 'antd';
import styled from 'styled-components';

export const InfoGeneralBlock = styled(Col)`
  position: relative;
  z-index: 2;
`;

export const InfoTextsBlocks = styled(Col)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  padding: 0 50px;

  @media screen and (max-width: 1500px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 1100px) {
    padding: 0 50px;
  }
`;

export const InfoBlock = styled(Col)`
  width: 300px;
  font-weight: 400;
  font-size: 35px;
  line-height: 45px;
  color: #fff;

  @media screen and (max-width: 1100px) {
    width: 200px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }
`;
