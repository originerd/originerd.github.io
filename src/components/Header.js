import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.css'

const navItems = ['about', 'posts', 'projects'];
const navColors = ['yellow', 'orange', 'cherryred'];

const renderNavLinks = () => {
  const { pathname } = window.location;

  return navItems.filter((navItem) => pathname !== `/${navItem}/`)
    .map((navItem, i) => (
      <Link className={`nav-link nav-link--${navColors[i % navColors.length]}`} key={navItem} to={`/${navItem}/`}>
        <h2 className="nav-link__content">
          {navItem}
        </h2>
      </Link>
    ));
}

const Header = ({ siteTitle }) => {
  if (window.location.pathname === '/') {
    return null;
  }

  return (
    <nav className="header">
      <Link className="nav-link" to="/">
        <h1 className="nav-link__content">
          {siteTitle}
        </h1>
      </Link>
      <div>
        {renderNavLinks()}
      </div>
    </nav>
  )
}

export default Header
