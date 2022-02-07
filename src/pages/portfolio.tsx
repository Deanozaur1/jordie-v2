import React from "react"
import classNames from "classnames"
import { BaseProps, JordiePageFC, PageProps, Project } from "../@types"
import { graphql } from "gatsby"
import { mapRemarkToPage } from "../hooks"
import { StaticImage } from "gatsby-plugin-image"
import { ProjectCard } from "../components"
import config from "../../config"

import "../styles/pages/portfolio.scss"
import { Helmet } from "react-helmet"

const PortfolioPageTemplate: JordiePageFC<Project[]> = ({ data }) => {
  console.log({ data })
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

      <div className="portfolio__container inner-container">
        <div className="portfolio__projects">
          {data.map((project, i) => (
            <ProjectCard
              key={project.id + i}
              data={project}
              reversed={Boolean(i % 2)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const PortfolioPage: JordiePageFC = ({ data, location }) => {
  return (
    <PortfolioPageTemplate
      data={mapRemarkToPage(data.allMarkdownRemark)}
      location={location}
    />
  )
}

PortfolioPage.layoutProps = {
  className: "portfolio",
  blackBg: true,
}

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioTemplateQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            shortBrief
            featuredimage {
              childImageSharp {
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
    }
  }
`
// duotone: { highlight: "#bbbebb", shadow: "#233538" }
