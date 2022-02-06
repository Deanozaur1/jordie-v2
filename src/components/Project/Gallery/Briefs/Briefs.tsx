import React from "react"
import { BaseProps, ItemType, Project } from "../../../../@types"

type BriefsProps = {
  data: Partial<Project>
} & BaseProps

const Briefs: React.FC<BriefsProps> = ({ data, className }: BriefsProps) => {
  const list: ItemType[] = [
    { title: "Name", text: data.title },
    { title: "Project", text: data.subtitle },
    { title: "Platforms", text: data.platforms.join(", ") },
    { title: "Brief", text: data.brief },
  ]

  return !list?.length ? null : (
    <main className="project__brief container">
      {list.map(({ title, text }, index) => (
        <div className="brief" key={title + index}>
          <div className="brief__name">{title}</div>
          <div className="brief__description">{text}</div>
        </div>
      ))}
    </main>
  )
}

export default Briefs
