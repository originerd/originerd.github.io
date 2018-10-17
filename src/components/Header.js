import React from 'react'
import { Link } from 'gatsby'

import '../styles/header.css'

const navItems = [
  { name: 'about', path: '/about/' },
  { name: 'posts', path: '/posts/' },
  { name: 'résumé', path: '/resume/' },
];
const navColors = ['yellow', 'orange', 'cherryred'];

const renderNavLinks = () => {
  const { pathname } = typeof window !== 'undefined' && window.location;

  return navItems.filter((navItem) => pathname !== `/${navItem}/`)
    .map((navItem, i) => (
      <Link className={`nav-link nav-link--${navColors[i % navColors.length]}`} key={navItem.name} to={navItem.path}>
        <h2 className="nav-link__content">
          {navItem.name}
        </h2>
      </Link>
    ));
}

const Header = ({ siteTitle }) => {
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
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
