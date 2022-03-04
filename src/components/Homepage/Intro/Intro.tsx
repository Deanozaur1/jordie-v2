import React from "react"
import { Homepage } from "../../../pages"

import "./Intro.scss"

type IntroProps = {
  data: Homepage["intro"]
}

const Intro: React.FC<IntroProps> = ({ data: { title, texts } }) => {
  return (
    <section className="intro container">
      <span className="intro__title">{title}</span>

      {texts.map(({ text: { text } }, i) => (
        <div className="intro__item" key={i}>
          <span className="intro__item-count text-symbol">{`0${i + 1}`}</span>
          <p className="intro__item-text font-primary text-head--small" key={i}>
            {text}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Intro
