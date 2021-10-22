import React from "react"
import PropTypes from "prop-types"

export const HTMLContent = ({ content, className }) => (
  <main className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <main className={className}>{content}</main>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
