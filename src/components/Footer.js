import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { P } from "../components"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-area: footer;
  line-height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: right;
  z-index: 2;
`
export const FooterSocialWrapper = styled.div`
  text-align: center;
  display: inline-block;
  align-items: center;
  margin-top: 0.75rem;
`
export const FooterSocialIcons = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
  & img {
    height: 30px;
    padding: 0 0.7rem;
    opacity: 0.6;
    transition: 0.3s ease;
  }
  & img:hover {
    opacity: 1;
  }
`

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      youtube: file(relativePath: { eq: "youtube.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <div>
        <FooterSocialWrapper>
          <FooterSocialIcons>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.facebook.publicURL} alt="Facebook icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.linkedin.publicURL} alt="Linkedin icon" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.youtube.publicURL} alt="Youtube icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.instagram.publicURL} alt="Instagram icon" />
            </a>
          </FooterSocialIcons>
          <P size="xSmall" color="dark3">
            Created by Gerson Salas © 2020
          </P>
        </FooterSocialWrapper>
      </div>
    </FooterWrapper>
  )
}
