import React from "react"
import styled from "styled-components"
import LeftArrowSvg from "../assets/left-arrow.svg"
import HeartSvg from "../assets/heart.svg"
import { Link } from "gatsby"
import Rating from "./Rating"
const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 250px;
  padding: 25px 8px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%);
`
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BottomRow = styled.div``
const Header = styled.h1`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 10px;
`
const Overlay = ({ salon }) => {
  return (
    <Container>
      <TopRow>
        <Link to="/">
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
