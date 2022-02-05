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


CMS.registerEventListener({
    name: "prePublish",
    handler: ({ entry }) =>
        entry.get("data").set("modifiedAt", new Date().toJSON()),
})

CMS.registerEventListener({
    name: "preSave",
    handler: ({ entry }) =>
        entry.get("data").set("modifiedAt", new Date().toJSON()),
})
