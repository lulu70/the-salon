import React from "react"
import RightArrowSvg from "../assets/right-arrow.svg"
import Rating from "./Rating"
import {
  List,
  ListItem,
  StyledLink,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  Price,
  TimeSlot,
  ForthColumn,
  SalonHeader,
  Address,
} from "../styles/SalonList"

const SalonList = ({ salons }) => {
  return (
    <List>
      {salons.map(salon => (
        <ListItem key={salon.id}>
          <StyledLink to={salon.slug} state={{ animate: "rtl" }}>
            <FirstColumn>{salon.time}</FirstColumn>
            <SecondColumn>
              <SalonHeader>{salon.name}</SalonHeader>
              <Rating salon={salon} mode="small" />
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
