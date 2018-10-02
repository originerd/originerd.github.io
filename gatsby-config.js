module.exports = {
  siteMetadata: {
    title: 'Originerd',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
  ],
}
