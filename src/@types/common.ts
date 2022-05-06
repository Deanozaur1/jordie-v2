import { ContentfulImage } from "./contentful"
import React from "react"
import { PageProps } from "gatsby"
import { LayoutProps } from "../components"

export type JordiePageFC<T = any> = React.FC<Partial<PageProps<T>>> & {
  layoutProps?: Partial<LayoutProps>
}

export interface ItemType {
  title: string
  text: string
}
export interface LinkType {
  text: string
  url: string
}
export interface Social {
  type: string
  url: string
}

export type CardType = {
  date?: Date
  title: string
  subtitle: string
  featuredpost?: boolean
  featuredimage: any
  slug?: string
  targetUrl?: string
}

export type Paginated<T = any> = { next: T; prev: T } & T

export type CmsItem = {
  id: string
  title: string
  subtitle: string
  slug: string
  date: Date
  modifiedAt: Date
}

export type Project = CmsItem & {
  title: string
  subtitle: string
  platforms: any
  brief: any
  shortBrief: string
  featuredImage: ContentfulImage
  gallery: { gatsbyImageData: any; description: string; title: string }[]
}
