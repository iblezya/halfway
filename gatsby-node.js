exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    if (parent.internal.type === "File") {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const fundaTemplate = require.resolve("./src/templates/fundamentos.js")
  const javascriptTemplate = require.resolve("./src/templates/javascript.js")
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              date
              title
            }
            fields {
              sourceName
            }
            id
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(edge => {
    const id = edge.node.id
    if (edge.node.fields.sourceName === "funda") {
      createPage({
        component: fundaTemplate,
        path: `/codenotes/fundamentos/pensamientologico/${edge.node.frontmatter.slug}`,
        context: { id },
      })
    } else if (edge.node.fields.collection === "javascript")
      createPage({
        component: javascriptTemplate,
        path: `/codenotes/javascript/javascript/${edge.node.frontmatter.slug}`,
        context: { id },
      })
  })
}
