import React from "react"

const Footer = () => (
  <footer id="footer">
    <div className="align-center">
      <ul className="icons">
        <li><a href="https://twitter.com/serendipi_tech" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="https://www.facebook.com/SerendipiTech-346174432705596/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
        <li><a href="https://tamimitchell.com" className="icon fa-globe"><span className="label">Tami Mitchell</span></a></li>
        <li><a href="mailto:mail@tamimitchell.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
      </ul>
    </div>

    <div className="copyright">
      <p>
        © {new Date().getFullYear()} SerendipiTech |
        Built with <strong><a href="https://www.gatsbyjs.org">Gatsby</a></strong> |
        From the desk of <strong><a href="https://www.tamimitchell.com">Tami Mitchell</a></strong>
      </p>
    </div>
  </footer>
)

export default Footer
