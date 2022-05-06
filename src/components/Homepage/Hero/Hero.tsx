import React from "react"
import { Image } from "../.."
import { ContentfulImage } from "../../../@types"
import { HeroBackground, HeroHeader, HeroTitle } from "./Hero.emotion"

type HeroProps = {
  image: ContentfulImage
}

const Hero: React.FC<HeroProps> = ({ image }) => {
  return (
    <HeroHeader>
      <HeroTitle>
        DESIGN STUDIO
        <br />
        FOR <i>INSPIRING</i> DESIGN'S
      </HeroTitle>

      <HeroBackground>
        <Image
          src={image.gatsbyImageData}
          alt={image.title}
          style={{ height: "100%" }}
          imgStyle={{ height: "100%", objectPosition: "50% 100%" }}
        />
      </HeroBackground>
    </HeroHeader>
  )
}

export default Hero
