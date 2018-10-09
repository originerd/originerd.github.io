import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../components/Layout'

class Post extends React.Component {
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
    } = this.props.data
    const { date, title } = frontmatter

    return (
      <Layout>
        <article className="container container--article">
          <h1>{title}</h1>
          <p>{date}</p>
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
  }
`

export default Post
