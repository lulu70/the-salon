import React from "react"
import { Container, InfoButton, SchemaButton } from "../styles/TabBar"

const TabBar = () => {
  return (
    <Container>
      <InfoButton>Info</InfoButton>
      <SchemaButton>Schema</SchemaButton>
    </Container>
  )
}

export default TabBar
