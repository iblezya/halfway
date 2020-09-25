import React from "react"
import { Link } from "gatsby"
import { RightNavWrapper } from "../style"

export const RightNav = ({ open }) => {
  return (
    <RightNavWrapper open={open}>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="#about">About</Link>
      </li>
      <li>
        <Link to="/codenotes">CodeNotes</Link>
      </li>
    </RightNavWrapper>
  )
}
