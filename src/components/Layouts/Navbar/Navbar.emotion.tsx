import styled from "@emotion/styled"
import { mq, $navHeight, $bg, $dark } from "../../../styles/emotion"

export const NavLinks = styled("ul")`
  display: flex;
  align-items: center;
  margin: 0;
`

export const NavItem = styled("li")`
  margin: 0;
  text-transform: uppercase;

  & + & {
    margin-left: 6.5rem;
  }
`

export const Nav: any = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${$navHeight};
  z-index: 1;
  overflow: hidden;

  a {
    color: ${(props: any) => (props.light ? $bg : $dark)};
    display: inline-flex;
  }

  svg path {
    fill: ${(props: any) => (props.light ? $bg : $dark)};
  }

  ${mq("md")} {
    justify-content: center;
    flex-direction: column;
    align-items: center;

    ${NavLinks} {
      margin-top: 0.75rem;
    }

    ${NavItem} {
      & + & {
        margin-left: 1.5rem;
      }
    }
  }
`
