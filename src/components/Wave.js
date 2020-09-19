import React from "react"
import styled from "styled-components"

const WaveWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 280px;

  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    height: 90px;
    background-image: linear-gradient(
      to top,
      #dad4ec 0%,
      #dad4ec 1%,
      #f3e7e9 100%
    );
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    height: 125px;
    background-image: linear-gradient(
      to top,
      #dad4ec 0%,
      #dad4ec 1%,
      #f3e7e9 100%
    );
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    height: 175px;
    background-image: linear-gradient(
      to top,
      #dad4ec 0%,
      #dad4ec 1%,
      #f3e7e9 100%
    );
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    height: 225px;
  }
`
const Path = styled.path`
  z-index: 0;
  opacity: 0.45;
  animation: animatePath 7s linear alternate-reverse infinite;
  @keyframes animatePath {
    0% {
      d: path(
        "M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      );
    }
    25% {
      d: path(
        "M0,72L80,45C160,28,320,10,480,40.3C640,70,800,130,960,140C1120,150,1250,115,1300,103L1440,72L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      );
    }
    50% {
      d: path(
        "M0,122L80,145C130,160,330,195,485,175C640,165,800,107,960,70.3C1120,30,1250,58,1300,75L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      );
    }
    75% {
      d: path(
        "M0,172L80,140C160,108,320,80,480,120.3C640,157,800,215,960,225C1120,240,1250,205,1300,199L1440,172L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      );
    }
    100% {
      d: path(
        "M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      );
    }
  }

  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 3s;
  }
  &:nth-child(4) {
    animation-delay: 5s;
  }
`
const PathPrimary = styled(Path)`
  opacity: 1;
  z-index: 1000;
  animation: none;
`

export const Wave = () => {
  return (
    <WaveWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 10 1400 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(0,0,0,1)" />
            <stop offset="70%" stop-color="rgba(0,0,0,0.7147233893557423)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0.45702030812324934)" />
          </linearGradient>
        </defs>
        <Path
          fill="#f7b801"
          fill-opacity="0.5"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></Path>
        <Path
          fill="#73a942"
          fill-opacity="0.5"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></Path>
        <Path
          fill="#fe5f55"
          fill-opacity="0.5"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></Path>
        <PathPrimary
          fill="url(#gradient)"
          d="M0,122L80,90C160,58,320,30,480,70.3C640,107,800,165,960,175C1120,190,1250,155,1300,149L1440,122L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></PathPrimary>
      </svg>
    </WaveWrapper>
  )
}
