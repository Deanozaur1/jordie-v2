import React from "react"
import { AboutPageTemplate } from "../../templates/about-page"

const AboutPagePreview: React.FC<any> = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
)

export default AboutPagePreview
