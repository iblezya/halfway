import styled from "styled-components"

export const PostWrapper = styled.div`
  z-index: 9;
  grid-column: 2 / span 12;
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
  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.75rem;
  }
  h1 {
    font-size: 2em;
    line-height: 2.3em;
  }
  h2 {
    font-size: 1.5em;
    line-height: 2.875em;
  }
  h3 {
    font-size: 1.375em;
    line-height: 1.625em;
  }
  h4 {
    font-size: 1.25em;
    line-height: 1.5em;
  }
  h5 {
    font-size: 1.125em;
    line-height: 1.375em;
  }
  h6 {
    font-size: 1em;
    line-height: 1.125em;
  }
  p {
    color: ${props => props.theme.colors.codenotes};
    font-size: 1.25em;
    line-height: 1.375em;
  }
  blockquote p {
    font-style: italic;
    font-size: 1.5em;
    line-height: 2em;
    text-align: center;
    max-width: 36em;
    margin: 3rem auto;
  }
  ul,
  ol {
    color: ${props => props.theme.colors.codenotes};
    margin: 1em 0 1em 2em;
    font-size: 1.15em;
  }
  li {
    margin: 0.25em 0;
  }
  code {
    color: ${props => props.theme.colors.codenotes};
    font-size: 1em;
    line-height: 1.875em;
    background: gray;
    padding: 0 0.3em;
  }
  hr {
    border: 0;
    height: 1px;
    background: white;
    margin: 1em 0;
  }
  table {
    width: 100%;
    border-spacing: 0.25em;
    border-collapse: collapse;
    font-size: 1em;
    line-height: 1.5em;
  }
  table,
  th,
  td {
    border: 1px solid tomato;
  }
  th,
  td {
    text-align: left;
    padding: 0.5em;
    color: ${props => props.theme.colors.codenotes};
  }
  span {
    margin: 1em 0;
  }
  a {
    text-decoration: none;
    color: tomato;
  }
  /* img {
    opacity: 1;
    width: 700px;
    min-width: 3;
    @media ${props =>
    props.theme.breakpoints
      .smartphonePortrait} {
      width: 350px;
    }
    @media ${props =>
    props.theme.breakpoints
      .smartphoneLandscape} {
      width: 420px;
    }

    @media ${props =>
    props.theme.breakpoints.tabletPortrait} {
      width: 620px;
    }
  } */
`
