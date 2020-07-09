import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import MobileStatusBar from "../components/MobileStatusBar"
import ListViewHeader from "../components/ListViewHeader"
import Filter from "../components/Filter"
import SalonList from "../components/SalonList"

const IndexPage = ({ data }) => {
  const [showAllIntervals, setShowAllIntervals] = React.useState(false)
  const [selectedInterval, setSelectedInterval] = React.useState(["250 - 500"])

  const salons = data.dataJson.salons
  const matchingSalons = salons.filter(
    salon => salon.priceInterval === selectedInterval
  )
  const priceIntervals = data.dataJson.priceIntervals
  return (
    <Layout>
      <SEO title="Home" />
      <MobileStatusBar />
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
