import React from "react"
import Smoke from "../images/smoke.mp4"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

export const SmokeBg = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "black.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <SmokeWrapper>
      <DivW>
        <Div>
          <Video muted autoPlay loop>
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
        <DivImg>
          <StyleBGI
            className={className}
            fluid={data.indexImage.childImageSharp.fluid}
            alt=""
          ></StyleBGI>
        </DivImg>
      </DivW>
    </SmokeWrapper>
  )
}
export default SmokeBg

const SmokeWrapper = styled.div`
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: black;
  @media ${props => props.theme.breakpoints.tablet} {
    justify-content: flex-end;
    align-items: flex-start;
    height: 600px;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`
const DivW = styled.div`
  display: grid;
  grid-template-areas: "smoke";
  grid-template-columns: auto;
  grid-template-rows: auto;
  flex-wrap: wrap;
`
const Video = styled.video`
  z-index: 1000;
  grid-area: smoke;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 0;
  padding-right: 10rem;
  @media ${props => props.theme.breakpoints.fhd} {
    width: 1100px;
    padding-right: 1rem;
  }
  @media ${props => props.theme.breakpoints.notebook} {
    width: 830px;
    padding-right: 0;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    width: 650px;
    padding-right: 0;
  }
  @media ${props => props.theme.breakpoints.mobile} {
  }
`

const Div = styled.div`
  grid-area: smoke;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.mobile} {
  }
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
    @media ${props => props.theme.breakpoints.tablet} {
      height: 665px;
    }
  }
`
const H2main = styled.h2`
  flex-direction: column;
  position: absolute;
  top: 43%;
  grid-area: smoke;
  justify-items: center;
  align-items: center;
  width: 65%;
  z-index: 3;
  color: white;
  text-align: center;
  font-size: 7em;
  letter-spacing: 0.4em;
  @media ${props => props.theme.breakpoints.notebook} {
    font-size: 6em;
    letter-spacing: 0.325em;
    top: 45%;
    width: 75%;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    top: 230px;
    font-size: 5em;
    letter-spacing: 0.28em;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: 4em;
    letter-spacing: 0.2em;
  }
`

const DivImg = styled.div`
  flex-wrap: wrap;
  height: 673px;
  width: 477px;
  z-index: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  @media ${props => props.theme.breakpoints.notebook} {
    flex-direction: column;
    height: 410px;
    width: 324px;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    top: 310px;
    flex-direction: column;
    height: 348px;
    width: 275px;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`
const StyleBGI = styled(BackgroundImage)`
  flex-wrap: wrap;
  z-index: 0;
  height: 100%;
  z-index: 0;
  @media ${props => props.theme.breakpoints.notebook} {
    flex-direction: column;
    height: 410px;
    width: 324px;
  }
  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
    height: 348px;
    width: 275px;
  }
  @media ${props => props.theme.breakpoints.mobile} {
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
