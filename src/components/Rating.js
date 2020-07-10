import React from "react"
import {
  Container,
  RatingCount,
  StyledStarSvg,
  StyledEmptyStarSvg,
} from "../styles/Rating"

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
