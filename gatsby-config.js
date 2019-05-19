require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SerendipiTech`,
    description: `Exploring connections between the worlds of travel, adventure, mapping, programming, and design.`,
    author: `Tami Mitchell`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "noopener noreferrer"
          }
        }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: 'appVnUKL6MmGK4KIG',
            tableName: 'Posts',
            tableView: 'Published',
            tableLinks: [`Tags`],
            mapping: {
              Body: 'text/markdown',
              Excerpt: 'text/markdown',
              Image: `fileNode`
            }
          },
          {
            baseId: 'appVnUKL6MmGK4KIG',
            tableName: 'Pages',
            tableView: 'Published',
            mapping: {
              Body: 'text/markdown',
              Excerpt: 'text/markdown',
              Image: `fileNode`
            }
          },
          {
            baseId: 'appVnUKL6MmGK4KIG',
            tableName: 'Tags',
            tableView: 'Published'
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
