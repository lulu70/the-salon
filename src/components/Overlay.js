import React from "react"
import { Link } from "gatsby"
import LeftArrowSvg from "../assets/left-arrow.svg"
import HeartSvg from "../assets/heart.svg"
import Rating from "./Rating"
import { Container, TopRow, BottomRow, Header } from "../styles/Overlay"

const Overlay = ({ salon }) => {
  return (
    <Container>
      <TopRow>
        <Link to="/" state={{ animate: "ltr" }}>
          <LeftArrowSvg />
        </Link>
        <HeartSvg />
      </TopRow>
      <BottomRow>
        <Header>{salon.name}</Header>
        <Rating salon={salon} mode="big" />
      </BottomRow>
    </Container>
  )
}

export default Overlay
