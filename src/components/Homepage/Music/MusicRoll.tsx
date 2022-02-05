import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { navigate } from "gatsby-link"
import Image from "../../Image"
import "./Music.scss"

export const FeedRollRaw = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div className="feed-roll">
      From blog roll
      {posts &&
        posts.map(({ node: post }) => {
          const { title, subtitle } = post.frontmatter
          return (
            <article
              className={"feed"}
              key={post.id}
              onClick={() => navigate(post.fields.slug)}
            >
              <div className="feed__header">
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
              <div className="feed__featured-thumbnail">
                {/* Image here featuredimage*/}
                <Image src={post.frontmatter.featuredimage} alt={title} />
              </div>
            </article>
          )
        })}
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query FeedRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
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
        }
      }
    `}
    render={(data) => <FeedRollRaw data={data} />}
  />
)
