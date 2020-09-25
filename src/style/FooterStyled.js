import styled from "styled-components"
//Index
export const FooterWrapper = styled.footer`
  grid-column: 1/15;
  grid-row: 3/4;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  line-height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: right;
  z-index: 2;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1/9;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1/9;
  }
`
//Codenotes
export const FooterCNWrapper = styled.footer`
  grid-column: 1/15;
  grid-row: 5/6;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  line-height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: right;
  z-index: 2;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1/9;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 1/9;
  }
`
// ****
export const FooterSocialWrapper = styled.div`
  text-align: center;
  display: inline-block;
  align-items: center;
  margin-top: 0.75rem;
`
export const FooterSocialIcons = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
  & img {
    height: 30px;
    padding: 0 0.7rem;
    opacity: 0.6;
    transition: 0.3s ease;
  }
  & img:hover {
    opacity: 1;
  }
`
export const P = styled.p`
  color: ${props => props.theme.colors.dark3};
`
