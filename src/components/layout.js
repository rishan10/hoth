/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

import NavBar from "../components/navbar"


const styles = {
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  logoButton: {
    marginRight: 16,
    marginLeft: -12,
  },
  appBar: {
    background: '#12305e',

  },
  buttons: { 
    color: 'white', 
    textDecoration: 'none',
    
  }
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <NavBar/>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
