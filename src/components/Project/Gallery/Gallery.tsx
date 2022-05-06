import React from "react"
import { BaseProps, Project } from "../../../@types"
import { GalleryContainer, GalleryImage } from "./Gallery.emotion"
import { Image } from "../.."

type GalleryProps = { images: Project["gallery"] } & BaseProps

const Gallery: React.FC<GalleryProps> = ({ images }: GalleryProps) => {
  if (!images?.length) return null

  return (
    <GalleryContainer>
      {images?.map((image, index) => (
        <GalleryImage key={index}>
          <Image src={image.gatsbyImageData} alt={image.title} />
        </GalleryImage>
      ))}
    </GalleryContainer>
  )
}

export default Gallery
