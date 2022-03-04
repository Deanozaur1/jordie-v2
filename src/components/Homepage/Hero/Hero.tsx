import React from "react"
import { Image } from "../.."
import { ContentfulImage } from "../../../@types"

import "./Hero.scss"

type HeroProps = {
  image: ContentfulImage
}

const Hero: React.FC<HeroProps> = ({ image }) => {
  return (
    <header className="hero">
      <div className="hero__title-wrap">
        <h1 className="hero__title">
          DESIGN STUDIO
          <br />
          FOR <i>INSPIRING</i> DESIGN'S
        </h1>
      </div>

      <div className="hero__bg">
        <Image
          src={image.gatsbyImageData}
          alt={image.title}
          style={{ height: "100%" }}
          imgStyle={{ height: "100%", objectPosition: "50% 100%" }}
        />
      </div>
    </header>
  )
}

export default Hero
