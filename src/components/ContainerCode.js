import React from "react"
import { ContainerCNWrapper } from "../style"
import { Nav, FooterCN, Bg, ImageCN } from "../components"

export const ContainerCode = ({ children }) => {
  return (
    <ContainerCNWrapper>
      <Bg />
      <Nav />
      <ImageCN />
      {children}
      <FooterCN />
    </ContainerCNWrapper>
  )
}
