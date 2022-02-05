import React from "react"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import { Image, HTMLContent, Layout } from "../components"
import { getSrc } from "gatsby-plugin-image"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  tags,
  title,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <Image src={featuredimage} alt={title} />
            <HTMLContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const src = getSrc(post.frontmatter.featuredimage)

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="LOREM IPSUM | %s">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              property="og:title"
              content={`LOREM IPSUM | ${post.frontmatter.title}`}
            />
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              name="og:description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:image" content={src} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        featuredimage={post.frontmatter.featuredimage}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
