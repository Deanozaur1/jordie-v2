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
  AboutPortraitContainer,
  AboutSection,
  SlashDivider,
} from "./About.emotion"

type AboutProps = {
  data: Homepage["main"]
} & BaseProps

const About: React.FC<AboutProps> = ({
  data: { portrait, briefs },
}: AboutProps) => {
  const [briefSelection, setBriefSelection] = React.useState(0)

  return (
    <AboutSection id="about">
      <AboutContainer className="inner-container">
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

          <AboutBriefsText>{briefs[briefSelection].text.text}</AboutBriefsText>
        </AboutBriefs>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
