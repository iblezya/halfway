import styled from "styled-components"
//Index
export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2em)) 1fr;
  grid-template-rows: 65px auto 80px;
  grid-gap: 0 2rem;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-gap: 0;
  }
`
//Codenotes
export const ContainerCNWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2em)) 1fr;
  grid-template-rows: 65px 30em 7em auto 80px;
  grid-gap: 0 2rem;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-rows: 65px 24em 6em auto 80px;
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-rows: 65px 18em 5em auto 80px;
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
  }
`
