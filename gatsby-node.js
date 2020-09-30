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
  const inglesTemplate = require.resolve("./src/templates/ingles.js")
  const senatiTemplate = require.resolve(`./src/templates/senati.js`)
  const { data } = await graphql(`
    query {
      allMdx(filter: { frontmatter: { post: { regex: "/post/" } } }) {
        edges {
          node {
            frontmatter {
              slug
              date
              title
              modulo
              post
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
    } else if (edge.node.fields.sourceName === "ingles") {
      createPage({
        component: inglesTemplate,
        path: `/codenotes/ingles/${edge.node.frontmatter.modulo}/${edge.node.frontmatter.slug}`,
        context: { id },
      })
    } else if (edge.node.fields.sourceName === "senati") {
      createPage({
        component: senatiTemplate,
        path: `/codenotes/senati/${edge.node.frontmatter.modulo}/${edge.node.frontmatter.slug}`,
        context: { id },
      })
    }
  })
}
