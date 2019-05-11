const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allAirtable(filter: {
        table: {eq: "Pages"},
        data: {Published: {eq: true}}
      }) {
        edges {
          node {
            table
            data {
              Slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    
    result.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: node.data.Slug,
        component: path.resolve(`./src/templates/Page.js`),
        context: {
          slug: node.data.Slug,
        },
      })
    })
  })
}