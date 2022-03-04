import React from "react"
import classNames from "classnames"
import { BaseProps, Project } from "../../../@types"
import { Image } from "../.."

type GalleryProps = {
  images: Project["gallery"]
} & BaseProps

const Gallery: React.FC<GalleryProps> = ({
  images,
  className,
}: GalleryProps) => {
  console.log(images)
  return (
    <div className={classNames(["p-gallery", className])}>
      {images?.map((image, index) => (
        <div className="p-gallery__item" key={index}>
          <Image
            src={image.gatsbyImageData}
            alt={image.title}
            style={{ height: 550, width: 550 }}
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
