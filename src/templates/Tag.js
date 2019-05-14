import React from "react"
// import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Banner from "../components/banner"
import IndexPost from "../components/posts/index-post"

const TagTemplate = ({ data, pageContext }) => {
  const tags = data.tags.edges
  const pages = data.pages.edges
  const posts = data.posts.edges

  return (
  <Layout pages={ pages }>
    <Banner tags={ tags } />

    { posts.map(( post, i ) => {
      const styleClass = (i % 2) === 0 ? "odd" : "even"
      return (<IndexPost key={ post.node.data.Slug } data={ post.node.data } styleClass={ styleClass }/>)
    })}

    { posts.length === 0 &&
      <section style={{ padding: 5 + 'em' }}>
        <div className="inner">
          <header className="major">
          <h3>No Posts found under { pageContext.tagTitle }</h3>
          </header>
        </div>
      </section>
    }
  </Layout>
)}

export default TagTemplate

export const pageQuery = graphql`
  query($tagSlug: String) {
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
    posts: allAirtable(filter: {
      table: {eq: "Posts"},
      data: {
        Published: {eq: true},
        Tags: {elemMatch: {data: {Slug: {eq: $tagSlug}}}}
      }
    }) {
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
            Published_Date
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
