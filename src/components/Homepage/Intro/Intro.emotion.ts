import { createVariants } from "./../../../styles/emotion/variables"
import { motion } from "framer-motion"
import styled from "@emotion/styled"
import { mq } from "../../../styles/emotion"

export const IntroSection = motion(styled.section`
  margin: 12rem auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  ${mq("<md")} {
    margin: 6rem auto;
  }
`)

export const IntroItemCount = styled.span`
  margin-bottom: 1rem;
`

export const IntroItem = motion(styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`)

export const IntroItemText = styled.p`
  white-space: pre-line;
`
export const IntroTitle = styled.span`
  font-size: 1.375rem;
  text-transform: uppercase;
  line-height: 3.05;
  letter-spacing: 0.66px;
  margin-bottom: 2rem;
  color: $dark;
`

export const introVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0,
    },
  },
}

export const introItemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}
