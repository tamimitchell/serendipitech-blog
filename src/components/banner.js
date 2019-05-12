import PropTypes from "prop-types"
import React from "react"
import Link from "gatsby-link";
import Tags from "./tags"

const Banner = ({ siteTitle, tags }) => (
  <section id="banner">
    <div></div>
    <div className="inner">
      <h1>Serendipitech</h1>

      <p>Dolor sit amet nullam pede semper est, vitae luctus metus libero eu augue. Morbi purus sed libero, faucibus adipiscing, commodo.</p>
    </div>

    <div id="tags"><Tags tags={ tags } allPosts={ true } /></div>
  </section>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
  tags: PropTypes.array
}

export default Banner
