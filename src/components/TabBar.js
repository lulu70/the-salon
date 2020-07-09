import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  font-family: HelveticaNeue;
  color: #202020;
`
const InfoButton = styled.div`
  flex: 1;
  border-bottom: solid 2px #b69f58;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SchemaButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TabBar = () => {
  return (
    <Container>
      <InfoButton>Info</InfoButton>
      <SchemaButton>Schema</SchemaButton>
    </Container>
  )
}

export default TabBar
