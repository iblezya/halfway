import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ContainerCode, ImageCN, Post } from "../components"
import { H2CN } from "../style"

const FundamentosPost = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
  return (
    <ContainerCode>
      <ImageCN fluid={featureImage} />
      <Post>
        <H2CN margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H2CN>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </ContainerCode>
  )
}
export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
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
export default FundamentosPost

// export const fundaQuery = graphql`
//   query FundaPostQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       body
//       frontmatter {
//         date
//         slug
//         title
//         featureImage {
//           childImageSharp {
//             fluid(maxWidth: 1920, quality: 100) {
//               srcWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `
