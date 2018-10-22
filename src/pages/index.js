import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import '../styles/landing.css'

const IndexPage = () => (
  <Layout hideHeader>
    <main className="container container--landing">
      <section className="landing">
        <h1 className="landing__title">Originerd</h1>
        <nav className="landing-nav">
          <div className="landing-nav__item">
            <Link className="nav-link nav-link--emerald" to="/about/">
              <h1 className="nav-link__content nav-link__content--large">
                about
              </h1>
            </Link>
          </div>
          <div className="landing-nav__item">
            <Link className="nav-link nav-link--yellow" to="/posts/">
              <h1 className="nav-link__content nav-link__content--large">
                posts
              </h1>
            </Link>
          </div>
          <div className="landing-nav__item">
            <Link className="nav-link nav-link--cherryred" to="/resume/">
              <h1 className="nav-link__content nav-link__content--large">
                résumé
              </h1>
            </Link>
          </div>
        </nav>
      </section>
    </main>
  </Layout>
)

export default IndexPage
