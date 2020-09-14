import React, { useState } from "react"
import { RightNav } from "../components"
import styled from "styled-components"

const BurgerWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 20;
  display: none;
  @media screen and (max-width: 64em) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#ddedfd")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BurgerWrapper open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerWrapper>
      <RightNav open={open} />
    </>
  )
}
