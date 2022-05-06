import React from "react"
import { Homepage } from "../../../pages"
import {
  IntroItem,
  IntroItemCount,
  IntroItemText,
  IntroSection,
  IntroTitle,
} from "./Intro.emotion"

type IntroProps = {
  data: Homepage["intro"]
}

const Intro: React.FC<IntroProps> = ({ data: { title, texts } }) => {
  return (
    <IntroSection className="container">
      <IntroTitle>{title}</IntroTitle>

      {texts.map(({ text: { text } }, i) => (
        <IntroItem key={i}>
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
