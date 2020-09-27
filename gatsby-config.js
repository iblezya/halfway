module.exports = {
  siteMetadata: {
    title: "iBlezYa",
    author: "Gerson Jean Pierre",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "funda",
        path: `${__dirname}/content/fundamentos`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "javascript",
        path: `${__dirname}/content/javascript`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "web",
        path: `${__dirname}/content/web`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "git",
        path: `${__dirname}/content/gitgithub`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "ingles",
        path: `${__dirname}/content/ingles`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "desarrollo",
        path: `${__dirname}/content/desarrollo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            option: {
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`comfortaa`],
        display: "swap",
      },
    },
  ],
}
