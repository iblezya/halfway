import React, { useState } from "react"
import { RightNav } from "../components"
import { BurgerWrapper } from "../style"

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
