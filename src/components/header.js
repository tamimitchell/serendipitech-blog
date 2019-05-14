import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, headerStyle, toggleNav }) => (
  <header id="header" className={ headerStyle }>
    <a className="logo" href="/">Serendipitech</a>
    <nav>
      <ul>
        <li>
          <a href="#" onClick={(e) => toggleNav(e)}>Menu</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerStyle: PropTypes.string,
  toggleNav: PropTypes.func
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
