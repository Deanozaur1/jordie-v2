import React from "react"
import { Image } from "../.."
import { ContentfulImage } from "../../../@types"
import {
  imageVariants,
  HeroBackground,
  HeroHeader,
  HeroTitle,
  titlesVariants,
  HeroTitleContainer,
} from "./Hero.emotion"

type HeroProps = {
  image: ContentfulImage
}

const Hero: React.FC<HeroProps> = ({ image }) => {
  return (
    <HeroHeader>
      <HeroTitleContainer>
        <HeroTitle
          {...titlesVariants}
          transition={{ damping: 60, stiffness: 500, duration: 0.2 }}
        >
          DESIGN STUDIO
          <br />
          FOR <i>INSPIRING</i> DESIGN'S
        </HeroTitle>
      </HeroTitleContainer>

      <HeroBackground {...imageVariants}>
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
