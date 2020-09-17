import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Present = () => {
  const data = useStaticQuery(graphql`
    query {
      Blez: file(relativePath: { eq: "blez.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <PresentWrapper>
      <Element1>
        <H2>Hello. I’m. Gerson Jean Pierre. I am from Lima, Perú.</H2>
        <P>
          And todoy starting the long road of the fullstack javascript
          developer.
        </P>
      </Element1>
      <Element2>
        <DivSvg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F1C21B"
              d="M39.9,-48.9C53.2,-36.4,66.4,-25.2,68.9,-12C71.3,1.2,63,16.4,54.3,31.2C45.6,46.1,36.5,60.7,22.4,69.2C8.3,77.6,-10.9,80,-23.4,72.1C-36,64.2,-42,46,-44.9,30.9C-47.7,15.7,-47.3,3.7,-45.8,-8.6C-44.3,-21,-41.7,-33.8,-33.9,-47.2C-26,-60.6,-13,-74.7,0.1,-74.9C13.3,-75.1,26.6,-61.3,39.9,-48.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </DivSvg>
        <DivImgBlez>
          <ImgBlez fluid={data.Blez.childImageSharp.fluid} alt="" />
        </DivImgBlez>
      </Element2>
    </PresentWrapper>
  )
}

const PresentWrapper = styled.div`
  scroll-snap-align: start;
  background-color: white;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    flex-direction: column;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    flex-direction: column;
  }
`

const Element1 = styled.div`
  height: 500px;
  width: 50%;
  background: #ddd;
  padding: 100px;
  position: relative;
  animation-name: example1;
  animation-duration: 2s;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    padding: 50px 10px;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    padding: 50px 25px;
    width: 100%;
  }
  @keyframes example1 {
    0% {
      right: 200px;
      top: 0px;
    }
    100% {
      right: 0px;
      top: 0px;
    }
  }
`
const Element2 = styled(Element1)`
  background: salmon;
  animation-name: example2;
  @keyframes example2 {
    0% {
      left: 200px;
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
  position: absolute;
  left: 4em;
  top: 4em;
  height: 350px;
  width: 350px;
`

const ImgBlez = styled(Img)`
  clip-path: ellipse();
`
const DivSvg = styled.div`
  z-index: 12;
  position: absolute;
  left: 2em;
  top: 2em;
  height: 300px;
  width: 300px;
`
