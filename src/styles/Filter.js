import styled from "styled-components"
export const Container = styled.div`
  border-bottom: solid 1px #b69f58;
  padding: 16px 16px 0 16px;
`
export const IntervalsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-family: HelveticaNeue;
  margin: 0;
`
export const IntervalButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  cursor: pointer;
`
export const Interval = styled.li`
  color: #202020;
  margin-bottom: 16px;
`
