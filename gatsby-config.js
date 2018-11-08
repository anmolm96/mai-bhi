module.exports = {
  siteMetadata: {
    title: "Mai Bhi",
    author: "Anmol Maini and Samik Maini",
    description: "India's MeToo movement"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113489139-2",
        head: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
