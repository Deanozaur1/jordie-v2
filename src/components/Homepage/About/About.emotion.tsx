import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { darken, lighten } from "polished"
import {
  $bg,
  $black,
  $bodyText,
  $dark,
  createVariants,
  mq,
} from "../../../styles/emotion"

export const AboutSection = styled.section`
  background-color: ${$black};
  min-height: 960px;

  display: flex;
  align-items: center;

  ${mq("<md")} {
    padding: 6rem 0;
    align-items: flex-start;
  }
`
export const AboutContainer = motion(styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${mq("<md")} {
    flex-direction: column;
    max-width: 450px;
  }
`)

export const AboutPortraitContainer = motion(styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`)
export const AboutBriefs = motion(styled.div`
  position: relative;
  flex: 1;
  min-height: 300px;
`)

export const AboutBriefsTitles = styled.div`
  display: flex;
  align-items: center;
`
export const SlashDivider = styled.b`
  text-decoration: none !important;
  color: $dark !important;
  margin: 0 0.25rem;
`
export const AboutBriefTitle: any = styled.div`
  cursor: pointer;
  color: ${lighten(0.15, $dark)};

  &:hover {
    color: ${darken(0.2, $bodyText)};
  }

  ${(props: any) =>
    props.isSelected &&
    css`
      span {
        color: ${$bodyText};
        text-decoration: underline;
      }
    `}
`

export const AboutBriefsText = motion(styled.p`
  margin-top: 1.6rem;
  white-space: pre-line;
  color: ${$bodyText};
`)

export const replaceTextVariants = createVariants({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20, position: "absolute" },
})

export const aboutContainerVariants = {
  initial: {
    opacity: 0,
    scale: 1.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.2,
  },
}
