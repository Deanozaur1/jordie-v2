import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import Hero from "../components/Homepage/Hero/Hero"
import { ItemType, PageProps, JordiePageFC } from "../@types"
import { About, Intro } from "../components/Homepage"

export type Homepage = {
  image: any
  intro: {
    title: string
    texts: string[]
  }
  main: {
    portrait: any
    briefs: ItemType[]
  }
}

export const IndexPageTemplate: React.FC<PageProps<Homepage>> = ({
  data: { image, intro, main },
}) => (
  <React.Fragment>
    <Hero image={image} />
    <Intro data={intro} />
    <About data={main} />
    {/* <MusicRoll /> */}
  </React.Fragment>
)

const IndexPage: JordiePageFC = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark

  return <IndexPageTemplate data={frontmatter} location={location} />
}

IndexPage.layoutProps = {
  className: "home",
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        intro {
          title
          texts
        }
        main {
          portrait {
            childImageSharp {
              gatsbyImageData(
                width: 450
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          briefs {
            title
            text
          }
        }
      }
    }
  }
`
