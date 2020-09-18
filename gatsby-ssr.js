import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Theme from "./src/themes/theme"
// import "./static/scroll.css"

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body,html{
    font-family: ${props => props.theme.fonts.main};
    height: auto;
    /* scroll-snap-type: y proximity; */
    
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
