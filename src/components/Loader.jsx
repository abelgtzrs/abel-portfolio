import React from 'react';
import styled from 'styled-components';



const Loader = () => {
  return (
    <StyledWrapper>
      <div className="mainWrap">
        <div className="wrapper">
          <div className="c1">
            <div className="c2">
              <div className="c3">
                <div className="rect1">
                  <div className="miniC" />
                  <div className="c4">
                    <div className="rect2"><div className="rect3" /></div>
                  </div>
                  <div className="c5" />
                  <div className="c6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* General Styles */
.mainWrap {
  display: flex;
  justify-content: center;
  align-items: center;
}


  .mainWrap div {
    transform-origin: center center;
  }

  .wrapper {
    position: relative;
  }

  .c1 {
    border-radius: 100%;
    height: 200px;
    width: 200px;
    border: 1px solid var(--accent-color);
    animation:
      rotFirst 30s linear infinite,
      fadeIn 2s forwards; /* Added fade-in animation */
    transform-style: preserve-3d; /* Enable 3D transforms */
  }

  .c1 .c2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg); /* 3D perspective */
    border-radius: 100%;
    height: 190px;
    width: 190px;
    border: 1px solid var(--accent-color);
    border-style: dashed;
  }

  .c1 .c2 .c3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(0deg) rotateY(0deg); /* 3D perspective */
    border: 1px solid var(--accent-color);
    height: 180px;
    width: 180px;
    border-radius: 100%;
  }

  .c1 .c2 .c3 .rect1 {
    border: 1px solid var(--accent-color);
    border-style: dotted;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 3D perspective */
    height: 120px;
    width: 120px;
  }

  .c1 .c2 .c3 .rect1 .miniC {
    text-align: center;
    height: 120px;
    width: 120px;
    position: relative;
  }

  .c1 .c2 .c3 .rect1 .miniC .box {
    height: 10px;
    width: 10px;
    border: 1px solid var(--accent-color);
    border-radius: 100%;
    margin: 4px;
  }

  .c1 .c2 .c3 .rect1 .miniC .miniC1 {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    width: 20px;
    border: 3px solid var(--accent-color);
    border-radius: 100%;
  }

  .c1 .c2 .c3 .rect1 .miniC .miniC2 {
    position: absolute;
    top: 50%;
    left: -50%; /* 3D perspective */
    height: 20px;
    width: 20px;
    border: 3px solid var(--accent-color);
    border-radius: 100%;
  }

  .c1 .c2 .c3 .rect1 .miniC .miniC3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 3D perspective */
    height: 20px;
    width: 20px;
    border: 3px solid var(--accent-color);
    border-radius: 100%;
  }

  .c1 .c2 .c3 .rect1 .miniC .miniC4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 3D perspective */
    height: 20px;
    width: 20px;
    border: 3px solid var(--accent-color);
    border-radius: 100%;
  }

  .c1 .c2 .c3 .rect1 .c4 {
    border: 1px solid var(--accent-color);
    height: 120px;
    width: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 3D perspective */
    border-radius: 100%;
    border-style: dotted;
  }

  .c1 .c2 .c3 .rect1 .c4 .rect2 {
    border: 1px solid var(--accent-color);
    height: 80px;
    width: 80px;
    margin: 20px auto 0px auto;
    animation: rotminiC 10s linear infinite;
  }

  .c1 .c2 .c3 .rect1 .c4 .rect3 {
    border: 1px solid var(--accent-color);
    height: 80px;
    width: 80px;
    transform: rotate(135deg);
    transform-origin: center center;
  }

  .c1 .c2 .c3 .rect1 .c5 {
    border: 1px solid var(--accent-color);
    height: 70px;
    width: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 3D perspective */
    border-radius: 100%;
  }

  .c1 .c2 .c3 .rect1 .c6 {
    border: 3px solid var(--accent-color);
    height: 50px;
    width: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 3D perspective */
    border-radius: 100%;
  }

  /* Hover State */
  .c1:hover,
  .c1 .c2:hover,
  .c1 .c2 .c3:hover {
    box-shadow: 0 0 30px var(--accent-color);
    cursor: pointer;
    transition:
      transform 0.5s ease-in-out,
      box-shadow 0.5s ease-in-out;
  }

  /* Keyframes */
  @keyframes rotFirst {
    0% {
      transform: rotate(-2000deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotminiC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(900deg);
    }
  }


  /* Fade-in animation for loading phase */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }`;

export default Loader;
