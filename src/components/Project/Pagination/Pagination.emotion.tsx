import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { darken, lighten } from "polished"
import { $bg, $bodyText, $dark, mq } from "../../../styles/emotion"

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
`
const PagiBaseStyle = css`
  padding: 1rem 2rem;
  color: ${$dark};
  border: ${$dark} 1px solid;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: border-color ease-in 100ms, color ease-in 100ms;

  &:hover {
    color: ${$bg};
    border-color: ${lighten(20, $dark)};
  }
  &:active {
    color: ${$bodyText};
    border-color: ${$bodyText};
  }
`

export const PagiNext = css`
  ${PagiBaseStyle};

  margin-inline-start: auto;

  &::after {
    content: "→";
    margin-inline-start: 0.5rem;
  }
`
export const PagiPrev = css`
  ${PagiBaseStyle};

  margin-inline-end: auto;

  &::before {
    content: "←";
    margin-inline-end: 0.5rem;
  }
`
