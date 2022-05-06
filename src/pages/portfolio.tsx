import React from "react"
import classNames from "classnames"
import { BaseProps, JordiePageFC, PageProps, Project } from "../@types"
import { graphql } from "gatsby"
import { mapRemarkToPage } from "../hooks"
import { StaticImage } from "gatsby-plugin-image"
import { ProjectCard } from "../components"
import config from "../../config"
import { Helmet } from "react-helmet"
import { PortfolioContainer, PortfolioProjects, PortfolioStyles } from "../styles/pages/portfolio"

const PortfolioPageTemplate: JordiePageFC<Project[]> = ({ data }) => {
  return (
    <>
      <Helmet titleTemplate={`${config.siteMetadata.shortName} - %s`}>
        <title>Portfolio</title>
      </Helmet>

      <div className="portfolio__bg-wrap">
        <StaticImage
          layout="fullWidth"
          className="portfolio__bg"
          src="../../static/img/media/waves-bg.jpg"
          alt="Waves background"
        />
      </div>

      <PortfolioContainer className="inner-container">
        <PortfolioProjects>
          {data.map((project, i) => (
            <ProjectCard
              key={project.id + i}
              data={project}
              reversed={Boolean(i % 2)}
            />
          ))}
        </PortfolioProjects>
      </PortfolioContainer>
    </>
  )
}

const PortfolioPage: JordiePageFC = ({ data, location }) => {
  return (
    <PortfolioPageTemplate
      data={mapRemarkToPage(data.allContentfulProject)}
      location={location}
    />
  )
}

PortfolioPage.layoutProps = {
  className: "portfolio",
  blackBg: true,
  pageStyle: PortfolioStyles
}

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioTemplateQuery {
    allContentfulProject(
      filter: { featuredProject: { eq: true } }
      sort: { fields: gallery___createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          subtitle
          brief {
            raw
          }
          featuredImage {
            title
            description
            gatsbyImageData(
              width: 550
              aspectRatio: 1
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
// duotone: { highlight: "#bbbebb", shadow: "#233538" }
