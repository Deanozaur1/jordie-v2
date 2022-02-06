import React from "react"
import classNames from "classnames"
import { BaseProps, Project } from "../../../@types"
import { Image, UiLink } from "../.."
import { ProjectPageProps } from "../../../templates/project"

type PaginationProps = {
  data: ProjectPageProps["pagination"]
} & BaseProps

const Pagination: React.FC<PaginationProps> = ({
  data,
  className,
}: PaginationProps) => {
  return (
    <div className={classNames(["p-navigation", className])}>
      {data.prev?.slug && (
        <UiLink to={data.prev.slug} className="nav-prev">
          {data.prev.title}
        </UiLink>
      )}
      {data.next?.slug && (
        <UiLink to={data.next.slug} className="nav-next">
          {data.next.title}
        </UiLink>
      )}
    </div>
  )
}

export default Pagination
