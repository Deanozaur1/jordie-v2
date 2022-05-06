import { mq } from "./breakpoints"
import { css } from "@emotion/react"
import { darken } from "polished"
import noise from "../../../static/img/media/noise.gif"
// Colors
export const $dark = "#463f3a"
export const $black = "#111"
export const $bg = "#f4f3ee"
export const $bodyText = darken(0.1, $bg)

// Width
export const $pageMaxWidth = "1960px"
export const $innerMaxWidth = "1366px"

// App variables
export const $navHeight = "230px"
export const $footerHeight = "220px"

export const $projectImgWidth = "550px"
export const $projectPadding = "4rem"
export const $projectSpaceBetween = "5rem"
export const $projectMaxWidth = `calc(1100px + ${$projectSpaceBetween} + ${$projectPadding})`

export const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;700&display=swap");
  @import url("https://use.typekit.net/yam5cfo.css");

  body {
    background-color: ${$bg};
    color: ${$dark};
    align-items: center;
  }

  .container {
    max-width: ${$pageMaxWidth};
    margin: 0 auto;
    width: 100%;
    padding: 0 2rem;

    &.no-padding {
      padding: 0;
    }

    ${mq("<md")} {
      padding: 0 2rem;
    }

    ${mq("<xxl", ">md")} {
      max-width: ${$innerMaxWidth};
    }
  }

  .inner-container {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    max-width: ${$pageMaxWidth};

    &.no-padding {
      padding: 0;
    }

    ${mq("<md")} {
      padding: 0 2rem;
    }
  }

  .app-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .footer {
      flex: 0 1 ${$footerHeight};
      margin-top: auto;
    }
  }

  .jordie {
    overflow: hidden;
  }
  .section {
    min-height: 80vh;
  }

  .black-bg {
    background-color: ${$black};
  }

  .white-text {
    &,
    input,
    textarea,
    button,
    select,
    a,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${$bg};
    }
  }

  .ui-image {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      opacity: 0.7;
      pointer-events: none;
      mix-blend-mode: overlay;
      background-image: url(${noise});
      background-attachment: fixed;
    }
  }

  .text {
    &-symbol {
      font-size: 0.875rem;
      font-weight: normal;
      line-height: 1.18;
      letter-spacing: -0.22px;
      font-weight: 100;
    }

    &-head--small {
      font-size: 2.6rem;
      line-height: 1;
      font-weight: 300;
      ${mq("<md")} {
        font-size: 1.5rem;
      }
    }
  }
`
