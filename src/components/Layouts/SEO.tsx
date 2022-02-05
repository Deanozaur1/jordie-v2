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

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${withPrefix("/")}img/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`${withPrefix("/")}img/favicon-16x16.png`}
        sizes="16x16"
      />

      <link
        rel="mask-icon"
        href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
        color={config.colors.primary}
      />
      <meta name="theme-color" content={config.colors.primary} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="/" />
      <meta
        property="og:image"
        content={`${withPrefix("/")}img/og-image.jpg`}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={config.site.author} />
      <meta name="twitter:site" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Helmet>
  )
}

export default SEO
