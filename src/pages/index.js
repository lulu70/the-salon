import React from "react"
import { graphql } from "gatsby"
import Filter from "../components/Filter"
import Layout from "../components/layout"
import ListViewHeader from "../components/ListViewHeader"
import SalonList from "../components/SalonList"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => {
  const [showAllIntervals, setShowAllIntervals] = React.useState(false)
  const [selectedInterval, setSelectedInterval] = React.useState("250 - 500")

  const salons = data.dataJson.salons
  const matchingSalons = salons.filter(
    salon => salon.priceInterval === selectedInterval
  )
  const priceIntervals = data.dataJson.priceIntervals

  return (
    <Layout location={location}>
      <SEO title="List view" />
      <ListViewHeader
        showAllIntervals={showAllIntervals}
        setShowAllIntervals={setShowAllIntervals}
      />
      <Filter
        priceIntervals={priceIntervals}
        selectedInterval={selectedInterval}
        setSelectedInterval={setSelectedInterval}
        showAllIntervals={showAllIntervals}
        setShowAllIntervals={setShowAllIntervals}
      />
      <SalonList salons={matchingSalons} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    dataJson {
      priceIntervals
      salons {
        id
        slug
        name
        address
        time
        rating
        ratingCount
        price
        timeSlot
        priceInterval
      }
    }
  }
`
