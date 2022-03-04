import React from "react"
import classNames from "classnames"
import { BaseProps, Project } from "../../../@types"
import { Image, UiLink } from "../.."

import "./ProjectCard.scss"

type ProjectCardProps = {
  data: Project
  reversed?: boolean
} & BaseProps

const ProjectCard: React.FC<ProjectCardProps> = ({
  data,
  reversed,
  className,
}: ProjectCardProps) => {
  const alt = `${data.subtitle}: ${data.title}`
  return (
    <div
      className={classNames([
        "p-card",
        { "p-card--reversed": reversed },
        className,
      ])}
    >
      <Image src={data.featuredImage.gatsbyImageData} alt={alt} />

      <div className="p-card__body">
        <h3 className="p-card__title">{data.title}</h3>
        <p className="p-card__subtitle">{data.subtitle}</p>
        <p className="p-card__description">{data.shortBrief}</p>

        <UiLink to={data.slug}>WATCH</UiLink>
      </div>
    </div>
  )
}

export default ProjectCard
