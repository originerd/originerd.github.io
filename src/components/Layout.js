import { graphql, StaticQuery } from 'gatsby'
import moment from 'moment'
import 'moment/locale/ko'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import '../styles/layout.css'
import Header from './Header'

moment.locale('ko')

const Layout = ({ children, hideHeader }) => (
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
        <Header hide={hideHeader} siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.boolean,
}

export default Layout
