import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image";

import LinkedIndexPost from "./linked-index-post"
import InternalIndexPost from "./internal-index-post"

const IndexPost = ({ data, styleClass, colorMap }) => {
  styleClass += " " + colorMap[data.Category]

  return (
    <article className={ `${styleClass} spotlight` }>
      <div className="inner">
        <div className="image">
          { data.Image &&
            <Img alt={ data.Title } fluid={ data.Image.localFiles[0].childImageSharp.fluid } />
          }
        </div>

        <h2 dangerouslySetInnerHTML={{ __html: data.Callout }} />

        { data.URL &&
          <LinkedIndexPost
            title={ data.Title }
            url={ data.URL }
            body={ data.Body.childMarkdownRemark.html }
            publishedDate= { data.Published_Date }
            tags={ data.Tags }
            styleClass={ styleClass } /> }

        { !data.URL && data.Excerpt &&
          <InternalIndexPost
            title={ data.Title }
            slug={ data.Slug }
            excerpt={ data.Excerpt.childMarkdownRemark.html }
            publishedDate= { data.Published_Date }
            tags={ data.Tags }
            styleClass={ styleClass } /> }
      </div>
    </article>
)}

IndexPost.propTypes = {
  styleClass: PropTypes.string,
  colorMap: PropTypes.object,
  data: PropTypes.shape({
    Title: PropTypes.string,
    Callout: PropTypes.string,
    Slug: PropTypes.string,
    URL: PropTypes.string,
    Body: PropTypes.object,
    Excerpt: PropTypes.object,
    Category: PropTypes.string,
    Tags: PropTypes.array,
    Image: PropTypes.object,
    Published_Date: PropTypes.string,
  })
}

IndexPost.defaultProps = {
  colorMap: {
    "Adventure": "accent1",
    "Hardware": "accent2",
    "Software": "accent3",
    "Design": "accent4",
  }
}

export default IndexPost
