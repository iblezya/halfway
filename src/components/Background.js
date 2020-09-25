import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const StyleBGI = styled(BackgroundImage)`
  height: 100%;
  grid-column: 1 / 15;
  grid-row: 1 / 5;
  z-index: 0;
  position: fixed;
  background-attachment: fixed;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1/9;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1/9;
  }
`

export const Bg = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "code.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2275, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyleBGI
      className={className}
      fluid={data.bg.childImageSharp.fluid}
      alt=""
    ></StyleBGI>
  )
}
