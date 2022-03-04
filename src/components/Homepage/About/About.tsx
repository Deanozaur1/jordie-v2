import React from "react"
import classNames from "classnames"
import { BaseProps } from "../../../@types"
import { Homepage } from "../../../pages"

import "./About.scss"
import { Image } from "../.."

type AboutProps = {
  data: Homepage["main"]
} & BaseProps

const About: React.FC<AboutProps> = ({
  data: { portrait, briefs },
  className,
}: AboutProps) => {
  const [briefSelection, setBriefSelection] = React.useState(0)

  return (
    <div className="about" id="about">
      <div className="about__container inner-container">
        <div className="about__portrait">
          <Image src={portrait} alt="Jordie portrait" />
        </div>

        <div className="about__briefs">
          <div className="about__briefs-titles">
            {briefs.map((brief, i) => (
              <div
                className={classNames("about__brief-title", {
                  "about__brief-title--selected": i === briefSelection,
                })}
                key={i}
                onClick={() => setBriefSelection(i)}
              >
                {Boolean(i) && <b className="slash-divider">/</b>}
                <span>{brief.title}</span>
              </div>
            ))}
          </div>

          <p className="about__briefs-text">{briefs[briefSelection].text.text}</p>
        </div>
      </div>
    </div>
  )
}

export default About
