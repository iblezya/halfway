import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ContainerCode, ImageCN, Post } from "../components"
// import { H2CN } from "../style"

const SenatiPost = ({ data }) => {
  // const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
  return (
    <ContainerCode>
      <ImageCN />
      <Post>
        <article>
          <h1>{data.mdx.frontmatter.title}</h1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </Post>
    </ContainerCode>
  )
}
export const pageQuery = graphql`
  query SenaSinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        post
        modulo
        slug
        title
        ruta
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
export default SenatiPost
