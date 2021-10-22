import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug} className="link">
        <span>{post.node.frontmatter?.title}</span>
      </Link>
    </li>
  ))
  const tag = pageContext.tag
  const title = data.site.siteMetadata.title
  const totalCount = data.allMarkdownRemark.totalCount
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${tag}”`

  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`} />
      <div className="container-width-l" title={"Thats what we found"}>
        <h3>{tagHeader}</h3>
        <ul>{postLinks}</ul>
        <div>
          <Link to="/tags/" className="link">
            <span>Browse all tags</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
