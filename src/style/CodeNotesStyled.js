import styled from "styled-components"

export const CodeNotesWrapper = styled.div`
  * {
    text-decoration: none;
  }
  border-radius: 10px 10px 0 0;
  grid-column: 3 / span 10;
  grid-row: 3/5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  opacity: 0.88;
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 2;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2/8;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1/9;
  }
`
export const DivText = styled.div`
  padding: 0.75em 0;
  text-align: center;
  z-index: 1;
`
export const Cursos = styled(DivText)`
  padding: 0.75em 0;
  z-index: 1;
`
export const H2CN = styled.h2`
  background: linear-gradient(
    90deg,
    #0bbb0b 0%,
    #ffff00 48%,
    #ffff00 53%,
    #ff0000 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${props => props.theme.colors.codenotes};
  padding-bottom: 12px;
  font-size: 2.75em;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    font-size: 1.75em;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    font-size: 2.25em;
  }
`
export const H3CN = styled.h3`
  color: ${props => props.theme.colors.codenotes};
  padding-bottom: 12px;
  font-size: 2.5em;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    font-size: 1.5em;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    font-size: 2em;
  }
`
export const PCN = styled.p`
  color: ${props => props.theme.colors.codenotes};
  padding-bottom: 8px;
  font-size: 1.5em;
  @media ${props => props.theme.breakpoints.smartphonePortrait} {
    font-size: 1em;
  }
  @media ${props => props.theme.breakpoints.smartphoneLandscape} {
    font-size: 1.25em;
  }
`
export const Ul = styled.ul`
  list-style: none;
  & a {
    font-size: 2em;
    background: #212529;
    color: ${props => props.theme.colors.codenotes};
    display: block;
    padding: 1rem;
    text-decoration: none;
    border: none;
    border-radius: 2em;
    position: relative;
    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    &:before,
    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
      -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
      top: 0;
      bottom: 0;
      left: 10px;
      right: 10px;
      -moz-border-radius: 100px / 10px;
      border-radius: 100px / 10px;
    }
    &:after {
      right: 10px;
      left: auto;
      -webkit-transform: skew(8deg) rotate(3deg);
      -moz-transform: skew(8deg) rotate(3deg);
      -ms-transform: skew(8deg) rotate(3deg);
      -o-transform: skew(8deg) rotate(3deg);
      transform: skew(8deg) rotate(3deg);
    }
    @media ${props => props.theme.breakpoints.smartphonePortrait} {
      font-size: 1.4em;
    }
    @media ${props => props.theme.breakpoints.smartphoneLandscape} {
      font-size: 1.7em;
    }
  }

  a:hover {
    background: #c4c4c4;
  }
`
export const Li = styled.li`
  margin: 1rem;
  text-align: center;
  & a {
  }

  a:hover {
    color: black;
    text-shadow: 3px 3px 2px #474747;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  }
`
export const Li2 = styled(Li)`
  & a {
    color: yellow;
  }
  a:hover {
    background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
  }
`
export const Li3 = styled(Li)`
  & a {
  }
  a:hover {
    background-image: linear-gradient(
      to right,
      #b8cbb8 0%,
      #b8cbb8 0%,
      #b465da 0%,
      #cf6cc9 33%,
      #ee609c 66%,
      #ee609c 100%
    );
  }
`
export const Li4 = styled(Li)`
  & a {
  }
  a:hover {
    color: #bee9e8;
    background-image: linear-gradient(
      60deg,
      #3d3393 0%,
      #2b76b9 37%,
      #2cacd1 65%,
      #35eb93 100%
    );
  }
`
export const Li5 = styled(Li)`
  & a {
  }
  a:hover {
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
  }
`
