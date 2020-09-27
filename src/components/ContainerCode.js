import React from "react"
import { ContainerCNWrapper } from "../style"
import { Nav, FooterCN, Bg } from "../components"

export const ContainerCode = ({ children }) => {
  return (
    <ContainerCNWrapper>
      <Bg />
      <Nav />

      {children}
      <FooterCN />
    </ContainerCNWrapper>
  )
}
