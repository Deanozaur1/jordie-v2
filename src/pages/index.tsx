import React from "react"
import { graphql } from "gatsby"
import { Hero, About, Intro } from "../components/Homepage"
import {
  PageProps,
  JordiePageFC,
  CmsListItem,
  ContentfulImage,
} from "../@types"

export type Homepage = {
  heroBg: ContentfulImage
  intro: {
    title: string
    texts: CmsListItem[]
  }
  main: {
    portrait: ContentfulImage
    briefs: CmsListItem[]
  }
}

export const IndexPageTemplate: React.FC<PageProps<Homepage>> = ({
  data: { heroBg, intro, main },
}) => (
  <React.Fragment>
    <Hero image={heroBg} />
    <Intro data={intro} />
    <About data={main} />
  </React.Fragment>
)

const IndexPage: JordiePageFC = ({ data, location }) => {
  const { contentfulHomePage: pageData } = data

  return (
    <IndexPageTemplate
      location={location}
      data={{
        heroBg: pageData.heroBg,
        main: {
          portrait: pageData.portrait,
          briefs: pageData.briefTexts,
        },
        intro: {
          texts: pageData.introTexts,
          title: pageData.introTitle,
        },
      }}
    />
  )
}

IndexPage.layoutProps = {
  className: "home",
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    contentfulHomePage {
      title
      heroBg {
        title
        description
        gatsbyImageData(
          quality: 100
          layout: FULL_WIDTH
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
      introTitle
      introTexts {
        title
        text {
          text
        }
      }
      portrait {
        gatsbyImageData(
          quality: 100
          width: 450
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        title
        description
      }
      briefTexts {
        title
        text {
          text
        }
      }
    }
  }
`
