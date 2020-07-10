import React from "react"
import DetailsList from "./DetailsList"
import { Container, Description } from "../styles/DetailsSection"

const DetailsSection = ({ salon }) => {
  return (
    <Container>
      <DetailsList salon={salon} />
      <Description>{salon.description}</Description>
    </Container>
  )
}

export default DetailsSection
