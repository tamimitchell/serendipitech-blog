import PropTypes from "prop-types"
import React from "react"
import Tags from "../tags"

const LinkedIndexPost = ({ title, url, body, publishedDate, tags, styleClass }) => (
  <div className="content">
    <Tags tags={ tags } styleClass={ styleClass } />

    <header>
      <h3><a href={url} target="_blank" rel="noopener noreferrer">{ title }</a></h3>
      <p>{ publishedDate }</p>
    </header>

    <div dangerouslySetInnerHTML={{ __html: body }} />
    <ul className="actions">
      <li><a href={url} target="_blank" rel="noopener noreferrer" className={ `button primary ${styleClass}` }>Read more </a></li>
    </ul>
  </div>
)

LinkedIndexPost.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  body: PropTypes.string,
  publishedDate: PropTypes.string,
  tags: PropTypes.array,
  styleClass: PropTypes.string
}

export default LinkedIndexPost
