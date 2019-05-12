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
              Title
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
      const isTag = (node.table === 'Tags')
      const isPage = (node.table === 'Posts')

      // Don't generate post pages for outbound links
      const isPost = (node.table === 'Posts' && !node.data.URL)

      if ( node.data.Slug && isTag ) {
        createPage({
          path: node.data.Slug,
          component: path.resolve(`./src/templates/Tag.js`),
          context: {
            tagSlug: node.data.Slug,
            tagTitle: node.data.Title
          },
        })
      }

      if ( node.data.Slug && (isPost || isPage )) {
        createPage({
          path: node.data.Slug,
          component: isPost
            ? path.resolve(`./src/templates/Post.js`)
            : path.resolve(`./src/templates/Page.js`),
          context: {
            pageSlug: node.data.Slug,
            pageTitle: node.data.Title
          },
        })
      }

    })
  })
}
