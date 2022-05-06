import React from "react"
import classNames from "classnames"
import { BaseProps } from "../@types"

type xxxProps = {
  prop?: any
} & BaseProps

const xxx: React.FC<xxxProps> = ({ prop, className }: xxxProps) => {
  return <div className={classNames(["xxx", className])}></div>
}

export default xxx
