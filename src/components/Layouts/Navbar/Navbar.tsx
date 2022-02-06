import React from "react"
import classNames from "classnames"
import { BaseProps } from "../../../@types"
import { JordieStudioLogo, UiLink } from "../.."

import "./Navbar.scss"

export type NavbarProps = {
  light?: boolean
  location?: any
} & BaseProps

const Navbar: React.FC<NavbarProps> = ({ light, className }: NavbarProps) => {
  const links = [
    { text: "Portfolio", url: "/portfolio" },
    { text: "Inquire", url: "/inquire" },
  ]

  return (
    <nav
      className={classNames([
        "nav container",
        {
          "nav--light": light,
        },
      ])}
    >
      <UiLink to="/">
        <JordieStudioLogo className="nav__logo" width="200" />
      </UiLink>

      <ul className="nav__links">
        {links.map(({ text, url }, index) => (
          <li className="nav__item" key={index}>
            <UiLink to={url}>{text}</UiLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
