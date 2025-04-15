import { styled } from "styled-components";
import { Col, Drawer } from "antd";

export const BurgerGeneralBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 3;
  padding: 0 20px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
export const BurgerLogoBlock = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 400px) {
    img {
      width: 50px;
    }

    .burgerIcon {
      width: 30px;
    }
  }
`;
export const BurgerIconBlock = styled(Col)`
  img {
    cursor: pointer;
  }
`;

export const BurgerBlock = styled(Drawer)`
  background-color: #363636 !important;
  box-shadow: 0px 4px 4px 0px #00000040;

  .ant-drawer-close {
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: 1;
    color: white;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    margin-top: 50px;
    .burgerText {
      a {
        color: #ffffff !important;
        font-weight: 400;
        font-size: 16px;
        padding: 10px;
        border-radius: 18px;
        &:hover {
          color: #000000 !important;
          background-color: #64ffff;
          box-shadow: 3px 2px 0px rgba(100, 255, 255, 0.5);
        }
      }
    }
  }
`;

export const BurgerImgIconBlock = styled.img`
  width: 18px !important;
  height: 18px !important;
  margin-top: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;
