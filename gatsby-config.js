require("dotenv").config({ path: `.env` })
const config = require("./config")

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = config.siteMetadata.siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    siteUrl,
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    `gatsby-plugin-emotion`,
    `gatsby-plugin-polished`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteMetadata.title,
        short_name: config.siteMetadata.shortName,
        start_url: `/`,
        theme_color: config.colors.primary,
        background_color: config.colors.background,
        icon: `static/img/favicon.png`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `{
          allSitePage {
            nodes {
              path
            }
          }
          allContentfulProject {
            nodes {
              updatedAt
              createdAt
              slug
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulProject: { nodes: allProjectNodes },
        }) => {
          const projectNodeMap = allProjectNodes.reduce(
            (acc, { slug, ...rest }) => {
              if (slug) acc["/portfolio/" + slug] = rest
              return acc
            },
            {}
          )

          return allPages.map((page) => ({
            ...page,
            ...projectNodeMap[page.path],
          }))
        },
        serialize: ({ path: url, updatedAt, createdAt }) => ({
          url,
          lastmod: updatedAt || createdAt || new Date().toJSON(),
        }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*", disallow: ["/admin"] }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/admin"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/admin"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: config.colors.orange,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/hooks/utils/typography`,
      },
    },
    `gatsby-plugin-image`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 2048 },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // {
    //   resolve: `gatsby-plugin-netlify-cms-paths`,
    //   options: {
    //     // Path to your Netlify CMS config file
    //     cmsConfig: `/static/admin/config.yml`,
    //   },
    // },

    // {
    //   resolve: "gatsby-plugin-netlify-cms",
    //   options: {
    //     modulePath: `${__dirname}/src/cms/cms.ts`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        // purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
}
