import { createVariants } from "./../emotion/variables"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { $projectMaxWidth, mq } from "../emotion"

export const ProjectPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`

export const ProjectPageContainer = styled.div`
  position: relative;
  max-width: ${$projectMaxWidth} !important;
`

export const ProjectHeader = styled.header`
  margin-bottom: 2rem;
  overflow: hidden;
  h1 {
    white-space: pre;
    text-align: center;
  }
`

export const headerVariants = createVariants({
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
})
