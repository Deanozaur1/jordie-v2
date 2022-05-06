import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { mq } from "../../../styles/emotion"

export const ProjectCardWrap: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  /* text-shadow: 0px 3px 0px #424242, 0px 0px 10px rgba(0, 0, 0, 0.15),
    0px 0px 2px rgba(0, 0, 0, 0.1), 0px 9px 30px rgba(0, 0, 0, 0.1); */

  ${mq("<md")} {
    flex-direction: column;
  }

  ${mq(">md")} {
    ${(props: any) =>
      props.reversed &&
      css`
        flex-direction: row-reverse;
      `}
  }
`

export const ProjectCardBody = styled.div`
  display: flex;
  flex-direction: column;
`
