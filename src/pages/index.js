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

    { posts.map(( post, i ) => {
      const styleClass = (i % 2) === 0 ? "odd" : "even"
      return (<IndexPost key={ post.node.data.Slug } data={ post.node.data } styleClass={ styleClass }/>)
    })}
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
            Category
            Tags
            Published_Date
          }
        }
      }
    }
  }
`
