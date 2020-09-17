import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Present = () => {
  const data = useStaticQuery(graphql`
    query {
      blez: file(relativePath: { eq: "blez.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <PresentWrapper id="about">
      <Element1>
        <DivImgLogo>
          <Img fluid={data.logo.childImageSharp.fluid} alt="" />
        </DivImgLogo>
      </Element1>
      <Element2>
        <H2>Hello. I’m. Gerson Jean Pierre. I am from Lima, Perú.</H2>
      </Element2>
      <Element3>
        <P>
          Comenzando esta travesía como desarrollador, voy empezando con
          GatsbyJS y conocimientos en HTML5, CSS y un poco de Javascript. La
          meta del 2020 es aprender con buenas prácticas las siguientes
          tecnologías: JS, git/github,Py, Java y BD.
        </P>
      </Element3>
      <Element4>
        <DivImgBlez>
          <ImgBlez fluid={data.blez.childImageSharp.fluid} alt="" />
        </DivImgBlez>
      </Element4>
    </PresentWrapper>
  )
}

const PresentWrapper = styled.div`
  background-color: white;
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

const Element1 = styled.div`
  align-self: auto;
  height: auto;
  width: 900px;
  background: none;
  padding: 100px;
  position: relative;
  animation-name: example1;
  animation-duration: 8s;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    padding: 0;
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    padding: 0;
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    padding: 0;
    width: 100%;
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
      right: 3000px;
      top: 0px;
    }
    100% {
      right: 0px;
      top: 0px;
    }
  }
`
const Element2 = styled(Element1)`
  animation-duration: 6s;
  background: none;
  animation-name: example2;
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
const Element3 = styled(Element1)`
  animation-duration: 11.5s;
  background: none;
  animation-name: example3;
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
const Element4 = styled(Element1)`
  animation-duration: 14s;
  align-content: center;
  background: none;
  animation-name: example4;
  @keyframes example4 {
    0% {
      left: 3000px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`
const H2 = styled.h2`
  font-size: 3em;
  text-align: left;
`
const P = styled.p`
  color: ${props => props.theme.colors.dark2};
  padding-top: 10px;
  font-size: 1.5em;
`
const DivImgBlez = styled.div`
  width: 750px;
  border-radius: 50%;
  -webkit-box-shadow: 10px 10px 35px -4px rgba(38, 43, 51, 1);
  -moz-box-shadow: 10px 10px 35px -4px rgba(38, 43, 51, 1);
  box-shadow: 10px 10px 35px -4px rgba(38, 43, 51, 1);
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    width: 768px;
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
const ImgBlez = styled(Img)`
  width: 100%;
  clip-path: circle();
`
const DivImgLogo = styled.div`
  width: 800px;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.tabletPortrait} {
    width: 768px;
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

// const DivSvg = styled.div`
//   z-index: 12;
//   position: absolute;
//   left: 2em;
//   top: 2em;
//   height: 300px;
//   width: 300px;
// `
