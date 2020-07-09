const path = require(`path`)
const data = require("./src/data/data.json")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  data.salons.forEach(salon => {
    createPage({
      path: salon.slug,
      component: path.resolve(`./src/templates/salonTemplate.js`),
      context: {
        salon,
        image: salon.image,
      },
    })
  })
}
