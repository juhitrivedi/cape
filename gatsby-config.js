let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require("./.contentful")
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

const {
  spaceId,
  accessToken
} = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the delivery token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: "Cape - A Gatsby Contentful Site",
    description: "A Sample of Gatsby Blogging Theme",
    url: "https://cape.netlify.com/",
    twitterUsername: "@abc",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images-contentful`,
          options: {
            maxHeight: 700,
            backgroundColor: 'red',
            linkImagesToOriginal: false,
          },
        }, ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
      }
    }
  ],
}