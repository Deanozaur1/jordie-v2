import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { darken, lighten } from "polished"
import { $bg, $black, $bodyText, $dark, mq } from "../../../styles/emotion"

export const AboutSection = styled("section")`
  background-color: ${$black};
  min-height: 960px;

  display: flex;
  align-items: center;

  ${mq("<md")} {
    padding: 6rem 0;
    align-items: flex-start;
  }
`
export const AboutContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${mq("<md")} {
    flex-direction: column;
    max-width: 450px;
  }
`
export const AboutPortraitContainer = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
`
export const AboutBriefs = styled("div")`
  flex: 1;
`
export const AboutBriefsTitles = styled("div")`
  display: flex;
  align-items: center;
`
export const SlashDivider = styled("b")`
  text-decoration: none !important;
  color: $dark !important;
  margin: 0 0.25rem;
`
export const AboutBriefTitle: any = styled("div")`
  cursor: pointer;
  color: ${lighten(0.15, $dark)};

  ${(props: any) =>
    props.isSelected &&
    css`
      span {
        color: ${$bodyText};
        text-decoration: underline;
      }
    `}
`

export const AboutBriefsText = styled("p")`
  margin-top: 1.6rem;
  white-space: pre-line;
  min-height: 300px;
  color: ${$bodyText};
`
