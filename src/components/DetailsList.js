import React from "react"
import styled from "styled-components"
import PinSvg from "../assets/pin.svg"
import ClockSvg from "../assets/clock.svg"
import PhoneSvg from "../assets/phone.svg"
import GlobeSvg from "../assets/globe.svg"
const Container = styled.ul`
  margin: 0;
  list-style: none;
  font-family: HelveticaNeue;
  color: "#202020";
  font-weight: 300;
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 0.5px solid #eeeeee;
`
const Detail = styled.span`
  margin-left: 1rem;
`

const DetailsList = ({ salon }) => {
  return (
    <Container>
      <ListItem>
        <PinSvg />
        <Detail>{salon.address}</Detail>
      </ListItem>
      <ListItem>
        <ClockSvg />
        <Detail>{salon.closingTime}</Detail>
      </ListItem>
      <ListItem>
        <PhoneSvg />
        <Detail>{salon.phoneNumber}</Detail>
      </ListItem>
      <ListItem>
        <GlobeSvg />
        <Detail>{salon.website}</Detail>
      </ListItem>
    </Container>
  )
}

export default DetailsList
