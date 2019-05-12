import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LinkedIndexPost from "./linked-index-post"
import InternalIndexPost from "./internal-index-post"

const IndexPost = ({ data, styleClass, colorMap }) => {
  styleClass += " " + colorMap[data.Category]
  console.log(styleClass)

  return (
    <article id="one" className={ `${styleClass} spotlight` }>
      <div className="inner">
        <div className="image" data-position="top right">
          <img src="images/pic01.jpg" alt="" />
        </div>

        <h2 dangerouslySetInnerHTML={{ __html: data.Callout }} />

        { data.URL &&
          <LinkedIndexPost
            title={ data.Title }
            url={ data.URL }
            body={ data.Body } /> }

        { !data.URL &&
          <InternalIndexPost
            title={ data.Title }
            slug={ data.Slug }
            excerpt={ data.Excerpt } /> }
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
    Body: PropTypes.string,
    Excerpt: PropTypes.string,
    Category: PropTypes.string,
    Tags: PropTypes.array,
    Image: PropTypes.string,
    Published_Date: PropTypes.string,
  })
}

IndexPost.defaultProps = {
  colorMap: {
    "Outdoors": "accent1",
    "Hardware": "accent2",
    "Software": "accent3",
    "Design": "accent4",
  }
}

export default IndexPost
