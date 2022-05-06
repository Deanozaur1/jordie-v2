import React from "react"
import classNames from "classnames"
import { BaseProps } from "../../../@types"
import { JordieStudioLogo, UiLink } from "../.."
import { Nav, NavItem, NavLinks } from "./Navbar.emotion"
import { mq } from "../../../styles/emotion"
import { UiLineLink } from "../../UiLink"

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
    <Nav className={classNames(["container"])} light={light}>
      <UiLink to="/" className="nav__logo">
        <JordieStudioLogo
          css={{
            width: "200px",
            height: "60px",
            [mq("md")]: {
              height: "48px",
              width: "auto",
            },
          }}
        />
      </UiLink>

      <NavLinks>
        {links.map(({ text, url }, index) => (
          <NavItem key={index}>
            <UiLineLink to={url} dataText={text}>
              {text}
            </UiLineLink>
          </NavItem>
        ))}
      </NavLinks>
    </Nav>
  )
}

export default Navbar
