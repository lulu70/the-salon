import React from "react"
import "../styles/layout.css"
import { Container, Main } from "../styles/layout"

const Layout = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

export default Layout
