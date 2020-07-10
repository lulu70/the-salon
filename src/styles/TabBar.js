import styled, { css } from "styled-components"

const BasicButton = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  font-family: HelveticaNeue;
  color: #202020;
`
export const InfoButton = styled.div`
  ${BasicButton}
  border-bottom: solid 2px #b69f58;
`
export const SchemaButton = styled.div`
  ${BasicButton}
`
