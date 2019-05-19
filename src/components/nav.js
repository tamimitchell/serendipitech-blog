import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const Nav = ({ pages, showNav, toggleNav }) => (
  <nav id="menu" className={showNav ? "visible" : ""}>
    <ul className="links">

      <li><Link to="/">Home</Link></li>
      { pages && pages.map(({node}) => {
        return (<li key={ node.data.Slug }><Link to={`/${ node.data.Slug }`}>{ node.data.Title }</Link></li>)
      })}
    </ul>
    <button href="#" className="close" onClick={(e) => toggleNav(e)}></button>
  </nav>
)

Nav.propTypes = {
  pages: PropTypes.array,
  showNav: PropTypes.bool,
  toggleNav: PropTypes.func
}

export default Nav
