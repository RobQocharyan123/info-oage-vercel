import { styled } from "styled-components";

export const TypeTextGeneralBlock = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #fff;
  margin: 0;
  margin-top: 10px;

  @media screen and (max-width: 1300px) {
    .content {
      width: 300px;
      font-size: 20px;
      line-height: 20px;
    }

    h2 {
      font-size: 20px;
      line-height: 20px;
    }
  }
`;
