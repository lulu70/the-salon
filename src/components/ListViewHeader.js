import React from "react"
import styled from "styled-components"
import ArrowSVG from "../assets/arrow.svg"
import FilterSVG from "../assets/filter.svg"
const Container = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #b69f58;
`
const Header = styled.h1`
  font-size: 22px;
  margin: 0;
  font-weight: 300;
`

const ListViewHeader = () => {
  return (
    <Container>
      <ArrowSVG />
      <Header>Här</Header>
      <FilterSVG />
    </Container>
  )
}

export default ListViewHeader
