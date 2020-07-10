import React from "react"
import DetailsList from "./DetailsList"
import styled from "styled-components"

const Container = styled.section`
  padding: 0 15px;
  font-family: HelveticaNeue;
`
const Description = styled.p`
  line-height: 1.47;
  color: #202020;
  font-size: 15px;
`
const DetailsSection = ({ salon }) => {
  return (
    <Container>
      <DetailsList salon={salon} />
      <Description>{salon.description}</Description>
    </Container>
  )
}

export default DetailsSection
