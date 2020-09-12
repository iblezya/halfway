import React from "react"
import { Nav, Footer } from "../components"
import styled from "styled-components"

export const ContainerWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 65px auto 80px;
  grid-template-areas:
    "nav"
    "main"
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
