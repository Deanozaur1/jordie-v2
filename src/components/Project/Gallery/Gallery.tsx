import React from "react"
import { BaseProps, Project } from "../../../@types"
import {
  fadeInVariants,
  GalleryContainer,
  GalleryImage,
  GalleryImageWrapper,
  imageVariants,
} from "./Gallery.emotion"
import { Image } from "../.."
import {
  itemFadeVariants,
  itemSlideVariants,
  listVariants,
} from "../../../styles/emotion"

type GalleryProps = { images: Project["gallery"] } & BaseProps

const Gallery: React.FC<GalleryProps> = ({ images }: GalleryProps) => {
  if (!images?.length) return null

  return (
    <GalleryContainer {...listVariants}>
      {images?.map((image, index) => (
        <GalleryImageWrapper
          key={index}
          variants={itemSlideVariants}
          transition={{ mass: 1, damping: 1, stiffness: 100 }}
        >
          <GalleryImage
            variants={imageVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: "-10%", once: true }}
            transition={{ mass: 1, duration: 1 }}
            onMouseMove={(e) => {
              console.log(e)
            }}
          >
            <Image src={image.gatsbyImageData} alt={image.title} />
          </GalleryImage>
        </GalleryImageWrapper>
      ))}
    </GalleryContainer>
  )
}

export default Gallery
