import styled from "@emotion/styled"
import { motion, Variants } from "framer-motion"
import { $navHeight, createVariants } from "../../../styles/emotion"

export const HeroHeader = motion(styled("header")`
  height: calc(100vh - ${$navHeight});
  max-height: calc(100vh - ${$navHeight});
  width: 100%;
  display: grid;
  place-content: center;
  text-align: center;
  position: relative;

  img {
    width: 100%;
  }
`)

export const HeroTitleContainer = motion(styled.div`
  overflow: hidden;
  z-index: 1;
`)

export const HeroTitle = motion(styled("h1")`
  color: #fff;
  font-size: 4.625rem;
  line-height: 0.8;
  font-weight: 300;
  text-shadow: 0px 3px 0px #b2a98f, 0px 0px 10px rgba(0, 0, 0, 0.15),
    0px 0px 2px rgba(0, 0, 0, 0.1), 0px 9px 30px rgba(0, 0, 0, 0.1);
`)

export const HeroBackground = motion(styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d8d8d8;

  .ui-image {
    &,
    &::before,
    &::after {
      background-attachment: fixed;
    }
  }
`)

export const imageVariants = createVariants({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0},
})
export const titlesVariants = createVariants({
  initial: { y: 200 },
  animate: { y: 0 },
  exit: { y: -200 },
})
