import React from "react"
import Footer from "./Layouts/Footer/Footer"
import SEO from "./Layouts/SEO"
import "../styles/global.scss"
import "./all.scss"

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <SEO />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
