import React from "react"
import Smoke from "../images/smoke.mp4"
import styled from "styled-components"

const SmokeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  @media ${props => props.theme.breakpoints.tablet} {
  }
  @media ${props => props.theme.breakpoints.mobile} {
  }
`

const Video = styled.video`
  z-index: 1;
  grid-area: smoke;
  height: 95vh;
  @media ${props => props.theme.breakpoints.mobile} {
    transform: rotate(-90deg);
    width: 600px;
    height: 350px;
  }
`

const DivW = styled.div`
  display: grid;
  grid-template-areas: "smoke";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
`

const Div = styled.div`
  grid-area: smoke;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(31, 255, 0, 1) 0%,
      rgba(31, 255, 0, 1) 15%,
      rgba(251, 252, 0, 1) 40%,
      rgba(251, 252, 0, 1) 51%,
      rgba(255, 0, 0, 1) 80%,
      rgba(255, 0, 0, 1) 100%
    );
    mix-blend-mode: color;
    pointer-events: none;
  }
`
const H2main = styled.h2`
  grid-area: smoke;
  justify-items: center;
  align-items: center;
  width: 100%;
  z-index: 2;
  color: white;
  text-align: center;
  font-size: 7em;
  letter-spacing: 0.4em;
  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 4em;
    letter-spacing: 0.2em;
  }
`

const Span = styled.span`
  opacity: 0;
  display: inline-block;
  animation: animate 1s linear forwards;
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(60deg);
      filter: blur(15px);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
      filter: blur(0);
    }
  }
  &:nth-child(1) {
    animation-delay: 1s;
  }
  &:nth-child(2) {
    animation-delay: 1.5s;
  }
  &:nth-child(3) {
    animation-delay: 2s;
  }
  &:nth-child(4) {
    animation-delay: 2.5s;
  }
  &:nth-child(5) {
    animation-delay: 3s;
  }
  &:nth-child(6) {
    animation-delay: 3.5s;
  }
  &:nth-child(7) {
    animation-delay: 4s;
  }
`

export const SmokeBg3 = () => {
  return (
    <SmokeWrapper>
      <DivW>
        <Div>
          <Video muted autoPlay>
            <source src={Smoke} type="video/mp4" />
          </Video>
        </Div>

        <H2main>
          <Span>H</Span>
          <Span>a</Span>
          <Span>l</Span>
          <Span>f</Span>
          <Span>w</Span>
          <Span>a</Span>
          <Span>y</Span>
        </H2main>
      </DivW>
    </SmokeWrapper>
  )
}
export default SmokeBg3
