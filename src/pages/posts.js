import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'

const renderPosts = posts =>
  posts.map(({ excerpt, fields, frontmatter, id }) => (
    <article className="card" key={id}>
      <Link to={fields.slug}>
        <h2>{frontmatter.title}</h2>
      </Link>
      <p>{excerpt}</p>
    </article>
  ))

const Posts = ({
  data: {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`posts :: ${title}`}>
      <html lang="en" />
    </Helmet>
    <main className="container container--article">
      {renderPosts(edges.map(edge => edge.node))}
    </main>
  </Layout>
)

Posts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            fields: PropTypes.shape({
              slug: PropTypes.string,
            }),
            frontmatter: PropTypes.shape({
              date: PropTypes.string,
              tags: PropTypes.array,
              title: PropTypes.string,
            }),
            id: PropTypes.string,
          }),
        })
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export const pageQuery = graphql`
  query Posts {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/posts/*/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "YYYY/MM/DD")
          }
          id
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Posts
