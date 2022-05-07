import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { Image, ProjectCardStyles } from "../../components"
import { $innerMaxWidth, createVariants, mq } from "../emotion"

export const PortfolioPageWrapper = styled.div`
  display: grid;

  & > * {
    grid-area: 1/1;
  }

  .portfolio__bg {
    pointer-events: none;
    user-select: none;
  }
`
export const PortfolioContainer = styled.div`
  z-index: 1;
  max-width: calc(${$innerMaxWidth} * 0.8) !important;
`

export const PortfolioProjects = motion(styled.div`
  --project-padding: 12rem;

  ${mq("<md")} {
    --project-padding: 4rem;
  }

  ${ProjectCardStyles.ProjectCardWrap} + 
  ${ProjectCardStyles.ProjectCardWrap} {
    margin-top: var(--project-padding);
  }

  ${ProjectCardStyles.ProjectCardWrap} {
    &:first-of-type {
      margin-top: calc(var(--project-padding) / 2);
    }
    &:last-of-type {
      margin-bottom: calc(var(--project-padding) / 2);
    }
  }
`)



export const portfolioVariants = createVariants({
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {},
})
export const pCardVariants = {
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
    y: 20,
  },
}
