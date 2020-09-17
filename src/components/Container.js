import React from "react"
import { Nav, Footer } from "../components"
import styled from "styled-components"

export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 80px;
  grid-template-areas:
    "main"
    "present"
    "footer";
`

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
