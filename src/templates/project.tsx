import React from "react"
import classNames from "classnames"
import config from "../../config"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import { JordiePageFC, PageProps, Project } from "../@types"
import { mapRemarkToPage } from "../hooks"
import { Briefs, Pagination, Gallery } from "../components/Project"
import { Image, UiLink } from "../components"

import "../styles/pages/project.scss"

export type ProjectPageProps = {
  pagination: {
    next: Partial<Project>
    prev: Partial<Project>
  }
} & PageProps<Project>

export const ProjectTemplate: React.FC<ProjectPageProps> = ({
  helmet,
  data,
  pagination,
}) => {
  return (
    <React.Fragment>
      {helmet || ""}

      <header className="project__header">
        <h1 className="head-2">{data.title}</h1>
      </header>
      <Briefs data={data} />

      <div className="project__container inner-container">
        <Gallery images={data.gallery} />
        <Pagination data={pagination} />
      </div>
    </React.Fragment>
  )
}

const ProjectPage: JordiePageFC = ({ data }) => {
  console.log({ bigData: data })
  const src = getSrc(data.project.frontmatter.featuredimage)

  const mapPagination = (next, prev) => {
    return {
      next: next ? mapRemarkToPage(data.next) : null,
      prev: prev ? mapRemarkToPage(data.prev) : null,
    }
  }

  return (
    <ProjectTemplate
      data={mapRemarkToPage(data.project)}
      pagination={mapPagination(data.next, data.prev)}
      helmet={
        <Helmet titleTemplate={`${config.siteMetadata.shortName} - %s`}>
          <title>{data.project.frontmatter.title}</title>
          <meta
            property="og:title"
            content={`${config.siteMetadata.shortName} - ${data.project.frontmatter.title}`}
          />
          <meta property="og:image" content={src} />
        </Helmet>
      }
    />
  )
}

ProjectPage.layoutProps = {
  className: "project",
  blackBg: true,
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectSlugQuery(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    project: markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        brief
        platforms
        gallery {
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
    prev: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
