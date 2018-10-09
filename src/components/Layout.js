import { graphql, StaticQuery } from 'gatsby'
import 'normalize.css'
import 'prismjs/themes/prism-solarizedlight.css'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import '../fonts/index.css';
import '../styles/layout.css'
import Header from './Header'

const Layout = ({ children }) => (
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
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
