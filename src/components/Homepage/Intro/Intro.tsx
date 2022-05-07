import { AnimatePresence, MotionConfig } from "framer-motion"
import React from "react"
import { Homepage } from "../../../pages"
import {
  IntroItem,
  IntroItemCount,
  IntroItemText,
  introItemVariants,
  IntroSection,
  IntroTitle,
  introVariants,
} from "./Intro.emotion"

type IntroProps = {
  data: Homepage["intro"]
}

const Intro: React.FC<IntroProps> = ({ data: { title, texts } }) => {
  return (
    <IntroSection className="container">
      <IntroTitle>{title}</IntroTitle>
      {texts.map(({ text: { text } }, i) => (
        <IntroItem
          key={i}
          variants={introItemVariants}
          initial="initial"
          exit="exit"
          whileInView="animate"
          viewport={{ margin: "-15%" }}
        >
          <IntroItemCount className="text-symbol">{`0${i + 1}`}</IntroItemCount>
          <IntroItemText className="font-primary text-head--small" key={i}>
            {text}
          </IntroItemText>
        </IntroItem>
      ))}
    </IntroSection>
  )
}

export default Intro
