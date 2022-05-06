import React from "react"
import { BaseProps, Project } from "../../../@types"
import { Image, UiLink } from "../.."
import { ProjectCardBody, ProjectCardWrap } from "./ProjectCard.emotion"
import { UiLineLink } from "../../UiLink"

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
    <ProjectCardWrap reversed={reversed}>
      <Image src={data.featuredImage.gatsbyImageData} alt={alt} />

      <ProjectCardBody>
        <h3 className="p-card__title">{data.title}</h3>
        <p className="p-card__subtitle">{data.subtitle}</p>
        <p className="p-card__description">{data.shortBrief}</p>

        <UiLineLink to={data.slug} dataText={"WATCH"}>
          WATCH
        </UiLineLink>
      </ProjectCardBody>
    </ProjectCardWrap>
  )
}

export default ProjectCard
