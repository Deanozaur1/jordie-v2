const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const ignoredPaths = ["footer", "settings"]

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulProject(sort: { fields: gallery___createdAt }) {
        edges {
          node {
            title
            id
            slug
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const contentfulProjects = result.data.allContentfulProject.edges


    contentfulProjects.forEach((edge) => {
      const id = edge.node.id
      const slug = edge.node.slug

      createPage({
        path: `/portfolio/${slug}`,
        component: path.resolve(`src/templates/project.tsx`),
        context: {
          id,
          nextId: edge.next?.id,
          prevId: edge.previous?.id,
        },
      })
    })

    // posts.forEach((edge, index) => {
    //   const id = edge.node.id
    //   const templateKey = edge.node.frontmatter.templateKey
    //   const isTargetedPost = Boolean(edge.node.frontmatter.targetUrl)

    //   if (ignoredPaths.some((p) => templateKey.includes(p)) || isTargetedPost) {
    //     return
    //   }
    //   let pagination = {}
    //   if (templateKey === "project") {
    //     pagination = getProjectPagination(id)
    //   }

    //   createPage({
    //     path: edge.node.fields.slug,
    //     component: path.resolve(`src/templates/${String(templateKey)}.tsx`),
    //     // additional data can be passed via context
    //     context: {
    //       id,
    //       ...pagination,
    //     },
    //   })
    // })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
