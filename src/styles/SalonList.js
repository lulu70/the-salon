import styled from "styled-components"
import { Link } from "gatsby"

export const List = styled.ul`
  list-style: none;
  padding: 15px;
  margin: 0;
  font-family: HelveticaNeue;
`
export const ListItem = styled.li`
  margin-bottom: 28px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #202020;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FirstColumn = styled.div`
  align-self: flex-start;
`
export const SecondColumn = styled.div``
export const ThirdColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-self: flex-start;
`
export const Price = styled.div`
  font-size: 15px;
  margin-bottom: 11px;
`
export const TimeSlot = styled.div`
  font-size: 13px;
  color: #666666;
`
export const ForthColumn = styled.div``
export const SalonHeader = styled.h2`
  font-size: 20px;
  font-weight: 300;
  font-family: MillerBanner light;
  margin-bottom: 13px;
`
export const Address = styled.div`
  font-size: 15px;
  color: #656565;
`
