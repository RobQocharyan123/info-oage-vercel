import { Button } from "antd";
import styled from "styled-components";

export const ButtonPlayConsole = styled(Button)`
  width: 600px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #002229;
  margin: 0 auto;
  margin-top: 56px;
  border: 2px solid transparent;
  background-color: #002229;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  color: #f9f7f7;
  border-top-color: #46b3b3 !important;
  border-right-color: #46b3b3 !important;
  border-left-color: #46b3b3 !important;
  cursor: pointer;
  &:hover,
  &:not(:disabled):not(.ant-btn-disabled):hover {
    color: #f9f7f7;
    background-color: rgb(19, 67, 77);
    border-color: transparent;
  }

  @media screen and (max-width: 1100px) {
    width: 300px;
    height: 40px;
    font-size: 20px;
    line-height: 26px;
  }

  @media screen and (max-width: 769px) {
    margin-top: 0px;
  }

  @media screen and (max-width: 400px) {
    width: 250px;
    height: 30px;
    font-size: 15px;
    line-height: 20px;
    margin-top: 20px;
  }
`;
