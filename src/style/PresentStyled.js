import styled from "styled-components"
import Img from "gatsby-image"

export const PresentWrapper = styled.div`
  background: linear-gradient(to top, #dfe9f3 0%, white 100%);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    flex-direction: column;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    flex-direction: column;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    flex-direction: column;
  }
`

export const Element1 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  position: relative;
  width: 50%;
  z-index: 6;
  animation-name: example1;
  animation-duration: 3s;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    width: 100%;
    animation-duration: 1.5s;
    box-shadow: 0px 4px 8px 1.5px rgba(0, 0, 0, 0.97);
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    width: 100%;
    animation-duration: 1.5s;
    box-shadow: 0px 4px 8px 1.5px rgba(0, 0, 0, 0.97);
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    width: 100%;
    animation-duration: 1.5s;
    justify-content: center;
    background: black;
    box-shadow: 0px 4px 8px 1.5px rgba(0, 0, 0, 0.97);
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    width: 500px;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    width: 660px;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
    width: 790px;
  }
  @media ${props => props.theme.breakpoints.desktopMid} {
  }
  @keyframes example1 {
    0% {
      right: 1500px;
      top: 0px;
    }
    100% {
      right: 0px;
      top: 0px;
    }
  }
`
export const Element2 = styled(Element1)`
  animation-duration: 3.5s;
  padding-left: 2em;
  z-index: 5;
  animation-name: example2;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    padding: 4em 1em;
    background: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
    animation-duration: 2s;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    padding: 5em 1.25em;
    background: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
    animation-duration: 2s;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    padding: 6em 1.5em;
    background: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
    animation-duration: 2s;
  }
  @keyframes example2 {
    0% {
      left: 1000px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`
export const Element3 = styled(Element1)`
  z-index: 4;
  animation-duration: 4s;
  background: none;
  padding-right: 2em;
  animation-name: example3;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    padding: 4em 1.25em;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    animation-duration: 2s;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    padding: 4.5em 2.25em;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    animation-duration: 2s;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    padding: 5em 3em;
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    animation-duration: 2s;
  }
  @keyframes example3 {
    0% {
      right: 1000px;
      top: 0px;
    }
    100% {
      right: 0px;
      top: 0px;
    }
  }
`
export const Element4 = styled(Element1)`
  z-index: 3;
  justify-content: start;
  animation-duration: 4s;
  align-content: center;
  background: none;
  animation-name: example4;
  padding: 2em 0;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    justify-content: center;
    background: linear-gradient(to top, #dfe9f3 0%, white 100%);
    animation-duration: 2s;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    justify-content: center;
    background: linear-gradient(to top, #dfe9f3 0%, white 100%);
    animation-duration: 2s;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    justify-content: center;
    background: linear-gradient(to top, #dfe9f3 0%, white 100%);
    animation-duration: 2s;
  }
  @keyframes example4 {
    0% {
      left: 680px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`
export const H2present = styled.h2`
  font-size: 3em;
  text-align: left;
`
export const Apresent = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.main1};
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    color: white;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    color: white;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    padding-left: 0;
    color: white;
  }
`
export const Ppresent = styled.p`
  color: ${props => props.theme.colors.main1};
  font-size: 1.5em;
  line-height: 1.25em;
  padding-left: 20%;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    font-size: 1.25em;
    line-height: 1.35em;
    padding-left: 0;
    color: #f3f3eb;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    padding-left: 0;
    color: #f3f3eb;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    padding-left: 0;
    color: #f3f3eb;
  }
`
export const DivImgBlez = styled.div`
  width: 400px;
  border-radius: 50%;
  -webkit-box-shadow: 10px 10px 35px -4px rgba(38, 43, 51, 1);
  -moz-box-shadow: 10px 10px 35px -4px rgba(38, 43, 51, 1);
  box-shadow: 10px 10px 35px -4px rgba(38, 43, 51, 1);
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    width: 300px;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    width: 350px;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    width: 400px;
  }
`
export const ImgBlez = styled(Img)`
  width: 100%;
  clip-path: circle();
`
export const DivImgLogo = styled.div`
  width: 550px;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    width: 600px;
  }
  @media ${props => props.theme.breakpoints.tabletLandscape} {
    width: 450px;
  }
  @media ${props => props.theme.breakpoints.desktopLow} {
    width: 600px;
  }
  @media ${props => props.theme.breakpoints.desktopMidLow} {
    width: 700px;
  }
`

export const ImgLogo = styled(Img)`
  width: 100%;
`
