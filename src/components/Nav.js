import React from "react"
import { Burger } from "../components"
import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-area: main;
  background: rgb(0, 0, 0, 0.45);
  height: 65px;
  * {
    text-decoration: none;
  }
  display: flex;
  justify-content: space-between;
  z-index: 3;
`
export const LogoText = styled.h1`
  font-family: ${props => props.theme.fonts.mainL};
  background-image: linear-gradient(
    90deg,
    #0bbb0b 0%,
    #ffff00 48%,
    #ffff00 53%,
    #ff0000 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 41px;
  padding: 0 50px;
  line-height: 65px;
  font-weight: bold;
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    padding: 0 25px;
  }
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    padding: 0 20px;
  }
`
export const Nav = () => {
  return (
    <NavWrapper>
      <LogoText>Halfway</LogoText>
      <Burger />
    </NavWrapper>
  )
}
