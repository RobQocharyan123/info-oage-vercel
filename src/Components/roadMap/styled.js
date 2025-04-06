import { Col } from "antd";
import styled from "styled-components";

export const RoadMapGeneralBlock = styled(Col)`
  position: relative;
  z-index: 2;
`;

export const RoadMapContentBlock = styled(Col)`
  margin-top: 48px;
  padding: 0 250px;

  @media screen and (max-width: 1300px) {
    padding: 0 200px;
  }

  @media screen and (max-width: 1000px) {
    padding: 0 150px;
  }
`;

export const RoadMapBlock = styled(Col)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  .content {
    font-weight: 400;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
    width: 400px;
  }

  h2 {
    font-weight: 400;
    font-size: 40px;
    line-height: 45px;
    color: #fff;
    margin: 0;

    span {
      color: #64ffff;
    }
  }

  @media screen and (max-width: 1300px) {
    .content {
      width: 300px;
      font-size: 25px;
      line-height: 25px;
    }

    h2 {
      font-size: 25px;
      line-height: 25px;
    }
  }
`;

export const RoadMapSecondBlock = styled(Col)`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  position: relative;
  .content {
    width: 400px;
    font-weight: 400;
    font-size: 40px;
    line-height: 45px;
    color: #ffffff;
  }

  h2 {
    font-weight: 400;
    font-size: 40px;
    line-height: 45px;
    color: #fff;
    margin: 0;

    span {
      color: #64ffff;
    }
  }

  @media screen and (max-width: 1300px) {
    .content {
      width: 300px;
      font-size: 25px;
      line-height: 25px;
    }

    h2 {
      font-size: 25px;
      line-height: 25px;
    }
  }
`;

export const RoadMapListentingAndAirdropBlock = styled(Col)`
  width: 450px;
  height: 152px;
  float: right;
  background-color: rgba(217, 217, 217, 0.2);
  box-shadow: rgb(204, 219, 232) 3px 3px 2px -1px inset,
    rgba(255, 255, 255, 0.5) -3px -9px 1px -8px;
  padding: 10px;
  border-radius: 23px;
  background-clip: padding-box;
  opacity: 0.8;

  @media screen and (max-width: 1300px) {
    width: 300px;
  }
`;

export const RoadMapTypeTextHeaderBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  .orange {
    width: 10px;
    height: 10px;
    background-color: orange;
    border-radius: 50px;
  }

  .green {
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 50px;
  }

  .red {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50px;
  }
`;
