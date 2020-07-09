import React from "react"
import styled from "styled-components"
import DownArrowSvg from "../assets/down-arrow.svg"
const Container = styled.div`
  border-bottom: solid 1px #b69f58;
  padding: 16px 16px 0 16px;
`
const IntervalsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-family: HelveticaNeue;
  margin: 0;
`
const IntervalButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
const Interval = styled.li`
  color: #202020;
  margin-bottom: 16px;
`
const Filter = ({
  priceIntervals,
  selectedInterval,
  setSelectedInterval,
  showAllIntervals,
  setShowAllIntervals,
}) => {
  const handleIntervalClick = interval => {
    setSelectedInterval(interval)
    setShowAllIntervals(!showAllIntervals)
  }
  return (
    <Container>
      <IntervalsList>
        {showAllIntervals ? (
          priceIntervals.map(interval => (
            <IntervalButton
              key={interval}
              onClick={() => handleIntervalClick(interval)}
            >
              <Interval>Pris {interval} kr</Interval>
              <DownArrowSvg />
            </IntervalButton>
          ))
        ) : (
          <IntervalButton onClick={() => handleIntervalClick(selectedInterval)}>
            <Interval>Pris {selectedInterval} kr</Interval>
            <DownArrowSvg />
          </IntervalButton>
        )}
      </IntervalsList>
    </Container>
  )
}

export default Filter
