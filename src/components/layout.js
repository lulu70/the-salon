import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from "styled-components"

const Container = styled.div`
  margin: 2rem auto;
  width: 375px;
  height: 667px;
  border: solid 1px;
`
const Main = styled.main`
  position: relative;
`
const Layout = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
