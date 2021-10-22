import React from "react"
import { Link } from "gatsby"

import logo from "../../../img/logo.svg"
import facebook from "../../../img/social/facebook.svg"
import instagram from "../../../img/social/instagram.svg"
import twitter from "../../../img/social/twitter.svg"
import vimeo from "../../../img/social/vimeo.svg"

import "./Footer.scss"

type FooterProps = {
  className?: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const Footer = ({ className }: FooterProps) => {
  return <footer className="footer"></footer>
}

export default Footer
