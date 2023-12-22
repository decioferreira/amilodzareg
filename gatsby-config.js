/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Amilod Zareg`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ['G-ABC123'],
      pluginConfig: {
        head: true
      }
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-translate`,
      options: {
        sourceLanguage: 'pt',
        targetLanguages: ['pt', 'en']
      }
    }]
};