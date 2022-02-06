import React from "react"
import { BlogPostTemplate } from "../../templates/blog-post"

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
      featuredimage={entry.getIn(["data", "featuredimage"])}
    />
  )
}


export default BlogPostPreview
