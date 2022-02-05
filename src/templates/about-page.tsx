import React from "react"
import { graphql } from "gatsby"
import { Layout, HTMLContent } from "../components"

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  return (
    <section className="section section--gradient">
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <HTMLContent className="content" content={content} />
    </section>
  )
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
