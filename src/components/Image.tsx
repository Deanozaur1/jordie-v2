import React, { CSSProperties, FunctionComponent } from "react"

import { GatsbyImage, GatsbyImageProps, getImage } from "gatsby-plugin-image"
import classNames from "classnames"

type ImageProps = {
  src: any
  alt: string
  width?: string
  style?: CSSProperties
  imgStyle?: CSSProperties
  className?: string
  containerClassName?: string
} & Partial<GatsbyImageProps>

const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  imgStyle,
  width = "100%",
  style,
  className,
  containerClassName,
  ...otherProps
}: Partial<ImageProps>) => {
  const image = getImage(src)

  if (typeof src === "string") {
    return (
      <img
        src={src}
        alt={alt}
        style={{ ...imgStyle }}
        className={classNames(
          "ui-image img static-img",
          className,
          containerClassName
        )}
        loading="lazy"
        draggable="false"
        {...otherProps}
      />
    )
  }

  return image ? (
    <GatsbyImage
      alt={alt}
      image={image}
      imgStyle={imgStyle}
      style={{ ...style }}
      className={classNames("ui-image", containerClassName)}
      imgClassName={classNames("img", className)}
      {...otherProps}
    />
  ) : null
}

export default React.memo(Image)
