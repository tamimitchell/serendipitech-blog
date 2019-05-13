import PropTypes from "prop-types"
import React from "react"
import Tags from "./tags"

const Banner = ({ siteTitle, tags }) => (
  <section id="banner">
    <div></div>
    <div className="inner">
      <h1>Serendipitech</h1>

      <p>
        Exploring connections between the worlds of travel, adventure, mapping, programming, and design.
      </p>
    </div>

    <div id="tags"><Tags tags={ tags } allPosts={ true } /></div>
  </section>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
  tags: PropTypes.array
}

export default Banner
