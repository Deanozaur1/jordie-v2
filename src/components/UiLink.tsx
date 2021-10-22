import React from "react"
import { isUrl } from "../hooks"
import { GatsbyLinkProps, Link } from "gatsby"

type BTLinkProps = {
  to: string
  disabled?: boolean
  className?: string
} & Partial<GatsbyLinkProps<any>>

const BTLink: React.FC<BTLinkProps> = ({
  to,
  children,
  className,
  disabled,
  ...otherProps
}) => {
  const notEmpty = (v: string) => !!v && v !== "#"
  const TextLink = <b className={className}>{children}</b>

  switch (true) {
    case disabled:
      return TextLink

    case isUrl(to):
      return (
        <a className={className} href={to} target="_blank" rel="noopener">
          {children}
        </a>
      )

    case !isUrl(to) && notEmpty(to):
      return (
        <Link className={className} to={to} {...(otherProps as any)}>
          {children}
        </Link>
      )

    default:
      return TextLink
  }
}

export default BTLink
