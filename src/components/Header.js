import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import '../styles/header.css'

const navItems = [
  { name: 'about', path: '/about/' },
  { name: 'posts', path: '/posts/' },
  { name: 'résumé', path: '/resume/' },
]
const navColors = ['yellow', 'orange', 'cherryred']

const renderNavLinks = () => {
  const { pathname } = typeof window !== 'undefined' && window.location

  return navItems
    .filter(navItem => pathname !== `/${navItem}/`)
    .map((navItem, i) => (
      <Link
        className={`nav-link nav-link--${navColors[i % navColors.length]}`}
        key={navItem.name}
        to={navItem.path}
      >
        <h2 className="nav-link__content">{navItem.name}</h2>
      </Link>
    ))
}

const Header = ({ hide, siteTitle }) => {
  if (hide) {
    return null
  }

  return (
    <nav className="header">
      <Link className="nav-link" to="/">
        <h1 className="nav-link__content">{siteTitle}</h1>
      </Link>
      <div>{renderNavLinks()}</div>
    </nav>
  )
}

Header.propTypes = {
  hide: PropTypes.boolean,
  siteTitle: PropTypes.string.isRequired,
}

export default Header
