import React from "react"
import { BaseProps, Project } from "../../../@types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  BriefsContainer,
  BriefDescription,
  Brief,
  BriefName,
  breifsVariants,
  breifsItemVariants,
} from "./Briefs.emotion"
import { itemSlideVariants, listVariants } from "../../../styles/emotion"

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
    <BriefsContainer className="inner-container" {...listVariants}>
      {list.map(
        ({ title, text }, index) =>
          text && (
            <Brief key={title + index} variants={itemSlideVariants}>
              <BriefName>{title}</BriefName>
              <BriefDescription>{text}</BriefDescription>
            </Brief>
          )
      )}
    </BriefsContainer>
  )
}

export default Briefs
