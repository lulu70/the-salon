import React from "react"
import styled from "styled-components"
import { FaWifi } from "react-icons/fa"
import { MdBatteryFull } from "react-icons/md"
const Container = styled.div`
  height: 20px;
  padding: 6.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
  font-size: 12px;
  color: ${props => (props.mode === "dark" ? "white" : "black")};
  position: absolute;
  top: 0;
  width: 100%;
`
const NetworkContainer = styled.div`
  display: flex;
  flex: 1;
`
const MobileSignalContainer = styled.div`
  width: 33.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 4px;
`
const Circle = styled.div`
  background-color: ${props => (props.mode === "dark" ? "white" : "black")};
  width: 6px;
  height: 6px;
  border-radius: 50%;
`
const Provider = styled.div`
  margin-right: 4px;
`
const Time = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
`
const BatteryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`
const Percentage = styled.div`
  margin-right: 4px;
`
const StyledBatteryIcon = styled(MdBatteryFull)`
  transform: rotate(90deg);
  font-size: 20px;
`

const MobileStatusBar = ({ mode }) => {
  return (
    <Container mode={mode}>
      <NetworkContainer>
        <MobileSignalContainer>
          {Array(5)
            .fill()
            .map((_, index) => (
              <Circle key={index} mode={mode} />
            ))}
        </MobileSignalContainer>
        <Provider>Sketch</Provider>
        <FaWifi />
      </NetworkContainer>
      <Time>9:41 AM</Time>
      <BatteryContainer>
        <Percentage>100%</Percentage>
        <StyledBatteryIcon />
      </BatteryContainer>
    </Container>
  )
}

export default MobileStatusBar
