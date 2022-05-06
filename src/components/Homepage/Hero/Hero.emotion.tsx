import styled from "@emotion/styled"
import { $navHeight } from "../../../styles/emotion"

export const HeroHeader = styled("header")`
  height: calc(100vh - ${$navHeight});
  max-height: calc(100vh - ${$navHeight});
  width: 100%;
  display: grid;
  place-content: center;
  text-align: center;
  position: relative;

  img {
    width: 100%;
  }
`

export const HeroTitle = styled("h1")`
  color: #fff;
  font-size: 4.625rem;
  line-height: 0.8;
  font-weight: 300;
  text-shadow: 0px 3px 0px #b2a98f, 0px 0px 10px rgba(0, 0, 0, 0.15),
    0px 0px 2px rgba(0, 0, 0, 0.1), 0px 9px 30px rgba(0, 0, 0, 0.1);
`

export const HeroBackground = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #d8d8d8;

  .ui-image {
    &,
    &::before,
    &::after {
      background-attachment: fixed;
    }
  }
`
