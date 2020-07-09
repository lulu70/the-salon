import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import MobileStatusBar from "../components/MobileStatusBar"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"
import Overlay from "../components/Overlay"
import TabBar from "../components/TabBar"

const StyledImage = styled(GatsbyImage)``

const SalonTemplate = ({ data }) => {
  const salon = data.sitePage.context.salon
  const image = data.imageSharp
  return (
    <Layout>
      <SEO title={salon.name} />
      <StyledImage fluid={image.fluid} />
      <MobileStatusBar mode="dark" />
      <Overlay salon={salon} />
      <TabBar />
    </Layout>
  )
}

export default SalonTemplate

export const query = graphql`
  query($path: String!, $image: String!) {
    imageSharp(fluid: { originalName: { eq: $image } }) {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
    sitePage(path: { eq: $path }) {
      context {
        salon {
          name
          id
          address
          price
          priceInterval
          rating
          ratingCount
          time
          slug
          timeSlot
        }
      }
    }
  }
`
