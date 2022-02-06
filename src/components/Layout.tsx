import React from "react"
import Footer from "./Layouts/Footer/Footer"
import SEO from "./Layouts/SEO"
import "../styles/global.scss"
import "./all.scss"
import { BaseProps, PageProps } from "../@types"
import classNames from "classnames"
import Navbar, { NavbarProps } from "./Layouts/Navbar/Navbar"

export type LayoutProps = {
  id?: string
  transparentUntil?: number
  bodyAttributes?: object
  blackBg?: boolean
  navbarProps?: NavbarProps //NavbarProps
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
}) => {
  return (
    <div className={classNames(["app-layout", { "black-bg": blackBg }])}>
      <SEO />
      <Navbar location={location} light={blackBg} {...navbarProps} />
      <div
        id={id}
        className={classNames([
          "jordie",
          className,
          { "white-text": blackBg || navbarProps?.light },
        ])}
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
