import React from "react"
import { Burger } from "../components"
import { NavWrapper, LogoText } from "../style"

export const Nav = () => {
  return (
    <NavWrapper>
      <LogoText>Halfway</LogoText>
      <Burger />
    </NavWrapper>
  )
}
