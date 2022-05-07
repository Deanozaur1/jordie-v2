import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { createVariants, mq } from "../../../styles/emotion"

export const BriefsContainer = motion(styled("main")`
  padding: 5rem 10rem;

  ${mq("md")} {
    padding: 2rem;
  }
`)
export const Brief = motion(styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2.5rem;
  justify-content: center;
  font-size: 1.25rem;
  overflow: hidden;
`)
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

export const breifsVariants = createVariants({
  initial: { transition: { staggerChildren: 0.1 } },
  animate: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0 } },
})

export const breifsItemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}
