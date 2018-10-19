import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment-timezone'
import React from 'react'

import Layout from '../components/Layout'

class Post extends React.Component {
  renderDate(date) {
    const seoulTime = moment(date)
      .add(-9, 'hours')
      .format('lll')

    return <p className="date">{seoulTime}</p>
  }

  renderTags() {
    const { tags } = this.props.data.markdownRemark.frontmatter

    if (!tags) {
      return null
    }

    return <p>{tags.join(', ')}</p>
  }

  render() {
    const {
      markdownRemark: { frontmatter, html },
      site: { siteMetadata },
    } = this.props.data
    const { date, title } = frontmatter

    return (
      <Layout>
        <Helmet title={`${title} :: ${siteMetadata.title}`}>
          <html lang="en" />
        </Helmet>
        <article className="container container--article">
          <h1>{title}</h1>
          {this.renderDate(date)}
          {this.renderTags()}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      excerpt: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        tags: PropTypes.array,
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      frontmatter {
        date
        tags
        title
      }
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Post
