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
  tags?: string[]
}
