import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ContainerCode, ImageCN, Post } from "../components"
// import { H2CN } from "../style"

const PythonPost = ({ data }) => {
  // const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
  return (
    <ContainerCode>
      <ImageCN />
      <Post>
        <article>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </Post>
    </ContainerCode>
  )
}
export const pageQuery = graphql`
  query PythonSinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        post
        modulo
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
export default PythonPost
