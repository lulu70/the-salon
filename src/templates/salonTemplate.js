import React from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import DetailsSection from "../components/DetailsSection"
import { Divider } from "../styles/salonTemplate"
import Layout from "../components/layout"
import Overlay from "../components/Overlay"
import SEO from "../components/seo"
import TabBar from "../components/TabBar"

const SalonTemplate = ({ data }) => {
  const salon = data.sitePage.context.salon
  const image = data.imageSharp
  return (
    <Layout>
      <SEO title={salon.name} />
      <GatsbyImage fluid={image.fluid} />
      <Overlay salon={salon} />
      <TabBar />
      <Divider />
      <DetailsSection salon={salon} />
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
          closingTime
          phoneNumber
          website
          description
        }
      }
    }
  }
`
