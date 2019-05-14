import React from "react"
// import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Banner from "../components/banner"
import IndexPost from "../components/posts/index-post"

const IndexPage = ({ data }) => {
  const tags = data.tags.edges
  const pages = data.pages.edges
  const posts = data.posts.edges

  return (
  <Layout pages={ pages } >
    <Banner tags={ tags } />

    { posts.map(( post, i ) => {
      const styleClass = (i % 2) === 0 ? "odd" : "even"
      return (<IndexPost key={ post.node.data.Slug } data={ post.node.data } styleClass={ styleClass }/>)
    })}
  </Layout>
)}

export default IndexPage

export const pageQuery = graphql`
  query {
    tags: allAirtable(
      filter: {
        table: {eq: "Tags"}
        data: {Published: {eq: true}}
      }
      sort: {
        fields: [data___Slug]
        order: ASC
      }
    ) {
      edges {
        node {
          data {
            Title
            Slug
          }
        }
      }
    }
    pages: allAirtable(
      filter: {
        table: {eq: "Pages"}
        data: {Published: {eq: true}}
      }
    ) {
      edges {
        node {
          data {
            Title
            Slug
          }
        }
      }
    }
    posts: allAirtable(
      filter: {
        table: {eq: "Posts"},
        data: {Published: {eq: true}}
      }
      sort: {
        fields: [data___Published_Date]
        order: DESC
      }
    ) {
      edges {
        node {
          data {
            Title
            Callout
            Slug
            URL
            Body {
              childMarkdownRemark {
                html
              }
            }
            Excerpt {
              childMarkdownRemark {
                html
              }
            }
            Category
            Tags {
              data {
                Title
                Slug
              }
            }
            Published_Date(formatString: "MMMM DD, YYYY")
            Image {
              localFiles {
                childImageSharp {
                    fluid(maxWidth: 850, maxHeight: 850) { ...GatsbyImageSharpFluid_tracedSVG }
                }
              }
            }
          }
        }
      }
    }
  }
`
