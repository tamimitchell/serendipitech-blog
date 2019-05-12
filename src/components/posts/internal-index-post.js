import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link";
import Tags from "../tags"

const InternalIndexPost = ({ title, slug, excerpt, tags, styleClass }) => (
  <div className="content">
    <Tags tags={ tags } styleClass={ styleClass } />

    <h3>{ slug }</h3>
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    <ul className="actions">
      <li><Link to={ slug } className={ `button primary ${styleClass}` }>Learn more</Link></li>


    </ul>
  </div>
)

InternalIndexPost.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.object,
  styleClass: PropTypes.string
}

export default InternalIndexPost
