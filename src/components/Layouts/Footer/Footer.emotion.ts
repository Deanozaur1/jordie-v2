import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { UiLink } from "../.."
import { $bg, $bodyText, $dark, $footerHeight, mq } from "../../../styles/emotion"

export const FooterSection = styled.footer`
  background-color: ${$bg};
  color: ${$dark};
  min-height: ${$footerHeight};
  max-height: ${$footerHeight};
  margin-top: auto;

  display: flex;
  align-items: center;
  z-index: 1;

  ${mq("<md")} {
    max-height: unset;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > * {
    flex: 1;
  }
  ${mq("<md")} {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;

    & > * {
      flex: 1;
      width: 100%;
      padding: 1.75rem 0;
    }

    & > * + * {
      border-top: 1px solid ${$bodyText};
    }
  }
`

export const FooterSocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

  & > * + * {
    margin-inline-start: 0.75rem;
  }
  ${mq("<md")} {
    order: 1;
  }
`

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0;

  & > * + * {
    margin: 0 0 0;
  }

  ${mq("<md")} {
    order: 3;
    align-items: flex-start;
    text-align: start;

    & > * {
      font-size: 0.875rem;
      opacity: 0.85;
    }
  }
`

export const FooterMap = styled.div`
  display: flex;
  justify-content: flex-end;
  ${mq("<md")} {
    order: 2;
    justify-content: flex-start;
  }
`

export const FooterMapWrap = css`
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  .line-link::after {
    text-align: start;
  }

  & > * {
    flex: 0 0 calc(50% - 2rem);
  }

  ${mq("<md")} {
    max-width: unset;

    & > * {
      flex: auto;
    }
  }

  a.current-page {
    font-weight: bold;
    text-decoration: none;
  }
`
