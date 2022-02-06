import React from "react"
import classNames from "classnames"
import config from "../../config"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import { PageProps, Project } from "../@types"

export const ProjectTemplate: React.FC<PageProps<Project>> = ({
  helmet,
  data: { title },
}) => {
  return (
    <React.Fragment>
      {helmet || ""}

    
    </React.Fragment>
  )
}

const ProjectPage: React.FC<any> = ({ data }) => {
  const { markdownRemark: post } = data
  const src = getSrc(post.frontmatter.featuredimage)

  return (
    <ProjectTemplate
      data={post.frontmatter}
      helmet={
        <Helmet titleTemplate={`${config.siteMetadata.title} | %s`}>
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            property="og:title"
            content={`${config.siteMetadata.title} | ${post.frontmatter.title}`}
          />
          <meta property="og:image" content={src} />
        </Helmet>
      }
    />
  )
}

// @ts-ignore
ProjectPage.layoutProps = {
  className: "project",
}

export default ProjectPage

// export const pageQuery = graphql`
//   query ProjectByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         headerColor
//         briefs {
//           name
//           description
//         }
//         featuredimage {
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//           }
//         }
//         gallery {
//           type
//           padding
//           images {
//             alt
//             image {
//               childImageSharp {
//                 gatsbyImageData(
//                   layout: CONSTRAINED
//                   placeholder: BLURRED
//                   formats: [AUTO, WEBP, AVIF]
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
