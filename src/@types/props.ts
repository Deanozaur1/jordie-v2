import { CSSProperties } from "react"

export type BaseProps = {
  onClick?: () => void
  onChange?: (id: number) => void
  style?: CSSProperties
  id?: string
  className?: string
  children?: React.ReactNode
}

export type PageProps<T> = {
  location?: Location & any
  pageContext?: any
  content?: any
  helmet?: React.ReactNode
  data?: T extends T[] ? T[] : T
  children?: React.ReactNode
  isPreviewMode?: boolean
}

export type SlotType = React.FC<any> | any
