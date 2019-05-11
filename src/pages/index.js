import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  console.log(data)
  const posts = data.allAirtable.edges
  
  return (
  <Layout>
    <h1>Serendipitech</h1>
    <br />
    
    { posts.map(({ node }) => (
      <div>
        { node.data.URL &&
          <div>
            <h2><a href={ node.data.URL }>{ node.data.Title } &nbsp;&nbsp;&nbsp; >>></a></h2> 
            <h4>{ node.data.Published_Date }</h4>
            <div dangerouslySetInnerHTML={{ __html: node.data.Body }} />
          </div>
        }
            
        { !node.data.URL &&
          <div>
            <h2><Link to={ node.data.Slug }>{ node.data.Title }</Link></h2> 
            <h4>{ node.data.Published_Date }</h4>
            <div dangerouslySetInnerHTML={{ __html: node.data.Excerpt }} />
          </div>
        }
        
        <br />
      </div>
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