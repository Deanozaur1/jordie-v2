import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
import cloudinary from "netlify-cms-media-library-cloudinary"
import { typographyCSS } from "../hooks"

import AboutPagePreview from "./preview-templates/AboutPagePreview"
import BlogPostPreview from "./preview-templates/BlogPostPreview"
import IndexPagePreview from "./preview-templates/IndexPagePreview"

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
CMS.registerPreviewStyle(typographyCSS, { raw: true })

CMS.registerPreviewTemplate("index", IndexPagePreview as any)
CMS.registerPreviewTemplate("about", AboutPagePreview as any)
CMS.registerPreviewTemplate("blog", BlogPostPreview as any)

// npm i gatsby-source-filesystem@latest gatsby-transformer-remark@latest gatsby-transformer-sharp@latest netlify-cms-app@latest node-sass@latest
