import React from "react"
import PinSvg from "../assets/pin.svg"
import ClockSvg from "../assets/clock.svg"
import PhoneSvg from "../assets/phone.svg"
import GlobeSvg from "../assets/globe.svg"
import { Container, ListItem, Detail } from "../styles/DetailsList"

const DetailsList = ({ salon }) => {
  return (
    <Container>
      <ListItem>
        <PinSvg />
        <Detail>{salon.address}</Detail>
      </ListItem>
      <ListItem>
        <ClockSvg />
        <Detail> Öppet till {salon.closingTime} idag</Detail>
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
