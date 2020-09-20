import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  SmokeWrapper,
  DivW,
  Div,
  Video,
  H2main,
  DivImg,
  StyleBGI,
  Span,
} from "../style"
import Smoke from "../images/smoke.mp4"

export const SmokeBg = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "black.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
