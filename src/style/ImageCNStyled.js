import styled from "styled-components"
import Img from "gatsby-image"

export const FeatureImageWrapper = styled.div`
  display: flex;
  grid-column: 1/15;
  grid-row: 2/4;
  overflow: hidden;
  position: relative;
  justify-content: center;
  z-index: 1;
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1/9;
  }
  @media ${props => props.theme.breakpoints.mobile} {
  }
`
export const ImgCN = styled(Img)`
  position: absolute;
  top: 0;
  width: 780px;
  height: 37em;
  z-index: 9;
  clip-path: circle();
  @media ${props => props.theme.breakpoints.tablet} {
    width: 518px;
    height: 30em;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    height: 23em;
  }
`
