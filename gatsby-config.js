module.exports = {
  siteMetadata: {
    title: 'Originerd',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Originerd',
        short_name: 'Originerd',
        start_url: '/',
        background_color: '#41C1C1',
        theme_color: '#41C1C1',
        display: 'minimal-ui',
        icon: 'src/images/originerd.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
  ],
}
