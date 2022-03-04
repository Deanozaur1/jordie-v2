import React from "react"
import { BaseProps, ItemType, Project } from "../../../@types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

type BriefsProps = {
  data: Partial<Project>
} & BaseProps

const Briefs: React.FC<BriefsProps> = ({ data, className }: BriefsProps) => {
  const list = [
    { title: "Name", text: data.title },
    { title: "Project", text: data.subtitle },
    {
      title: "Platforms",
      text: data.platforms?.length ? data.platforms.join(", ") : null,
    },
    { title: "Brief", text: renderRichText(data.brief) },
  ]

  return !list?.length ? null : (
    <main className="project__brief inner-container">
      {list.map(
        ({ title, text }, index) =>
          text && (
            <div className="brief" key={title + index}>
              <div className="brief__name">{title}</div>
              <div className="brief__description">{text}</div>
            </div>
          )
      )}
    </main>
  )
}

export default Briefs
