import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import MobileStatusBar from "../components/MobileStatusBar"

const IndexPage = ({ data }) => {
  const salons = data.dataJson.salons
  return (
    <Layout>
      <SEO title="Home" />
      <MobileStatusBar />
      <ul>
        {salons.map(salon => (
          <li key={salon.id}>{salon.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    dataJson {
      salons {
        id
        name
        address
        time
        rating
        ratingCount
        price
        timeSlot
      }
    }
  }
`
