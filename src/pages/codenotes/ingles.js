import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { ContainerCode, ImageCN } from "../../components"
import { CodeNotesWrapper, Cursos, Ul, Li, H2CN } from "../../style"

const InglesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { curso: { regex: "/ingles/" } } }) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <ContainerCode>
      <ImageCN />
      <CodeNotesWrapper>
        <H2CN>Cursos</H2CN>
        <Ul>
          {data.allMdx.edges.map(edge => {
            return (
              <Li>
                <Link to={`/codenotes/ingles/${edge.node.frontmatter.slug}`}>
                  <h3>{edge.node.frontmatter.title}</h3>
                </Link>
              </Li>
            )
          })}
        </Ul>
      </CodeNotesWrapper>
    </ContainerCode>
  )
}
export default InglesPage
