import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { $projectMaxWidth, mq } from "../emotion"

export const ProjectPageWrapper = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`

export const ProjectPageContainer = styled.div`
  max-width: ${$projectMaxWidth} !important;
`

export const ProjectHeader = styled.header`
  padding-bottom: 2rem;
  overflow: hidden;
  h1 {
    white-space: pre;
    text-align: center;
  }
`
