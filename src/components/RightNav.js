import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const RightNavWrapper = styled.ul`
  list-style: none;
  display: flex;
  & li {
    display: inline-block;
    line-height: 65px;
    margin: 0 5px;
    a {
      color: #ddedfd;
      font-size: 17px;
      border-radius: 16px;
      padding: 7px 13px;
    }
    a:hover {
      color: white;
      box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.48);
      background: linear-gradient(
        to bottom,
        rgba(0, 150, 205, 1) 0%,
        rgba(3, 117, 199, 0.19) 81%,
        rgba(3, 117, 199, 0) 100%
      );

      transition: 0.5s;
    }
  }
  @media screen and (max-width: 64em) {
    z-index: 15;
    padding-left: 0;
    align-items: center;
    flex-flow: column nowrap;
    background: linear-gradient(145deg, #3a1c71 25%, #fdbb2d 95%, #fdbb2d 100%);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 40%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      a {
        color: white;
      }
    }
  }
`

export const RightNav = ({ open }) => {
  return (
    <RightNavWrapper open={open}>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="#pr">Productos</Link>
      </li>
      <li>
        <Link to="#">Nosotros</Link>
      </li>
      <li>
        <Link to="/contact">Contacto</Link>
      </li>
    </RightNavWrapper>
  )
}
