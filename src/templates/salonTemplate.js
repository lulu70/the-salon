import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import Overlay from "../components/Overlay"
import DetailsSection from "../components/DetailsSection"
import TabBar from "../components/TabBar"
import styled from "styled-components"

const Divider = styled.div`
  height: 24px;
  background-color: #f9f9f9;
`
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
