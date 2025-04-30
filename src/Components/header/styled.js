import { Col } from 'antd';
import styled from 'styled-components';

export const HeaderGeneralBlock = styled(Col)`
  width: 100%;
  max-width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  margin: 0 auto;
  background-color: #363636;
  border-radius: 15px;
  padding: 0 20px;
  position: sticky;
  top: 20px;
  z-index: 3;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    list-style: none;
    padding-left: 0;
    li {
      a {
        color: #ffffff !important;
        font-weight: 400;
        font-size: 16px;
        padding: 2px 10px;
        border-radius: 18px;
        &:hover {
          color: #000000 !important;
          background-color: #64ffff;
          box-shadow: 3px 2px 0px rgba(100, 255, 255, 0.5);
        }
      }

      .activeLink {
        color: #000000 !important;
        background-color: #64ffff;
        box-shadow: 3px 2px 0px rgba(100, 255, 255, 0.5);
      }
    }
  }

  img {
    width: 28px;
    height: 35px;
    margin-top: 5px;
  }

  @media screen and (max-width: 850px) {
    ul {
      li {
        a {
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 790px) {
    display: none;
  }
`;

export const HeaderSocialIconsBlock = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const HeaderImgIconBlock = styled.img`
  width: 18px !important;
  height: 18px !important;
  margin-top: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }
`;
