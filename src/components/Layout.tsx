import React, { CSSProperties } from "react"
import Footer from "./Layouts/Footer/Footer"
import SEO from "./Layouts/SEO"
import { BaseProps, PageProps } from "../@types"
import classNames from "classnames"
import Navbar, { NavbarProps } from "./Layouts/Navbar/Navbar"
import { Global, SerializedStyles } from "@emotion/react"
import { globalStyles } from "../styles/emotion"

export type LayoutProps = {
  id?: string
  bodyAttributes?: object
  blackBg?: boolean
  navbarProps?: NavbarProps //NavbarProps
  pageStyle: SerializedStyles
} & BaseProps &
  PageProps<any>

const Layout: React.FC<LayoutProps> = ({
  id,
  className,
  style,
  bodyAttributes,
  children,
  blackBg,
  location,
  navbarProps,
  pageStyle,
}) => {
  return (
    <div className={classNames(["app-layout", { "black-bg": blackBg }])}>
      <SEO />
      <Navbar location={location} light={blackBg} {...navbarProps} />
      <Global styles={globalStyles} />
      <div
        id={id}
        className={classNames([
          "jordie",
          className,
          { "white-text": blackBg || navbarProps?.light },
        ])}
        css={pageStyle ?? null}
        style={style}
        {...bodyAttributes}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
