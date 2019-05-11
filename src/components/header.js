import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" className="alt">
    <a className="logo" href="index.html">Cascade <span>by Pixelarity</span></a>
    <nav>
      <ul>
        <li>
        <a href="#menu">Menu</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
