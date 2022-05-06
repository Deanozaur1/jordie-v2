import React from "react"
import { BaseProps, Paginated, Project } from "../../../@types"
import { UiLink } from "../.."
import { PaginationContainer, PagiNext, PagiPrev } from "./Pagination.emotion"

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
    <PaginationContainer>
      {data.prev?.slug && (
        <UiLink to={[prefix, data.prev.slug].join("/")} css={PagiPrev}>
          {data.prev.title}
        </UiLink>
      )}
      {data.next?.slug && (
        <UiLink to={[prefix, data.next.slug].join("/")} css={PagiNext}>
          {data.next.title}
        </UiLink>
      )}
    </PaginationContainer>
  )
}

export default Pagination
