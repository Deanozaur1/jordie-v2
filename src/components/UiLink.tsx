import React from "react"
import { isUrl } from "../hooks"
import { GatsbyLinkProps, Link } from "gatsby"
import classNames from "classnames"

type UiLinkProps = {
  to: string
  disabled?: boolean
  className?: string
} & Partial<GatsbyLinkProps<any>>

const UiLink: React.FC<UiLinkProps> = ({
  to,
  children,
  className,
  disabled,
  ...otherProps
}) => {
  const defaults = {
    className,
    ...otherProps,
  }
  const notEmpty = (v: string) => !!v && v !== "#"
  const TextLink = <b {...defaults}>{children}</b>

  switch (true) {
    case disabled:
      return TextLink

    case isUrl(to):
      return (
        <a {...defaults} href={to} target="_blank" rel="noopener">
          {children}
        </a>
      )

    case !isUrl(to) && notEmpty(to):
      return (
        <Link to={to} {...(defaults as any)}>
          {children}
        </Link>
      )

    default:
      return TextLink
  }
}

type UiLineLinkProps = { dataText: string } & UiLinkProps

export const UiLineLink: React.FC<UiLineLinkProps> = (props) => {
  const { to, dataText, children, ...otherProps } = props
  return (
    <UiLink
      to={to}
      className={"line-link"}
      activeClassName={"line-link--active"}
      data-text={dataText}
      {...otherProps}
    >
      <span>{children}</span>
    </UiLink>
  )
}

export default UiLink
