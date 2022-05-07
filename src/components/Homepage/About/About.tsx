import React from "react"
import { BaseProps } from "../../../@types"
import { Homepage } from "../../../pages"

import { Image } from "../.."
import {
  AboutBriefs,
  AboutBriefsText,
  AboutBriefsTitles,
  AboutBriefTitle,
  AboutContainer,
  aboutContainerVariants,
  AboutPortraitContainer,
  AboutSection,
  replaceTextVariants,
  SlashDivider,
} from "./About.emotion"
import { itemFadeVariants } from "../../../styles/emotion"
import { AnimatePresence } from "framer-motion"

type AboutProps = {
  data: Homepage["main"]
} & BaseProps

const About: React.FC<AboutProps> = ({
  data: { portrait, briefs },
}: AboutProps) => {
  const [briefSelection, setBriefSelection] = React.useState(0)

  return (
    <AboutSection id="about">
      <AboutContainer
        className="inner-container"
        variants={itemFadeVariants}
        initial="initial"
        exit="exit"
        whileInView="animate"
        viewport={{ amount: 0.3 }}
      >
        <AboutPortraitContainer>
          <Image src={portrait} alt="Jordie portrait" />
        </AboutPortraitContainer>

        <AboutBriefs>
          <AboutBriefsTitles>
            {briefs.map((brief, i) => (
              <AboutBriefTitle
                key={i}
                isSelected={i === briefSelection}
                onClick={() => setBriefSelection(i)}
              >
              {Boolean(i) && <SlashDivider>/</SlashDivider>}
                <span>{brief.title}</span>
              </AboutBriefTitle>
            ))}
          </AboutBriefsTitles>

          <AnimatePresence>
            <AboutBriefsText
              key={briefSelection + "changed"}
              {...replaceTextVariants}
            >
              {briefs[briefSelection].text.text}
            </AboutBriefsText>
          </AnimatePresence>
        </AboutBriefs>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
