import styled, { css } from "styled-components"
import StarSvg from "../assets/star.svg"
import EmptyStarSvg from "../assets/empty-star.svg"

const StyledStar = css`
  width: ${props => (props.mode === "small" ? "" : "15px")};
  transform: ${props => (props.mode === "small" ? "scale(1)" : "scale(1.4)")};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: HelveticaNeue;
  margin-bottom: 13px;
`
export const RatingCount = styled.span`
  margin-left: 8px;
  font-size: ${props => (props.mode === "small" ? "11px" : "13px")};
`
export const StyledStarSvg = styled(StarSvg)`
  ${StyledStar}
`
export const StyledEmptyStarSvg = styled(EmptyStarSvg)`
  ${StyledStar}
`
