import React from "react"
import "../styles/layout.css"
import { Container, Main } from "../styles/layout"
import { useSpring, animated } from "react-spring"
const Layout = ({ children, location }) => {
  console.log(location.state)
  const animateMode = location.state && location.state.animate
  const spring = useSpring({
    from: {
      transform: `translateX(${
        animateMode ? (animateMode === "rtl" ? "375" : "-375") : "0"
      }px)`,
    },
    transform: "translateX(0px)",
  })
  const AnimatedMain = animated(Main)
  return (
    <Container>
      <AnimatedMain style={spring}>{children}</AnimatedMain>
    </Container>
  )
}

export default Layout
