import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Anthony Furman`,
    siteUrl: `https://www.anthonyfurman.com`
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
  flags: {
    PARALLEL_QUERY_RUNNING: false
  }
};

export default config;
