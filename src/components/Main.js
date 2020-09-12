import React from "react"
import styled from "styled-components"

const MainWrapper = styled.main`
  background: white;
  grid-area: main;
  z-index: 0;
`

export const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}
