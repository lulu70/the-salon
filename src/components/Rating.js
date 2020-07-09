import React from "react"
import styled from "styled-components"
import StarSvg from "../assets/star.svg"
import EmptyStarSvg from "../assets/empty-star.svg"

const Container = styled.div`
  /* margin-bottom: ${props => (props.mode === "small" ? "13px" : "0px")}; */
  display: flex;
  align-items: center;
  font-family: HelveticaNeue;
`
const RatingCount = styled.span`
  margin-left: 8px;
  font-size: ${props => (props.mode === "small" ? "11px" : "13px")};
`
const StyledStarSvg = styled(StarSvg)`
  width: ${props => (props.mode === "small" ? "" : "15px")};
  transform: ${props => (props.mode === "small" ? "scale(1)" : "scale(1.4)")};
`
const StyledEmptyStarSvg = styled(EmptyStarSvg)`
  transform: ${props => (props.mode === "small" ? "scale(1)" : "scale(1.4)")};
  width: ${props => (props.mode === "small" ? "" : "15px")};
`

const Rating = ({ salon, mode }) => {
  return (
    <Container mode={mode}>
      {Array(salon.rating)
        .fill()
        .map((_, index) => (
          <StyledStarSvg key={index} mode={mode} />
        ))}
      {Array(5 - salon.rating)
        .fill()
        .map((_, index) => (
          <StyledEmptyStarSvg key={index} mode={mode} />
        ))}
      <RatingCount mode={mode}>({salon.ratingCount})</RatingCount>
    </Container>
  )
}

export default Rating
