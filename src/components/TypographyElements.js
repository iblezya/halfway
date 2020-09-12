import styled from "styled-components"

const fontSizes = {
  xll: "3rem",
  medium: "1.125rem",
  small: "1rem",
  xSmall: "0.875rem",
  default: "1.5rem",
}
const lineHeights = {
  medium: "1.4375rem",
  small: "1.375rem",
  xSmall: "1.125rem",
  default: "1.4375rem",
}
export const P = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: ${props => fontSizes[props.size] || fontSizes["default"]};
  line-height: ${props => lineHeights[props.size] || lineHeights["default"]};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
export const H1 = styled.h1`
  font-size: 2 rem;
  line-height: 2.5rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  margin: ${props => (props.margin ? props.margin : 0)};
  text-align: left;
`
export const H1c = styled.h1`
  font-size: 2 rem;
  line-height: 2.5rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  margin: ${props => (props.margin ? props.margin : 0)};
  text-align: center;
  text-shadow: 1px 3px 0 #303030, 1px 13px 5px #aba8a8;
`

export const H2 = styled.h2`
  background-color: black;
  display: flex;
  padding: 58px 0 50px 0;
  justify-content: center;
  font-size: 3rem;
  line-height: 1.875rem;
  color: ${props => {
    switch (props.color) {
      case "dark1":
        return props.theme.colors.dark1
      case "dark2":
        return props.theme.colors.dark2
      case "dark3":
        return props.theme.colors.dark3
      case "light1":
        return props.theme.colors.light1
      case "light2":
        return props.theme.colors.light2
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
