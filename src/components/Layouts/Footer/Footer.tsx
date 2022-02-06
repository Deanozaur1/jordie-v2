import React from "react"
import { UiLink } from "../.."
import { LinkType } from "../../../@types"
import "./Footer.scss"

type FooterProps = {
  className?: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  const socialLinks: LinkType[] = [
    { text: "IG", url: "https://www.instagram.com/yardendaniel3" },
    { text: "BH", url: "https://www.behance.net/yardendaniel" },
    { text: "PI", url: "mailto:yardendaniel2@gmail.com" },
  ]
  const mapLinks: LinkType[] = [
    { text: "Home", url: "/" },
    { text: "About", url: "/#about" },
    { text: "Inquire", url: "/inquire" },
    { text: "Portfolio", url: "/portfolio" },
  ]
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social-links">
          {socialLinks.map(({ text, url }, index) => (
            <UiLink key={index} to={url} className="footer__social-link">
              {text}
            </UiLink>
          ))}
        </div>

        <div className="footer__copy">
          <p>&copy; {new Date().getFullYear()} Jordie Studio</p>
          <p>All Right Reserved</p>
        </div>

        <div className="footer__map">
          <div className="footer__map-wrap">
            {mapLinks.map(({ text, url }, index) => (
              <UiLink key={index} to={url} className="footer__map-link">
                {text}
              </UiLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
