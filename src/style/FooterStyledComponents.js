import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  grid-area: footer;
  line-height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: right;
  z-index: 2;
`
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
