import PropTypes from "prop-types"
import React from "react"

const LinkedIndexPost = ({ title, url, body }) => (
  <div className="content">
    <h3>{ title }</h3>
    <p dangerouslySetInnerHTML={{ __html: body }} />
    <ul className="actions">
      <li><a href="{url}" className="button primary accent1">Learn more</a></li>
    </ul>
  </div>
)

LinkedIndexPost.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  body: PropTypes.string,
}

export default LinkedIndexPost
