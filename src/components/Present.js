import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  PresentWrapper,
  Element1,
  Element2,
  Element3,
  Element4,
  DivImgLogo,
  ImgLogo,
  H2present,
  Ppresent,
  DivImgBlez,
  ImgBlez,
  Apresent,
} from "../style"

export const Present = () => {
  const data = useStaticQuery(graphql`
    query {
      blez: file(relativePath: { eq: "blez.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <PresentWrapper id="about">
      <Element1>
        <DivImgLogo>
          <ImgLogo fluid={data.logo.childImageSharp.fluid} alt="" />
        </DivImgLogo>
      </Element1>
      <Element2>
        <H2present>
          Hello. I’m. Gerson Jean Pierre. I am from Lima, Perú.
        </H2present>
      </Element2>
      <Element3>
        <Ppresent>
          Comenzando esta travesía como desarrollador, voy empezando con
          GatsbyJS y conocimientos en HTML5, CSS (Styled components) y un poco
          de Javascript. La meta del 2020 es aprender con buenas prácticas las
          siguientes tecnologías: JS, git/github, Python, Java y BD.
          <br />
          <br />
          Este <strong>Sitio Web </strong> está realizado con la tecnología{" "}
          <Apresent href="https://jamstack.org/" target="_blank">
            Jamstack
          </Apresent>
          (
          <Apresent href="https://www.gatsbyjs.com/" target="_blank">
            GatsbyJS
          </Apresent>
          ).
        </Ppresent>
      </Element3>
      <Element4>
        <DivImgBlez>
          <ImgBlez fluid={data.blez.childImageSharp.fluid} alt="" />
        </DivImgBlez>
      </Element4>
    </PresentWrapper>
  )
}
