import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import RightArrowSvg from "../assets/right-arrow.svg"
import StarSvg from "../assets/star.svg"
import EmptyStarSvg from "../assets/empty-star.svg"

const List = styled.ul`
  list-style: none;
  padding: 15px;
  margin: 0;
  font-family: HelveticaNeue;
`
const ListItem = styled.li`
  margin-bottom: 28px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #202020;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FirstColumn = styled.div`
  align-self: flex-start;
`
const SecondColumn = styled.div``
const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-self: flex-start;
`
const Price = styled.div`
  font-size: 15px;
  margin-bottom: 11px;
`
const TimeSlot = styled.div`
  font-size: 13px;
  color: #666666;
`
const ForthColumn = styled.div``
const SalonHeader = styled.h2`
  font-size: 20px;
  font-weight: 300;
  font-family: MillerBanner light;
  margin-bottom: 13px;
`
const RatingContainer = styled.div`
  font-size: 11px;
  margin-bottom: 13px;
  display: flex;
  align-items: center;
`
const RatingCount = styled.span`
  margin-left: 8px;
`
const Address = styled.div`
  font-size: 15px;
  color: #656565;
`
const SalonList = ({ salons }) => {
  return (
    <List>
      {salons.map(salon => (
        <ListItem key={salon.id}>
          <StyledLink to={"/"}>
            <FirstColumn>{salon.time}</FirstColumn>
            <SecondColumn>
              <SalonHeader>{salon.name}</SalonHeader>
              <RatingContainer>
                {Array(salon.rating)
                  .fill()
                  .map((_, index) => (
                    <StarSvg key={index} />
                  ))}
                {Array(5 - salon.rating)
                  .fill()
                  .map((_, index) => (
                    <EmptyStarSvg key={index} />
                  ))}
                <RatingCount>({salon.ratingCount})</RatingCount>
              </RatingContainer>
              <Address>{salon.address}</Address>
            </SecondColumn>
            <ThirdColumn>
              <Price>{salon.price}</Price>
              <TimeSlot>{salon.timeSlot}</TimeSlot>
            </ThirdColumn>
            <ForthColumn>
              <RightArrowSvg />
            </ForthColumn>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  )
}

export default SalonList
