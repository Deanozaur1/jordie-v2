import React from "react"
import classNames from "classnames"
import { BaseProps, JordiePageFC, PageProps, Project } from "../@types"
import { graphql } from "gatsby"
import { mapRemarkToPage } from "../hooks"
import { StaticImage } from "gatsby-plugin-image"
import { ProjectCard } from "../components"
import config from "../../config"
import { Helmet } from "react-helmet"
import {
  pCardVariants,
  PortfolioContainer,
  PortfolioPageWrapper,
  PortfolioProjects,
  portfolioVariants,
} from "../styles/pages/portfolio"
import { motion } from "framer-motion"
import { BGVariants, itemSlideVariants, listVariants } from "../styles/emotion"
const MotionPCard = motion(ProjectCard)
const PortfolioPageTemplate: JordiePageFC<Project[]> = ({ data }) => {
  return (
    <PortfolioPageWrapper>
      <Helmet titleTemplate={`${config.siteMetadata.shortName} - %s`}>
        <title>Portfolio</title>
      </Helmet>

      <motion.div className="portfolio__bg-wrap" {...BGVariants()}>
        <StaticImage
          layout="fullWidth"
          className="portfolio__bg"
          src="../../static/img/media/waves-bg.jpg"
          alt="Waves background"
        />
      </motion.div>

      <PortfolioContainer className="inner-container">
        <PortfolioProjects {...listVariants}>
          {data.map((project, i) => (
            <MotionPCard
              variants={itemSlideVariants}
              key={project.id + i}
              data={project}
              reversed={Boolean(i % 2)}
            />
          ))}
        </PortfolioProjects>
      </PortfolioContainer>
    </PortfolioPageWrapper>
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
