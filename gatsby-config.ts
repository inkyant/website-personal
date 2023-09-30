import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Anthony Furman`,
    siteUrl: `https://www.anthonyfurman.com`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass"]
};

export default config;
