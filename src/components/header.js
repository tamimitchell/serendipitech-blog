// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, toggleNav }) => (
  <header id="header" className="alt">
    <a className="logo" href="/">Serendipitech</a>
    <nav>
      <ul>
        <li>
        <a href="#menu" onClick={(e) => toggleNav(e)}>Menu</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  toggleNav: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
