import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

const AnimationProvider = ({ location, children }) => {
  return (
    <TransitionProvider location={location} mode="immediate">
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  )
}

export default AnimationProvider
