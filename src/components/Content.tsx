import classNames from "classnames"
import React from "react"
import { BaseProps } from "../@types"

type HTMLContentProps = { content: any } & BaseProps

const HTMLContent: React.FC<HTMLContentProps> = ({ content, className }) => {
  if (!content) {
    return null
  } else if (typeof content === "string") {
    return (
      <main
        className={classNames(["rich-body", className])}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )
  } else {
    return <main className={className}>{content}</main>
  }
}

export default HTMLContent
