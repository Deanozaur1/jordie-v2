import React from "react"
import classNames from "classnames"
import { BaseProps } from "../../../@types"

// import "./AboutSection.scss";

type AboutSectionProps = {
  prop?: any
} & BaseProps

const AboutSection: React.FC<AboutSectionProps> = ({
  prop,
  className,
}: AboutSectionProps) => {
  return <div className={classNames(["AboutSection", className])}></div>
}

export default AboutSection
