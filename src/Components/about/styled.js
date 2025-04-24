import { Col } from "antd";
import styled from "styled-components";

export const AboutGeneralBlock = styled(Col)`
  position: relative;
  z-index: 2;
`;

export const AboutTextsBlocks = styled(Col)`
  width: 70%;
  height: calc(100vh - 200px);

  margin: 0 auto;
  text-align: justify;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #64ffff;
    border-radius: 1.5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a0a1b1;
  }
  .paragraphGeneral {
    width: 95%;
    background-color: rgba(217, 217, 217, 0.2);
    box-shadow: rgb(204, 219, 232) 3px 3px 2px -1px inset,
      rgba(255, 255, 255, 0.5) -3px -9px 1px -8px;
    border-radius: 23px;
    background-clip: padding-box;
    opacity: 0.8;
    margin: 0 auto;
    padding: 10px;
    margin-top: 10px;
  }
  .paragraph {
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #fff;
  }
  @media screen and (max-width: 1400px) {
    .paragraph {
      font-size: 25px;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 840px) {
    .paragraph {
      font-size: 20px;
      line-height: 25px;
    }
  }

  @media screen and (max-width: 560px) {
    .paragraph {
      font-size: 15px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 370px) {
    .paragraph {
      font-size: 13px;
      line-height: 18px;
    }
  }
`;

export const AboutBlock = styled(Col)`
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

  @media screen and (max-width: 550px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const ReadMoreSpan = styled.span`
  color: #64ffff;
  cursor: pointer;
  font-weight: 500;
  float: right;
  &:hover {
    text-decoration: underline;
  }
`;
