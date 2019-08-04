module.exports = {
  siteMetadata: {
    title: 'Portfolio & Blog',
    author: 'NallyZ'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-playground',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 750,
              LinkImageToOriginal: false
            },
          },
        ],
      },
    },
  ]
}