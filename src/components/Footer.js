import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../style"

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
            href="https://www.linkedin.com/in/gerson-jean-pierre-salas-vega-933871196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin icon" />
          </a>
          <a
            href="https://www.youtube.com/c/halfwaycode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.youtube.publicURL} alt="Youtube icon" />
          </a>
          <a
            href="https://www.instagram.com/iblezya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram icon" />
          </a>
        </FooterSocialIcons>
        <P>Created by Gerson Jean Pierre © 2020</P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
