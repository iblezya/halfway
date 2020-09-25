// module.exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//     createNodeField({
//       name: `collection`,
//       node,
//       value: getNode(node.parent).sourceInstanceName,
//     })
//   }
// }

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve("./src/templates/blog.js")
//   const javaTemplate = path.resolve("./src/templates/java.js")
//   const javaTemplate = path.resolve("./src/templates/java.js")
//   const javaTemplate = path.resolve("./src/templates/java.js")
//   const javaTemplate = path.resolve("./src/templates/java.js")
//   const res = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//               collection
//             }
//           }
//         }
//       }
//     }
//   `)

//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     if (edge.node.fields.collection === "blog") {
//       createPage({
//         component: blogTemplate,
//         path: `/blog/${edge.node.fields.slug}`,
//         context: {
//           slug: edge.node.fields.slug,
//         },
//       })
//     } else if (edge.node.fields.collection === "java")
//       createPage({
//         component: javaTemplate,
//         path: `/java/${edge.node.fields.slug}`,
//         context: {
//           slug: edge.node.fields.slug,
//         },
//       })
//   })
// }
