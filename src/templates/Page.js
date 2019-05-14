import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const PageTemplate = ({ data }) => {
  const page = data.page.data
  const pages = data.pages.edges

  return (
    <Layout pages={ pages }>
      <section id="main" className="wrapper">
        <div className="inner">

          <header className="major">
            <h1>{ page.Title }</h1>
          </header>

          <div dangerouslySetInnerHTML={{ __html: page.Body.childMarkdownRemark.html }} />
        </div>
      </section>
    </Layout>
  )
}

export default PageTemplate

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
    page: airtable(
      table: {eq: "Pages"},
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
