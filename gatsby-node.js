const _ = require("lodash")
const path = require("path")

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
  })
}
