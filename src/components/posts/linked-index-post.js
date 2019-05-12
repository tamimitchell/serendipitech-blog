import PropTypes from "prop-types"
import React from "react"
import Tags from "../tags"

const LinkedIndexPost = ({ title, url, body, tags, styleClass }) => (
  <div className="content">
    <Tags tags={ tags } styleClass={ styleClass } />

    <h3>{ title }</h3>
    <p dangerouslySetInnerHTML={{ __html: body }} />
    <ul className="actions">
      <li><a href={url} className={ `button primary ${styleClass}` }>Learn more</a></li>
    </ul>
  </div>
)

LinkedIndexPost.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  body: PropTypes.string,
  tags: PropTypes.object,
  styleClass: PropTypes.string
}

export default LinkedIndexPost
