import React, { CSSProperties } from "react"
import Footer from "./Layouts/Footer/Footer"
import SEO from "./Layouts/SEO"
import { BaseProps, PageProps } from "../@types"
import classNames from "classnames"
import Navbar, { NavbarProps } from "./Layouts/Navbar/Navbar"
import { Global, SerializedStyles } from "@emotion/react"
import { $bg, $black, $dark, globalStyles } from "../styles/emotion"
import { Variants, motion, Variant } from "framer-motion"

export type LayoutProps = {
  id?: string
  bodyAttributes?: object
  blackBg?: boolean
  transparentBg?: boolean
  navbarProps?: NavbarProps //NavbarProps
  pageStyle: SerializedStyles
  pageVariants?: { hidden: Variant; visible: Variant }
} & BaseProps &
  PageProps<any>

const Layout: React.FC<LayoutProps> = ({
  id,
  className,
  style,
  bodyAttributes,
  children,
  blackBg,
  transparentBg,
  location,
  navbarProps,
  pageStyle,
  pageVariants,
}) => {
  return (
    <motion.div
      className={classNames(["app-layout", { "black-bg": blackBg }])}
      variants={{
        black: { backgroundColor: $black, color: $bg },
        white: { backgroundColor: $bg, color: $dark },
        transparent: { backgroundColor: null, color: $dark },
      }}
      animate={blackBg ? "black" : transparentBg ? "transparent" : "white"}
      initial={blackBg ? "black" : transparentBg ? "transparent" : "white"}
    >
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
        // FramerMotion
        {...bodyAttributes}
      >
        {children}
      </div>
      <Footer />
    </motion.div>
  )
}

export default Layout
