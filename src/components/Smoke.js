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
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: black;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
    justify-content: center;
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
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    width: 360px;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    width: 400px;
  }
  @media screen and (max-height: 425px) {
    height: 300px;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    width: 650px;
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    width: 850px;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    width: 1000px;
    padding-right: 1em;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
    width: 1200px;
    padding-right: 3em;
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
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
  }
`
const H2main = styled.h2`
  grid-area: smoke;
  z-index: 3;
  color: white;
  font-size: 10em;
  letter-spacing: 0.465em;
  text-align: center;
  padding-top: 20%;

  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    padding-top: 15%;
    font-size: 3.5em;
    letter-spacing: 0.18em;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    font-size: 4.5em;
    letter-spacing: 0.21em;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    font-size: 5.25em;
    letter-spacing: 0.23em;
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    font-size: 5.9em;
    letter-spacing: 0.27em;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    font-size: 6.5em;
    letter-spacing: 0.3em;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
    font-size: 8em;
    letter-spacing: 0.37em;
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
    font-size: 8.5em;
    letter-spacing: 0.4em;
  }
`

const DivImg = styled.div`
  flex-wrap: wrap;
  height: 690px;
  width: 489px;
  z-index: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    flex-direction: column;
    height: 265px;
    width: 187px;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    flex-direction: column;
    height: 310px;
    width: 219px;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    flex-direction: column;
    height: 345px;
    width: 244px;
  }
  @media screen and (max-height: 425px) {
    height: 300px;
    width: 212px;
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    flex-direction: column;
    height: 510px;
    width: 361px;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    flex-direction: column;
    height: 590px;
    width: 418px;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
  }
`
// 590px 832px
const StyleBGI = styled(BackgroundImage)`
  flex-wrap: wrap;
  z-index: 0;
  height: 100%;
  z-index: 0;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    height: 280px;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    height: 310px;
  }
  /* Fixed */
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    flex-direction: column;
    height: 345px;
  }
  @media screen and (max-height: 425px) {
    height: 300px;
  }
  /* ----- */
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    flex-direction: column;
    height: 510px;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    flex-direction: column;
    height: 590px;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
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
