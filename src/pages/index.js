import React from "react"
// import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Banner from "../components/banner"
import IndexPost from "../components/posts/index-post"

const IndexPage = ({ data, siteTitle }) => {
  const posts = data.allAirtable.edges

  return (
  <Layout>
    <Banner siteTitle={ siteTitle }  />

    { posts.map(({ node }) => (
      <IndexPost key={ node.data.Slug } data={ node.data } />
    ))}
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query {
    allAirtable(filter: {
      table: {eq: "Posts"},
      data: {Published: {eq: true}}
    }) {
      edges {
        node {
          data {
            Title
            Callout
            Slug
            URL
            Body
            Excerpt
            Tags
            Published_Date
          }
        }
      }
    }
  }
`
