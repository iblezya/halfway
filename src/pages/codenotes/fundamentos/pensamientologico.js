import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { ContainerCode, ImageCN } from "../../../components"
import { CodeNotesWrapper, Ul, H2CN } from "../../../style"

const PensamientoLogicoPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { excerpt: { regex: "/Pensamiento Logico/" } } }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
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
              <li>
                <Link
                  to={`/codenotes/fundamentos/pensamientologico/${edge.node.frontmatter.slug}`}
                >
                  <h3>{edge.node.frontmatter.title}</h3>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </Ul>
      </CodeNotesWrapper>
    </ContainerCode>
  )
}
export default PensamientoLogicoPage
