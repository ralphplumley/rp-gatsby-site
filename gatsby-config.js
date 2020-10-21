module.exports = {
  siteMetadata: {
    title: `Ralph Plumley`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ralph Plumley`,
        short_name: `Ralph Plumley`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "rp-gatsby-site",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
  ],
}
