import styled from "@emotion/styled"
import { mq } from "../../../styles/emotion"

export const IntroSection = styled.section`
  margin: 12rem auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  ${mq("<md")} {
    margin: 6rem auto;
  }
`

export const IntroItemCount = styled.span`
  margin-bottom: 1rem;
`

export const IntroItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`

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
