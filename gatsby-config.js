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
        protocol: "https",
        hostname: "rp-gatsby-site.s3-website-us-east-1.amazonaws.com",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
  ],
}
