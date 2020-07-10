import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 250px;
  padding: 25px 8px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%);
`
export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const BottomRow = styled.div``
export const Header = styled.h1`
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 10px;
`
