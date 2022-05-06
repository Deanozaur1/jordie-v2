import React from "react"
import config from "../../config"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import { JordiePageFC, PageProps, Paginated, Project } from "../@types"
import { Briefs, Pagination, Gallery } from "../components/Project"

import {
  ProjectHeader,
  ProjectPageContainer,
  ProjectPageWrapper,
} from "../styles/pages/project"

export type ProjectPageProps = {} & PageProps<Paginated<Project>>

export const ProjectTemplate: React.FC<ProjectPageProps> = ({
  helmet,
  data,
}) => {
  return (
    <React.Fragment>
      {helmet || ""}

      <ProjectHeader>
        <h1 className="head-2">{data.title}</h1>
      </ProjectHeader>

      <Briefs data={data} />

      <ProjectPageContainer className="inner-container">
        <Gallery images={data.gallery} />
        <Pagination data={data} prefix="/portfolio" />
      </ProjectPageContainer>
    </React.Fragment>
  )
}

const ProjectPage: JordiePageFC = ({ data: { current, next, prev } }) => {
  const src = getSrc(current.featuredImage)

  return (
    <ProjectTemplate
      data={{ ...current, next, prev }}
      helmet={
        <Helmet titleTemplate={`${config.siteMetadata.shortName} - %s`}>
          <title>{current.title}</title>
          <meta
            property="og:title"
            content={`${config.siteMetadata.shortName} - ${current.title}`}
          />
          <meta property="og:image" content={src} />
        </Helmet>
      }
    />
  )
}

ProjectPage.layoutProps = {
  pageStyle: ProjectPageWrapper,
  blackBg: true,
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectSlugQuery($id: String!, $prevId: String, $nextId: String) {
    current: contentfulProject(id: { eq: $id }) {
      title
      subtitle
      brief {
        raw
      }
      featuredImage {
        title
        description
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      gallery {
        title
        description
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    next: contentfulProject(id: { eq: $nextId }) {
      title
      slug
    }
    prev: contentfulProject(id: { eq: $prevId }) {
      title
      slug
    }
  }
`
