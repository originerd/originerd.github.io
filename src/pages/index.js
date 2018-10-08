import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import '../styles/landing.css'

const IndexPage = () => (
  <Layout>
    <div className="landing">
      <h1 className="landing__title">Originerd</h1>
      <nav className="landing-nav">
        <div className="landing-nav__item">
          <Link className="nav-link" to="/about/">
            <h1 className="nav-link__content nav-link__content--large">about</h1>
          </Link>
        </div>
        <div className="landing-nav__item">
          <Link className="nav-link nav-link--yellow" to="/posts/">
            <h1 className="nav-link__content nav-link__content--large">posts</h1>
          </Link>
        </div>
        <div className="landing-nav__item">
          <Link className="nav-link nav-link--cherryred" to="/projects/">
            <h1 className="nav-link__content nav-link__content--large">projects</h1>
          </Link>
        </div>
      </nav>
    </div>
  </Layout>
)

export default IndexPage
