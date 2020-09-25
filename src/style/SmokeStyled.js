import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { keyframes } from "styled-components"

export const SmokeWrapper = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: black;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    justify-content: center;
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
export const DivW = styled.div`
  display: grid;
  grid-template-areas: "smoke";
  grid-template-columns: auto;
  grid-template-rows: auto;
`
export const Video = styled.video`
  grid-area: smoke;
  flex-wrap: wrap;
  margin-top: 0;
  justify-content: center;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    width: 360px;
    padding-right: 0;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    width: 400px;
    padding-right: 0;
  }
  @media screen and (max-height: 425px) {
    height: 300px;
    padding-right: 0;
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

export const Div = styled.div`
  grid-area: smoke;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    height: 90%;
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
export const H2main = styled.h2`
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

export const DivImg = styled.div`
  height: 690px;
  width: 489px;
  z-index: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    height: 265px;
    width: 187px;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    height: 310px;
    width: 219px;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    height: 345px;
    width: 244px;
  }
  @media screen and (max-height: 425px) {
    height: 300px;
    width: 212px;
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    height: 510px;
    width: 361px;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    height: 590px;
    width: 418px;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
  }
`
// 590px 832px
export const StyleBGI = styled(BackgroundImage)`
  z-index: 0;
  height: 690px;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    height: 265px;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    height: 310px;
  }
  /* Fixed */
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    height: 345px;
  }
  @media screen and (max-height: 425px) {
    height: 280px;
  }
  /* ----- */
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    height: 510px;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    height: 590px;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
  }
`
const textIndex = keyframes`
    0% {
      opacity: 0;
      transform: rotate(60deg);
      filter: blur(15px);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
      filter: blur(0);
    }`

export const Span = styled.span`
  opacity: 0;
  display: inline-block;
  animation: ${textIndex} 1s linear forwards;

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
