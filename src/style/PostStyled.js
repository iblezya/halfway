import styled from "styled-components"

export const PostWrapper = styled.div`
  z-index: 9;
  grid-column: 3 / span 10;
  grid-row: 3 / 5;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  opacity: 0.95;
  box-shadow: ${props => props.theme.shadows.shadow1};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / 8;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    grid-column: 1 / 9;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.codenotes};
  }
  p,
  ul,
  ol {
    color: ${props => props.theme.colors.codenotes};
    font-size: 1.125em;
  }
  h1 {
    font-size: 2.25em;
  }
  img {
    opacity: 1;
    width: 700px;
    min-width: 3;
    @media ${props => props.theme.breakpoints.smartphonePortrait} {
      width: 350px;
    }
    @media ${props => props.theme.breakpoints.smartphoneLandscape} {
      width: 420px;
    }

    @media ${props => props.theme.breakpoints.tabletPortrait} {
      width: 620px;
    }
  }
`
