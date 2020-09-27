import React from "react"
import { FeatureImageWrapper, ImgCN } from "../style"
import { useStaticQuery, graphql } from "gatsby"

export const ImageCN = ({ fluid }) => {
  const data = useStaticQuery(graphql`
    query {
      codenotesImage: file(relativePath: { eq: "notes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <FeatureImageWrapper>
      <ImgCN
        fluid={fluid ? fluid : data.codenotesImage.childImageSharp.fluid}
        alt=""
      />
    </FeatureImageWrapper>
  )
}
