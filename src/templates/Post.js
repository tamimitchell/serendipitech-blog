import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

const PageTemplate = ({ data }) => {
  const page = data.airtable.data

  return (
  <Layout>
    <h1>{ page.Title }</h1>
    <div dangerouslySetInnerHTML={{ __html: page.Body }} />
  </Layout>
)}

export default PageTemplate

export const pageQuery = graphql`
  query($pageSlug: String!) {
    airtable(
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
