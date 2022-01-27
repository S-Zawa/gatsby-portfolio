module.exports = {
  siteMetadata: {
    title: `gatsby-portfolio`,
    description: "Hello Gatsby"
  },
  plugins: [
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://qiita.com/mottox2/feed`,
        name: `Qiita`,
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "works",
        path: `${__dirname}/src/works.yaml`,
      }
    },
    "gatsby-plugin-react-helmet"
  ]
}
