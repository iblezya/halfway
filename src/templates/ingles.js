import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ContainerCode, ImageCN, Post } from "../components"
// import { H2CN } from "../style"

const InglesPost = ({ data }) => {
  // const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
  return (
    <ContainerCode>
      <ImageCN />
      <Post>
        <h2>{data.mdx.frontmatter.title}</h2>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </ContainerCode>
  )
}
export const pageQuery = graphql`
  query IngSinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        modulo
        post
        slug
        title
        featureImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
export default InglesPost
