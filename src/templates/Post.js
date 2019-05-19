import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const PostTemplate = ({ data }) => {
  const post = data.post.data
  const pages = data.pages.edges

  return (
    <Layout pages={ pages }>
      <SEO title={ post.Title } />

      <section id="main" className="wrapper">
        <div className="inner">

          <header className="major">
            <h1>{ post.Title }</h1>
          </header>

          <div dangerouslySetInnerHTML={{ __html: post.Body.childMarkdownRemark.html }} />
        </div>
      </section>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($pageSlug: String!) {
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
    post: airtable(
      table: {eq: "Posts"},
      data: {
        Published: {eq: true},
        Slug: {eq: $pageSlug}
      })
      {
        data {
          Title
          Slug
          Body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
  }
`
