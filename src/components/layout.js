/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav"

import "../assets/scss/main.scss"

class Layout extends React.Component {
  state = {
    showNav: false
  }

  toggleNav = (e, node) => {
    this.setState({
      showNav: !this.state.showNav
    })
    e.preventDefault()
    return false
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header siteTitle={ data.site.siteMetadata.title } headerStyle={ this.props.headerStyle } toggleNav={ this.toggleNav } />
            <Nav pages={ this.props.pages } showNav={ this.state.showNav } toggleNav={ this.toggleNav } />

            <main>
              { this.props.children }
            </main>

            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pages: PropTypes.array
}

export default Layout
