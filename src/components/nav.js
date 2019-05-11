import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav id="menu">
    <ul className="links">
      <li><a href="index.html">Home</a></li>
      <li><a href="generic.html">Generic</a></li>
      <li><a href="elements.html">Elements</a></li>
      <li><a href="#" className="button primary">Sign Up</a></li>
      <li><a href="#" className="button">Log In</a></li>
    </ul>
  </nav>
)

export default Nav
