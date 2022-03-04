import React from "react"
import classNames from "classnames"
import { BaseProps, Project } from "../../../@types"
import { Image, UiLink } from "../.."
import { Paginated, ProjectPageProps } from "../../../templates/project"

type PaginationProps = {
  data: Paginated<Project>
  prefix: string
} & BaseProps

const Pagination: React.FC<PaginationProps> = ({
  data,
  className,
  prefix,
}: PaginationProps) => {
  return (
    <div className={classNames(["p-navigation", className])}>
      {data.prev?.slug && (
        <UiLink to={[prefix, data.prev.slug].join("/")} className="nav-prev">
          {data.prev.title}
        </UiLink>
      )}
      {data.next?.slug && (
        <UiLink to={[prefix, data.next.slug].join("/")} className="nav-next">
          {data.next.title}
        </UiLink>
      )}
    </div>
  )
}

export default Pagination
