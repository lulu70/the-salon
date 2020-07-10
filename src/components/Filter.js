import React from "react"
import DownArrowSvg from "../assets/down-arrow.svg"
import {
  Container,
  IntervalsList,
  IntervalButton,
  Interval,
} from "../styles/Filter"

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
