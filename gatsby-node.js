const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allAirtable(filter: {
        data: {Published: {eq: true}}
      }) {
        edges {
          node {
            table
            data {
              Slug
              URL
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
      const isPage = (node.table === 'Posts')
      
      // Don't generate post pages for outbound links
      const isPost = (node.table === 'Posts' && !node.data.URL)
      
      if ( node.data.Slug && (isPost || isPage )) {  
        createPage({
          path: node.data.Slug,
          component: isPost
            ? path.resolve(`./src/templates/Post.js`)
            : path.resolve(`./src/templates/Page.js`),
          context: {
            slug: node.data.Slug,
          },
        })
      }
    })
  })
}