import PropTypes from "prop-types"
import React from "react"

const InternalIndexPost = ({ title, slug, excerpt }) => (
  <div className="content">
    <h3>{ slug }</h3>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    <ul className="actions">
      <li><a href="{url}" className="button primary accent1">Learn more</a></li>
    </ul>
  </div>
)

InternalIndexPost.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string,
}

export default InternalIndexPost
