import React from "react"
import ArrowSVG from "../assets/arrow.svg"
import FilterSVG from "../assets/filter.svg"
import { Container, Header, FilterButton } from "../styles/ListViewHeader"

const ListViewHeader = ({ showAllIntervals, setShowAllIntervals }) => {
  const handleFilterClick = () => {
    setShowAllIntervals(!showAllIntervals)
  }
  return (
    <Container>
      <ArrowSVG />
      <Header>Här</Header>
      <FilterButton onClick={handleFilterClick}>
        <FilterSVG />
      </FilterButton>
    </Container>
  )
}

export default ListViewHeader
