import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { ContainerCode, ImageCN } from "../../../components"
import { CodeNotesWrapper, Cursos, Ul, Li4, H2CN } from "../../../style"

const EstrategiasPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { modulo: { regex: "/estrategias/" } } }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              modulo
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
        <H2CN>Básico</H2CN>
        <Ul>
          {data.allMdx.edges.map(edge => {
            return (
              <Li4>
                <Link
                  to={`/codenotes/ingles/estrategia/${edge.node.frontmatter.slug}`}
                >
                  <h3>{edge.node.frontmatter.title}</h3>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </Li4>
            )
          })}
        </Ul>
      </CodeNotesWrapper>
    </ContainerCode>
  )
}
export default EstrategiasPage
