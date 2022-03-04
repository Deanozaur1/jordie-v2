import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import useSiteMetadata from "./SiteMetadata"
import config from "../../../config"

const SEO: React.FC = () => {
  const { title, description } = config.siteMetadata
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={config.colors.primary} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix("/")}img/og-image.png`}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={config.site.author} />
      <meta name="twitter:site" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
