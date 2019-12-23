/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Button } from "@material-ui/core"


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
    <div>
      <AppBar style={styles.appBar} position="static">
        <Toolbar>

          <Link to='/'><svg width="48" height="38" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.324 47.5H1.56499C0.534994 47.5 -0.214007 46.522 0.0549934 45.527L10.221 17.656C10.405 16.974 11.024 16.5 11.731 16.5H56.49C57.52 16.5 58 17.484 58 18.473L47.834 46.344C47.65 47.026 47.031 47.5 46.324 47.5Z" fill="#EFCE4A" />
            <path d="M50.268 7.5H25L20 0.5H1.732C0.776 0.5 0 1.275 0 2.232V44.96C0.069 44.962 0.138 44.966 0.205 44.97L10.22 17.656C10.404 16.973 11.023 16.5 11.73 16.5H52V9.232C52 8.275 51.224 7.5 50.268 7.5Z" fill="#EBBA16" />
            <path d="M22.542 35L20.04 31.0693H18.4131V35H17.1074V25.7783H20.4023C21.4642 25.7783 22.2731 25.9993 22.8291 26.4414C23.3851 26.8789 23.6631 27.5078 23.6631 28.3281C23.6631 29.0072 23.4489 29.5791 23.0205 30.0439C22.5967 30.5088 22.027 30.8005 21.3115 30.9189L24.0459 35H22.542ZM22.3506 28.3486C22.3506 27.3324 21.6579 26.8242 20.2725 26.8242H18.4131V30.0371H20.3271C20.9788 30.0371 21.4779 29.8913 21.8242 29.5996C22.1751 29.3079 22.3506 28.891 22.3506 28.3486ZM40.3428 34.0908C39.2992 34.7881 38.2464 35.1367 37.1846 35.1367C36.0452 35.1367 35.1611 34.7152 34.5322 33.8721C33.9033 33.0244 33.5889 31.8486 33.5889 30.3447C33.5889 28.7633 33.8896 27.583 34.4912 26.8037C35.0928 26.0244 35.9974 25.6348 37.2051 25.6348C38.7819 25.6348 39.8324 26.389 40.3564 27.8975L39.1875 28.2803C38.8229 27.2275 38.1667 26.7012 37.2188 26.7012C36.4486 26.7012 35.8789 26.9883 35.5098 27.5625C35.1452 28.1367 34.9629 29.0641 34.9629 30.3447C34.9629 32.833 35.7399 34.0771 37.2939 34.0771C37.6038 34.0771 37.9251 34.0293 38.2578 33.9336C38.5905 33.8379 38.8617 33.7171 39.0713 33.5713V31.2744H37.0684V30.1807H40.3428V34.0908Z" fill="#D3A303" />
          </svg></Link>


          <div style={styles.rightToolbar}>

            <span class="button"><Link style={{ color: 'white', textDecoration: 'none' }} to="/404">About</Link></span>

            <span class="button"><Link style={{ color: 'white', textDecoration: 'none' }} to="/404">Education</Link></span>

            <span class="button"><Link style={{ color: 'white', textDecoration: 'none' }} to="/404">Experience</Link></span>

            <span class="button"><Link style={{ color: 'white', textDecoration: 'none' }} to="/404">Projects</Link></span>

          </div>

        </Toolbar>

      </AppBar>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
