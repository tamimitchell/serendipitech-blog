import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link";
import Tags from "../tags"

const InternalIndexPost = ({ title, slug, excerpt, publishedDate, tags, styleClass }) => (
  <div className="content">
    <Tags tags={ tags } styleClass={ styleClass } />

    <header>
      <h3><Link to={ slug }>{ title }</Link></h3>
      <p>{ publishedDate }</p>
    </header>

    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    <ul className="actions">
      <li><Link to={ slug } className={ `button primary ${styleClass}` }>Learn more</Link></li>


    </ul>
  </div>
)

InternalIndexPost.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  excerpt: PropTypes.string,
  publishedDate: PropTypes.string,
  tags: PropTypes.object,
  styleClass: PropTypes.string
}

export default InternalIndexPost
