// import React from "react"
// import { graphql } from "gatsby"
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import { ContainerCode, ImageCN, Post } from "../components"
// import { H2CN } from "../style"

// export const jsQuery = graphql`
//   query JsPostQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       body
//       frontmatter {
//         date
//         slug
//         title
//         featureImage {
//           childImageSharp {
//             fluid(maxWidth: 1920, quality: 100) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const JavascriptPost = ({ data }) => {
//   const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
//   return (
//     <ContainerCode>
//       <ImageCN fixed={featureImage} />
//       <Post>
//         <H2CN margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H2CN>
//         <MDXRenderer>{data.mdx.body}</MDXRenderer>
//       </Post>
//     </ContainerCode>
//   )
// }

// export default JavascriptPost
