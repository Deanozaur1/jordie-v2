import React from "react"
import { UiLink } from "../.."
import { LinkType } from "../../../@types"
import { UiLineLink } from "../../UiLink"
import {
  FooterContainer,
  FooterCopyright,
  FooterMap,
  FooterMapWrap,
  FooterSection,
  FooterSocialLinks,
} from "./Footer.emotion"

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
    <FooterSection>
      <FooterContainer className="container">
        <FooterSocialLinks>
          {socialLinks.map(({ text, url }, index) => (
            <UiLineLink key={index} to={url} dataText={text}>
              {text}
            </UiLineLink>
          ))}
        </FooterSocialLinks>

        <FooterCopyright>
          <p>&copy; {new Date().getFullYear()} Jordie Studio</p>
          <p>All Right Reserved</p>
        </FooterCopyright>

        <FooterMap>
          <div css={FooterMapWrap}>
            {mapLinks.map(({ text, url }, index) => (
              <UiLineLink key={index} to={url} dataText={text}>
                {text}
              </UiLineLink>
            ))}
          </div>
        </FooterMap>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
