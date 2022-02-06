const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const ignoredPaths = ["footer", "settings"]

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    const allProjects = posts.filter(
      (edge) => edge.node.frontmatter.templateKey === "project"
    )

    const getProjectPagination = (id) => {
      const index = allProjects.findIndex((project) => project.node.id === id)
      if (index === -1) return {}

      const prev = index === 0 ? null : allProjects[index - 1]
      const next =
        index === allProjects.length - 1 ? null : allProjects[index + 1]

      const protectReturn = (val) => {
        if (!val) return null
        // else if (val.node.id === id) return null
        else return val.node.id
      }

      return {
        previousPostId: protectReturn(prev),
        nextPostId: protectReturn(next),
      }
    }

    posts.forEach((edge, index) => {
      const id = edge.node.id
      const templateKey = edge.node.frontmatter.templateKey
      const isTargetedPost = Boolean(edge.node.frontmatter.targetUrl)

      if (ignoredPaths.some((p) => templateKey.includes(p)) || isTargetedPost) {
        return
      }
      let pagination = {}
      if (templateKey === "project") {
        pagination = getProjectPagination(id)
      }

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/${String(templateKey)}.tsx`),
        // additional data can be passed via context
        context: {
          id,
          ...pagination,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
