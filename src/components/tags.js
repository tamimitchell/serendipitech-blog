import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link";

const Tags = ({ tags, allPosts, styleClass }) => (
  <div className={`tag-list ${styleClass}`}>
    { allPosts &&
      <span>
        <Link to="/#tags">All Posts</Link>
        <strong>&nbsp; &#124;</strong>
      </span>
    }

    { tags && tags.map((tag, i) => {
      const data = tag.node ? tag.node.data : tag.data
      return (
        <span key={ data.Slug }>
          &nbsp;
          <Link to={ `/${data.Slug}#tags` }>{ data.Title }</Link>
          { i !== (tags.length - 1) &&
            <strong>&nbsp; &#124;</strong> }
        </span>
      )
    })}
  </div>
)

Tags.propTypes = {
  tags: PropTypes.array,
  allPosts: PropTypes.bool
}

export default Tags
