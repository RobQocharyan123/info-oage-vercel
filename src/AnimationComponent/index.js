import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  /* background: #1c1c1e;//this change if Avet said */
  position: relative;
  z-index: 99999;
`;

const LoaderContainer = styled.div`
  text-align: center;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-width: 100%;

  @media (max-width: 480px) {
    width: 90%;
    padding: 20px;
  }
`;

const LoaderTitle = styled.div`
  color: #333;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const foldCube = keyframes`
  0%, 10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`;

const CubeWrapper = styled.div`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  position: relative;
  transform: rotateZ(45deg);

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const Cube = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1) rotateZ(${(props) => props.rotate}deg);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #64ffff;
    animation: ${foldCube} 2.4s infinite linear both;
    transform-origin: 100% 100%;
    box-shadow: 0 0 10px rgba(100, 255, 255, 0.4);
    animation-delay: ${(props) => props.delay}s;
  }
`;

const AnimationComponent = () => {
  return (
    <Wrapper>
      <LoaderContainer>
        <LoaderTitle>Loading...</LoaderTitle>
        <CubeWrapper>
          <Cube rotate={0} delay={0} />
          <Cube rotate={90} delay={0.3} />
          <Cube rotate={270} delay={0.9} />
          <Cube rotate={180} delay={0.6} />
        </CubeWrapper>
      </LoaderContainer>
    </Wrapper>
  );
};

export default AnimationComponent;
