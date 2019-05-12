import PropTypes from "prop-types"
import React from "react"

const Banner = () => (
  <section id="banner">
    <div className="inner">
      <h1>Serendipitech</h1>

      <ul className="actions special">
        <li><a href="#one" className="button large wide scrolly-middle">Get started</a></li>
      </ul>
    </div>
  </section>
)

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

export default Banner
