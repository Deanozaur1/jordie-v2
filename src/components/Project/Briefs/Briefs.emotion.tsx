import styled from "@emotion/styled"
import { mq } from "../../../styles/emotion"

export const BriefsContainer = styled("main")`
  padding: 5rem 10rem;

  ${mq("md")} {
    padding: 2rem;
  }
`
export const Brief = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2.5rem;
  justify-content: center;
  font-size: 1.25rem;
`
export const BriefName = styled.div`
  flex: 0 1 20%;
  text-transform: uppercase;
  ${mq("md")} {
    flex: 0 1 35%;
  }
`
export const BriefDescription = styled.div`
  flex: 1;
  max-width: 345px;
  white-space: pre-line;
`
